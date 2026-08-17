export const formatCurrencyInput = (rawValue) => {
  const digitsOnly = rawValue.replace(/\D/g, "");
  if (!digitsOnly) return "";

  const numberValue = Number(digitsOnly) / 100;
  return numberValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
