import BaseCard from "../../../components/ui/BaseCard";

const MonthlyLimitCard = ({ limit, spent }) => {
  const percentage = Math.min((spent / limit) * 100, 100);
  const remaining = limit - spent;

  return (
    <BaseCard>
      <p className="text-dark-gray/50 text-xs font-semibold uppercase mb-1">
        Limite Mensal
      </p>
      <p className="text-dark-blue font-bold text-3xl mb-3">
        R$ {limit.toFixed(2).replace(".", ",")}
      </p>

      <div className="w-full h-2 bg-dark-gray/10 rounded-full overflow-hidden mb-1">
        <div
          className="h-full bg-dark-green rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between text-xs">
        <span className="text-dark-gray/60">
          Gastos até agora: R$ {spent.toFixed(2).replace(".", ",")} (
          {percentage.toFixed(0)}%)
        </span>
        <span className="text-dark-gray/60">
          Restante: R$ {remaining.toFixed(2).replace(".", ",")}
        </span>
      </div>
    </BaseCard>
  );
};

export default MonthlyLimitCard;
