import { useRef } from "react";
import type { FeudGame } from "../types";
import { exportGameToJson, importGameFromJson } from "../utils/storage";

interface Props {
  onImport: (game: FeudGame) => void;
}

export default function ImportExportPanel({ onImport }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const game = await importGameFromJson(file);
      onImport(game);
    } catch (err) {
      alert("Erro ao importar: " + (err as Error).message);
    }
    // Reset input so same file can be re-imported
    e.target.value = "";
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => fileRef.current?.click()}
      >
        📥 Importar JSON
      </button>
      <input
        ref={fileRef}
        type="file"
        accept=".json"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export function ExportButton({ game }: { game: FeudGame }) {
  return (
    <button
      className="btn btn-secondary btn-sm"
      onClick={() => exportGameToJson(game)}
      title="Exportar jogo como JSON"
    >
      📤 Exportar JSON
    </button>
  );
}
