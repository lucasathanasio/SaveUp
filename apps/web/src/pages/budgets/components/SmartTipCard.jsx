const SmartTipCard = ({ savedAmount }) => {
  return (
    <div
      className="bg-dark-blue rounded-2xl p-5 font-poppins text-white h-full
    hover:-translate-y-0.5 transition"
    >
      <p className="text-white/60 text-xs font-semibold uppercase mb-2">
        Dica Inteligente
      </p>
      <p className="text-sm leading-relaxed">
        Você está no caminho certo para economizar{" "}
        <span className="text-light-green font-semibold">
          R${savedAmount} a mais
        </span>{" "}
        do que no mês passado. Continue assim!
      </p>
    </div>
  );
};

export default SmartTipCard;
