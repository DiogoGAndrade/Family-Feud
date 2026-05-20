import { useRef, useState } from "react";
import type { FeudGame, QuestionBankItem, QuestionPack } from "../types";
import { generateId } from "../utils/idGen";
import { loadQuestionPacks, saveQuestionPacks, importPackFromJson } from "../utils/storage";

/**
 * QUESTION BANK
 *
 * This component manages local question packs.
 * In the future, the "loadOnlinePacks()" function below can be replaced with
 * an API call to a remote question provider (e.g., GET /api/question-packs?lang=pt).
 * The QuestionPack format is intentionally simple so it can be returned by any API.
 *
 * Future integration point:
 *   async function loadOnlinePacks(): Promise<QuestionPack[]> {
 *     const res = await fetch("https://api.feudfactory.com/packs");
 *     return res.json();
 *   }
 */

interface Props {
  games: FeudGame[];
  onAddToGame: (gameId: string, items: QuestionBankItem[]) => void;
}

export default function QuestionBank({ games, onAddToGame }: Props) {
  const [packs, setPacks] = useState<QuestionPack[]>(() => loadQuestionPacks());
  const [selectedPackId, setSelectedPackId] = useState<string | null>(packs[0]?.id ?? null);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [targetGameId, setTargetGameId] = useState<string>(games[0]?.id ?? "");
  const [filter, setFilter] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const selectedPack = packs.find((p) => p.id === selectedPackId) ?? null;

  const filteredItems = selectedPack
    ? selectedPack.questions.filter((q) =>
        q.text.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  const toggleItem = (id: string) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleImportPack = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const pack = await importPackFromJson(file);
      const updated = [...packs.filter((p) => p.id !== pack.id), pack];
      setPacks(updated);
      saveQuestionPacks(updated);
      setSelectedPackId(pack.id);
    } catch (err) {
      alert("Erro ao importar pack: " + (err as Error).message);
    }
    e.target.value = "";
  };

  const handleDeletePack = (id: string) => {
    const updated = packs.filter((p) => p.id !== id);
    setPacks(updated);
    saveQuestionPacks(updated);
    setSelectedPackId(updated[0]?.id ?? null);
  };

  const handleAddToGame = () => {
    if (!targetGameId) return;
    const items = filteredItems.filter((q) => selectedItems.has(q.id));
    if (items.length === 0) return;
    onAddToGame(targetGameId, items);
    setSelectedItems(new Set());
    alert(`${items.length} pergunta(s) adicionada(s) ao jogo.`);
  };

  const handleCreateSamplePack = () => {
    const samplePack: QuestionPack = {
      id: "sample-bank-pack",
      name: "Pack Demo Português",
      description: "Perguntas de demonstração em português.",
      questions: [
        {
          id: generateId(),
          text: "Nomeia uma coisa que encontras num parque.",
          respondentCount: 100,
          answers: [
            { text: "Árvore", votes: 40, points: 40, aliases: ["arvore", "arvores"] },
            { text: "Banco", votes: 22, points: 22, aliases: ["banco de jardim"] },
            { text: "Lago", votes: 18, points: 18, aliases: ["lagoa", "pond"] },
            { text: "Crianças", votes: 12, points: 12, aliases: ["criancas", "miúdos"] },
            { text: "Cão", votes: 8, points: 8, aliases: ["cao", "cachorro"] },
          ],
          tags: ["natureza", "portugal"],
          source: "sample",
        },
        {
          id: generateId(),
          text: "Nomeia um desporto olímpico.",
          respondentCount: 100,
          answers: [
            { text: "Natação", votes: 35, points: 35, aliases: ["nadar", "piscina"] },
            { text: "Atletismo", votes: 28, points: 28, aliases: ["corrida", "atletismo"] },
            { text: "Ginástica", votes: 20, points: 20, aliases: ["ginastica"] },
            { text: "Boxe", votes: 10, points: 10, aliases: ["boxing"] },
            { text: "Esgrima", votes: 7, points: 7, aliases: ["fencing"] },
          ],
          tags: ["desporto", "olimpiadas"],
          source: "sample",
        },
      ],
    };
    const updated = [...packs.filter((p) => p.id !== samplePack.id), samplePack];
    setPacks(updated);
    saveQuestionPacks(updated);
    setSelectedPackId(samplePack.id);
  };

  return (
    <div>
      <div className="section-title">Banco de Perguntas</div>
      <div className="section-sub">
        Importa packs de perguntas em JSON e adiciona-os aos teus jogos.
        {/* Future: online packs will appear here automatically once the API is connected. */}
      </div>

      <div className="bank-layout">
        {/* Left: pack list */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-muted">PACKS ({packs.length})</span>
            <div className="flex gap-1">
              <button className="btn btn-secondary btn-sm" onClick={() => fileRef.current?.click()}>
                📥 Importar
              </button>
              <input
                ref={fileRef}
                type="file"
                accept=".json"
                style={{ display: "none" }}
                onChange={handleImportPack}
              />
            </div>
          </div>
          <div className="bank-list">
            {packs.map((p) => (
              <div
                key={p.id}
                className={`bank-item${selectedPackId === p.id ? " selected" : ""}`}
                onClick={() => setSelectedPackId(p.id)}
              >
                <div className="font-bold">{p.name}</div>
                <div className="text-sm text-muted">{p.questions.length} perguntas</div>
                <button
                  className="btn btn-danger btn-sm mt-1"
                  onClick={(e) => { e.stopPropagation(); handleDeletePack(p.id); }}
                >
                  Eliminar
                </button>
              </div>
            ))}
            {packs.length === 0 && (
              <div className="empty-state text-sm">
                <div>Sem packs carregados.</div>
                <button className="btn btn-primary btn-sm mt-2" onClick={handleCreateSamplePack}>
                  Criar pack de demo
                </button>
              </div>
            )}
          </div>
          {packs.length > 0 && (
            <button className="btn btn-secondary btn-sm mt-2 w-full" onClick={handleCreateSamplePack}>
              + Pack Demo
            </button>
          )}
        </div>

        {/* Right: questions in selected pack */}
        <div>
          {selectedPack ? (
            <>
              <div className="card mb-3">
                <div className="text-lg font-bold text-accent">{selectedPack.name}</div>
                <div className="text-sm text-muted">{selectedPack.description}</div>
              </div>

              <div className="flex gap-2 items-center mb-2">
                <input
                  type="text"
                  placeholder="Filtrar perguntas..."
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  style={{ flex: 1 }}
                />
                <span className="text-sm text-muted">{selectedItems.size} selecionadas</span>
              </div>

              <div className="bank-list mb-3" style={{ maxHeight: "50vh" }}>
                {filteredItems.map((q) => (
                  <div
                    key={q.id}
                    className={`bank-item${selectedItems.has(q.id) ? " selected" : ""}`}
                    onClick={() => toggleItem(q.id)}
                  >
                    <div className="flex justify-between">
                      <span className="font-bold">{q.text}</span>
                      <input
                        type="checkbox"
                        checked={selectedItems.has(q.id)}
                        onChange={() => toggleItem(q.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <div className="text-sm text-muted">
                      {q.answers.length} respostas · {q.respondentCount} respondentes
                    </div>
                    {q.tags.length > 0 && (
                      <div className="flex gap-1 mt-1">
                        {q.tags.map((tag) => (
                          <span key={tag} className="badge badge-standard">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {filteredItems.length === 0 && (
                  <div className="empty-state text-sm">Sem perguntas neste pack.</div>
                )}
              </div>

              {/* Add to game */}
              {games.length > 0 && selectedItems.size > 0 && (
                <div className="card">
                  <div className="text-sm font-bold mb-2">Adicionar ao jogo</div>
                  <div className="field-row">
                    <select
                      value={targetGameId}
                      onChange={(e) => setTargetGameId(e.target.value)}
                      style={{ flex: 1 }}
                    >
                      {games.map((g) => (
                        <option key={g.id} value={g.id}>{g.title}</option>
                      ))}
                    </select>
                    <button className="btn btn-primary" onClick={handleAddToGame}>
                      Adicionar {selectedItems.size} pergunta(s)
                    </button>
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
