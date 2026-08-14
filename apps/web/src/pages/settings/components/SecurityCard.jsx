import SecurityIcon from "@mui/icons-material/Security";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BaseCard from "../../../components/ui/BaseCard";

const SecurityCard = ({ lastPasswordChange, onChangePassword }) => (
  <BaseCard>
    <div className="flex items-center gap-2 mb-1">
      <SecurityIcon
        style={{ color: "var(--color-medium-blue)", fontSize: 20 }}
      />
      <h3 className="text-dark-gray font-bold text-base">Segurança da Conta</h3>
    </div>
    <p className="text-dark-gray/50 text-xs mb-4">
      Última alteração de senha: {lastPasswordChange}
    </p>

    <button
      onClick={onChangePassword}
      className="w-full flex items-center justify-between bg-dark-gray/5
        rounded-xl px-4 py-2.5 text-sm text-dark-gray font-medium mb-2
        hover:bg-dark-gray/10 transition"
    >
      <span>Alterar Senha</span>
      <ChevronRightIcon fontSize="small" className="text-dark-gray/40" />
    </button>

    <div
      className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-1 xl:gap-0
  w-full bg-dark-gray/5 rounded-xl px-4 py-2.5 text-sm text-dark-gray font-medium"
    >
      <span>Autenticação de 2 Fatores</span>

      <span className="text-medium-red text-xs font-semibold">
        Desabilitado
      </span>
    </div>
  </BaseCard>
);

export default SecurityCard;
