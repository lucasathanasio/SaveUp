const TypeBadge = ({ type }) => {
  const isReceita = type === "receita";
  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${
        isReceita
          ? "bg-pastel-green text-medium-green"
          : "bg-pastel-red text-medium-red"
      }`}
    >
      {isReceita ? "Receita" : "Despesa"}
    </span>
  );
};

export default TypeBadge;
