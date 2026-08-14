import DarkModeIcon from "@mui/icons-material/DarkMode";
import BaseCard from "../../../components/ui/BaseCard";
import Toggle from "../../../components/ui/Toggle";

const PreferencesCard = ({ preferences, onChange }) => (
  <BaseCard className="h-full">
    <h2 className="text-dark-gray font-bold text-lg mb-4">Preferências</h2>

    <div className="flex items-center justify-between mb-6">
      <span className="flex items-center gap-2 text-dark-gray text-sm font-medium">
        <DarkModeIcon fontSize="small" className="text-dark-gray/60" /> Modo
        Escuro
      </span>
      <Toggle
        checked={preferences.darkMode}
        onChange={(v) => onChange("darkMode", v)}
      />
    </div>

    <div className="mb-6">
      <label className="text-xs font-semibold text-dark-gray/60 uppercase block mb-2">
        Moeda Padrão
      </label>
      <select
        value={preferences.currency}
        onChange={(e) => onChange("currency", e.target.value)}
        className="w-full px-3 py-2 rounded-xl bg-dark-gray/5 text-sm outline-none"
      >
        <option value="BRL">BRL - Real Brasileiro</option>
        <option value="USD">USD - US Dollar</option>
        <option value="EUR">EUR - Euro</option>
      </select>
    </div>

    <div className="mb-6">
      <label className="text-xs font-semibold text-dark-gray/60 uppercase block mb-2">
        Idioma Padrão
      </label>
      <select
        value={preferences.language}
        onChange={(e) => onChange("language", e.target.value)}
        className="w-full px-3 py-2 rounded-xl bg-dark-gray/5 text-sm outline-none"
      >
        <option value="pt-BR">Português - BR</option>
        <option value="en-US">English - US</option>
      </select>
    </div>

    <div className="flex items-center justify-between mb-4 border-t border-dark-gray/10 pt-4">
      <span className="text-dark-gray text-sm font-medium">Notificações</span>
      <Toggle
        checked={preferences.notifications}
        onChange={(v) => onChange("notifications", v)}
      />
    </div>

    <div className="flex items-center justify-between">
      <span className="text-dark-gray text-sm font-medium">
        Email de Resumo Mensal
      </span>
      <Toggle
        checked={preferences.monthlyEmail}
        onChange={(v) => onChange("monthlyEmail", v)}
      />
    </div>
  </BaseCard>
);

export default PreferencesCard;
