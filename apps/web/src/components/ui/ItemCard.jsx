import EditIcon from "@mui/icons-material/Edit";
import BaseCard from "./BaseCard";

const ItemCard = ({
  name,
  icon: Icon,
  iconBg,
  iconColor,
  current,
  total,
  amountSuffix, // ex: "de R$800,00" (Budgets) — opcional
  topRight, // ex: "40%" (Goals) — opcional
  barColor = "bg-medium-blue",
  footerLeft, // ex: "Controlado" / "Meta: R$5.000,00"
  footerLeftColor,
  footerRight, // ex: "Restam R$90,00" / "Mar 2026"
  footerRightColor,
  onEdit,
}) => {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <BaseCard className="relative min-h-[180px]">
      <button
        onClick={onEdit}
        className="absolute top-4 right-4 text-dark-gray/60 hover:text-dark-gray/80 transition"
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

      <div className="flex items-center justify-between mb-2">
        <p className="text-dark-gray font-bold text-lg">
          R$ {current.toFixed(2).replace(".", ",")}{" "}
          {amountSuffix && (
            <span className="text-dark-gray/50 text-sm font-normal">
              {amountSuffix}
            </span>
          )}
        </p>
        {topRight && (
          <span className="text-dark-gray/50 text-sm font-medium">
            {topRight}
          </span>
        )}
      </div>

      <div className="w-full h-1.5 bg-dark-gray/10 rounded-full overflow-hidden mb-1">
        <div
          className={`h-full ${barColor} rounded-full transition-all`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between text-xs">
        <span style={{ color: footerLeftColor }} className="font-medium">
          {footerLeft}
        </span>
        <span style={{ color: footerRightColor }} className="text-dark-gray/50">
          {footerRight}
        </span>
      </div>
    </BaseCard>
  );
};

export default ItemCard;
