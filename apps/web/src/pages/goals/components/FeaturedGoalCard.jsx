import BaseCard from "../../../components/ui/BaseCard";

const statusConfig = {
  quase_la: {
    label: "Quase lá!",
    bg: "var(--color-extra-light-green)",
    color: "var(--color-dark-green)",
  },
  em_andamento: {
    label: "Em andamento",
    bg: "var(--color-extra-light-blue)",
    color: "var(--color-medium-blue)",
  },
  atrasada: {
    label: "Atrasada",
    bg: "var(--color-extra-light-red)",
    color: "var(--color-medium-red)",
  },
};

const FeaturedGoalCard = ({
  name,
  icon: Icon,
  deadline,
  current,
  target,
  status,
  message,
}) => {
  const percentage = Math.min((current / target) * 100, 100);
  const config = statusConfig[status];

  return (
    <BaseCard>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 rounded-xl bg-dark-blue flex items-center justify-center">
            <Icon style={{ color: "white", fontSize: 22 }} />
          </span>
          <div>
            <p className="text-md md:text-lg text-dark-gray font-bold">
              {name}
            </p>
            <p className="text-dark-gray/60 text-xs">Fim: {deadline}</p>
          </div>
        </div>

        <span
          className="hidden md:inline-block text-xs font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: config.bg, color: config.color }}
        >
          {config.label}
        </span>
      </div>

      <div className="flex items-end justify-between mb-2">
        <p className="text-dark-blue font-bold text-3xl">
          R${current.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}{" "}
          <span className="text-dark-gray/60 font-normal text-sm">
            de R${target.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </p>
        <p className="text-dark-green font-semibold text-sm">
          {percentage.toFixed(0)}%{" "}
          <span className="hidden lg:inline-block text-dark-gray/40 font-normal text-xs text-right">
            PROGRESSO
          </span>
        </p>
      </div>

      <div className="w-full h-2 bg-dark-gray/10 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-dark-green rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-dark-green text-sm">{message}</p>
    </BaseCard>
  );
};

export default FeaturedGoalCard;
