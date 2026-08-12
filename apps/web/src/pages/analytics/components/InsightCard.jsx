import BaseCard from "../../../components/ui/BaseCard";

const InsightCard = ({
  icon: Icon,
  iconColor,
  borderColor,
  label,
  message,
}) => (
  <BaseCard className="border-l-4" style={{ borderColor }}>
    <div className="flex items-center gap-2 mb-2">
      <Icon style={{ color: iconColor, fontSize: 18 }} />
      <span
        className="text-xs font-semibold uppercase"
        style={{ color: iconColor }}
      >
        {label}
      </span>
    </div>
    <p className="text-dark-gray font-medium text-sm leading-snug">{message}</p>
  </BaseCard>
);

export default InsightCard;
