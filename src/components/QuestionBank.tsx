import { useRef, useState, useMemo } from "react";
import type { FeudGame, QuestionBankItem, QuestionPack } from "../types";
import { loadQuestionPacks, saveQuestionPacks, importPackFromJson } from "../utils/storage";
import { BUILTIN_PACKS } from "../data/questionBank";

/**
 * QUESTION BANK
 *
 * Built-in packs are always available (BUILTIN_PACKS).
 * User-imported packs are stored in localStorage.
 *
 * Future online integration point:
 *   Replace the empty array below with a call to a remote API:
 *     const [onlinePacks, setOnlinePacks] = useState<QuestionPack[]>([]);
 *     useEffect(() => {
 *       fetch("https://api.feudfactory.com/packs?lang=pt")
 *         .then(r => r.json())
 *         .then(setOnlinePacks);
 *     }, []);
 *   Then merge: const allPacks = [...BUILTIN_PACKS, ...onlinePacks, ...userPacks];
 */

interface Props {
  games: FeudGame[];
  onAddToGame: (gameId: string, items: QuestionBankItem[]) => void;
  onCreateGameFromBank: (items: QuestionBankItem[]) => void;
}

export default function QuestionBank({ games, onAddToGame, onCreateGameFromBank }: Props) {
  const [userPacks, setUserPacks] = useState<QuestionPack[]>(() => loadQuestionPacks());
  const allPacks = useMemo(() => [...BUILTIN_PACKS, ...userPacks], [userPacks]);

  const [selectedPackId, setSelectedPackId] = useState<string>(allPacks[0]?.id ?? "");
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [targetGameId, setTargetGameId] = useState<string>(games[0]?.id ?? "");
  const [filter, setFilter] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const selectedPack = allPacks.find((p) => p.id === selectedPackId) ?? null;
  const isBuiltin = selectedPack ? BUILTIN_PACKS.some((p) => p.id === selectedPack.id) : false;

  const filteredItems = useMemo(() => {
    if (!selectedPack) return [];
    const q = filter.toLowerCase();
    return selectedPack.questions.filter(
      (item) =>
        item.text.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [selectedPack, filter]);

  const toggleItem = (id: string) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedItems.size === filteredItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(filteredItems.map((q) => q.id)));
    }
  };

  const handleImportPack = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const pack = await importPackFromJson(file);
      const updated = [...userPacks.filter((p) => p.id !== pack.id), pack];
      setUserPacks(updated);
      saveQuestionPacks(updated);
      setSelectedPackId(pack.id);
    } catch (err) {
      alert("Erro ao importar pack: " + (err as Error).message);
    }
    e.target.value = "";
  };

  const handleDeleteUserPack = (id: string) => {
    if (!confirm("Eliminar este pack?")) return;
    const updated = userPacks.filter((p) => p.id !== id);
    setUserPacks(updated);
    saveQuestionPacks(updated);
    setSelectedPackId(allPacks.find((p) => p.id !== id)?.id ?? "");
  };

  const getSelectedBankItems = () =>
    filteredItems.filter((q) => selectedItems.has(q.id));

  const handleAddToGame = () => {
    if (!targetGameId) return;
    const items = getSelectedBankItems();
    if (items.length === 0) return;
    onAddToGame(targetGameId, items);
    setSelectedItems(new Set());
    alert(`${items.length} pergunta(s) adicionada(s) ao jogo.`);
  };

  const handleCreateGame = () => {
    const items = getSelectedBankItems();
    if (items.length === 0) return;
    onCreateGameFromBank(items);
    setSelectedItems(new Set());
  };

  return (
    <div>
      <div className="section-title">Banco de Perguntas</div>
      <div className="section-sub">
        Navega pelos packs de perguntas e adiciona-as aos teus jogos.
      </div>

      <div className="demo-notice" style={{ marginBottom: "1rem" }}>
        ⚠️ Perguntas de exemplo — edita os votos/respostas antes de usar num jogo real.
        {/* Future: packs de perguntas online aparecerão aqui automaticamente quando a API estiver ligada. */}
      </div>

      <div className="bank-layout">
        {/* Left: pack list */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-muted">PACKS ({allPacks.length})</span>
            <button className="btn btn-secondary btn-sm" onClick={() => fileRef.current?.click()}>
              📥 Importar Pack
            </button>
            <input
              ref={fileRef}
              type="file"
              accept=".json"
              style={{ display: "none" }}
              onChange={handleImportPack}
            />
          </div>

          {/* Built-in packs */}
          <div className="text-sm text-muted" style={{ marginBottom: "0.3rem", marginTop: "0.5rem" }}>
            INCLUÍDOS
          </div>
          <div className="bank-list" style={{ marginBottom: "0.75rem" }}>
            {BUILTIN_PACKS.map((p) => (
              <div
                key={p.id}
                className={`bank-item${selectedPackId === p.id ? " selected" : ""}`}
                onClick={() => { setSelectedPackId(p.id); setSelectedItems(new Set()); }}
              >
                <div className="font-bold">{p.name}</div>
                <div className="text-sm text-muted">{p.questions.length} perguntas</div>
                <span className="badge badge-demo" style={{ marginTop: "0.25rem" }}>Demo</span>
              </div>
            ))}
          </div>

          {/* User packs */}
          {userPacks.length > 0 && (
            <>
              <div className="text-sm text-muted" style={{ marginBottom: "0.3rem" }}>
                IMPORTADOS
              </div>
              <div className="bank-list">
                {userPacks.map((p) => (
                  <div
                    key={p.id}
                    className={`bank-item${selectedPackId === p.id ? " selected" : ""}`}
                    onClick={() => { setSelectedPackId(p.id); setSelectedItems(new Set()); }}
                  >
                    <div className="flex justify-between">
                      <span className="font-bold">{p.name}</span>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) => { e.stopPropagation(); handleDeleteUserPack(p.id); }}
                      >
                        ✕
                      </button>
                    </div>
                    <div className="text-sm text-muted">{p.questions.length} perguntas</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right: questions in selected pack */}
        <div>
          {selectedPack ? (
            <>
              <div className="card mb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-bold text-accent">{selectedPack.name}</div>
                    <div className="text-sm text-muted">{selectedPack.description}</div>
                  </div>
                  {isBuiltin && <span className="badge badge-demo">Demo</span>}
                </div>
              </div>

              {/* Search + select all */}
              <div className="flex gap-2 items-center mb-2">
                <input
                  type="text"
                  placeholder="Pesquisar perguntas ou tags..."
                  value={filter}
                  onChange={(e) => { setFilter(e.target.value); setSelectedItems(new Set()); }}
                  style={{ flex: 1 }}
                />
                <button className="btn btn-secondary btn-sm" onClick={toggleAll}>
                  {selectedItems.size === filteredItems.length && filteredItems.length > 0
                    ? "Desselecionar tudo"
                    : "Selecionar tudo"}
                </button>
                <span className="text-sm text-muted" style={{ whiteSpace: "nowrap" }}>
                  {selectedItems.size} sel.
                </span>
              </div>

              {/* Question list */}
              <div className="bank-list mb-3" style={{ maxHeight: "45vh" }}>
                {filteredItems.map((q) => (
                  <div
                    key={q.id}
                    className={`bank-item${selectedItems.has(q.id) ? " selected" : ""}`}
                    onClick={() => toggleItem(q.id)}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-bold" style={{ flex: 1 }}>{q.text}</span>
                      <input
                        type="checkbox"
                        checked={selectedItems.has(q.id)}
                        onChange={() => toggleItem(q.id)}
                        onClick={(e) => e.stopPropagation()}
                        style={{ marginTop: "2px", flexShrink: 0 }}
                      />
                    </div>
                    <div className="text-sm text-muted">
                      {q.answers.length} respostas · {q.respondentCount} respondentes
                    </div>
                    {q.tags.length > 0 && (
                      <div className="flex gap-1 mt-1" style={{ flexWrap: "wrap" }}>
                        {q.tags.map((tag) => (
                          <span key={tag} className="badge badge-standard">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {filteredItems.length === 0 && (
                  <div className="empty-state text-sm">Sem perguntas para este filtro.</div>
                )}
              </div>

              {/* Action bar */}
              {selectedItems.size > 0 && (
                <div className="card">
                  <div className="text-sm font-bold mb-2">
                    {selectedItems.size} pergunta{selectedItems.size !== 1 ? "s" : ""} selecionada{selectedItems.size !== 1 ? "s" : ""}
                  </div>
                  <div className="flex gap-2" style={{ flexWrap: "wrap" }}>
                    <button className="btn btn-primary" onClick={handleCreateGame}>
                      🆕 Criar novo jogo com estas perguntas
                    </button>
                    {games.length > 0 && (
                      <>
                        <select
                          value={targetGameId}
                          onChange={(e) => setTargetGameId(e.target.value)}
                          style={{ flex: 1, minWidth: 160 }}
                        >
                          {games.map((g) => (
                            <option key={g.id} value={g.id}>{g.title}</option>
                          ))}
                        </select>
                        <button className="btn btn-secondary" onClick={handleAddToGame}>
                          ➕ Adicionar ao jogo
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="empty-state">Seleciona um pack à esquerda.</div>
          )}
        </div>
      </div>
    </div>
  );
}
