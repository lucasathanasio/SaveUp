import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import BaseCard from "../../../components/ui/BaseCard";

const ExportDataCard = ({ onExport }) => (
  <BaseCard>
    <div className="flex items-center gap-2 mb-1">
      <CloudDownloadIcon
        style={{ color: "var(--color-medium-blue)", fontSize: 20 }}
      />
      <h3 className="text-dark-gray font-bold text-base">Exportar Dados</h3>
    </div>
    <p className="text-dark-gray/50 text-xs mb-4">
      Exporte seus dados e veja-os offline
    </p>

    <button
      onClick={onExport}
      className="w-full bg-dark-gray/5 rounded-xl px-4 py-2.5 text-sm
        text-dark-gray font-medium hover:bg-dark-gray/10 transition"
    >
      Exportar Dados
    </button>
  </BaseCard>
);

export default ExportDataCard;
