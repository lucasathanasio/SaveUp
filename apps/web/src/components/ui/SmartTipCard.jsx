// components/ui/SmartTipCard.jsx
const SmartTipCard = ({
  title = "Dica Inteligente",
  icon: Icon,
  savedAmount,
  children,
}) => {
  return (
    <div
      className="bg-dark-blue rounded-2xl p-5 font-poppins text-white h-full flex flex-col
      hover:-translate-y-0.5 transition"
    >
      <div className="flex items-center gap-2 mb-2">
        {Icon && <Icon fontSize="small" />}
        <p className="text-white/60 text-xs font-semibold uppercase">{title}</p>
      </div>

      {children ? (
        children
      ) : (
        <p className="text-sm leading-relaxed">
          Você está no caminho certo para economizar{" "}
          <span className="text-light-green font-semibold">
            R${savedAmount} a mais
          </span>{" "}
          do que no mês passado. Continue assim!
        </p>
      )}
    </div>
  );
};

export default SmartTipCard;
