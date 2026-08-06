import BaseCard from "../../../components/ui/BaseCard";

import EditIcon from "@mui/icons-material/Edit";

const statusConfig = {
  controlado: {
    label: "Controlado",
    barColor: "bg-dark-green",
    color: "var(--color-dark-green)",
  },
  alerta: {
    label: "% Gasto",
    barColor: "bg-yellow",
    color: "var(--color-yellow)",
  },
  excedido: {
    label: "Excedido",
    barColor: "bg-dark-red",
    color: "var(--color-dark-red)",
  },
  meta: {
    label: "Na Meta",
    barColor: "bg-medium-green",
    color: "var(--color-medium-green)",
  },
};

const CategoryCard = ({
  name,
  icon: Icon,
  iconBg,
  iconColor,
  spent,
  limit,
  status,
}) => {
  const percentage = Math.min((spent / limit) * 100, 100);
  const remaining = limit - spent;
  const config = statusConfig[status];

  return (
    <BaseCard className="relative">
      <button
        className="absolute top-4 right-4 text-dark-gray/60 hover:text-dark-gray/80
      transition"
      >
        <EditIcon fontSize="small" />
      </button>

      <span
        className="w-9 h-9 rounded-full flex items-center justify-center mb-3"
        style={{ backgroundColor: iconBg }}
      >
        <Icon style={{ color: iconColor, fontSize: 18 }} />
      </span>

      <p className="text-dark-gray text-sm font-medium mb-1">{name}</p>
      <p className="text-dark-gray font-bold text-lg mb-2">
        R$ {spent.toFixed(2).replace(".", ",")}{" "}
        <span className="text-dark-gray/50 text-sm font-normal">
          de R$ {limit.toFixed(2).replace(".", ",")}
        </span>
      </p>

      <div className="w-full h-1.5 bg-dark-gray/10 rounded-full overflow-hidden mb-1">
        <div
          className={`h-full ${config.barColor} rounded-full transition-all`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between text-xs">
        <span style={{ color: config.color }} className="font-medium">
          {status === "alerta"
            ? `${percentage.toFixed(0)}% Gasto`
            : config.label}
        </span>
        <span className="text-dark-gray/50">
          {remaining >= 0
            ? `Restam R$ ${remaining.toFixed(2).replace(".", ",")}`
            : `Restam - R$ ${Math.abs(remaining).toFixed(2).replace(".", ",")}`}
        </span>
      </div>
    </BaseCard>
  );
};

export default CategoryCard;
