import { useState } from "react";

import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import PaymentsIcon from "@mui/icons-material/Payments";

import Button from "../../../components/ui/Button";
import { formatCurrencyInput } from "../../../utils/formatCurrencyInput";

const formatNumberToInput = (value) =>
  value != null
    ? value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "";

const CategoryForm = ({ onSubmit, onCancel, initialValues }) => {
  const isEditing = Boolean(initialValues);

  const [form, setForm] = useState({
    name: initialValues?.name ?? "",
    maxValue: formatNumberToInput(initialValues?.maxValue),
    currentValue: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleMaxValueChange = (e) => {
    const formatted = formatCurrencyInput(e.target.value);
    setForm((prev) => ({ ...prev, maxValue: formatted }));
  };

  const handleCurrentValueChange = (e) => {
    const formatted = formatCurrencyInput(e.target.value);
    setForm((prev) => ({ ...prev, currentValue: formatted }));
  };

  const isValid = form.name.trim().length > 0 && form.maxValue.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    const numericMaxValue = Number(
      form.maxValue.replace(/\./g, "").replace(",", "."),
    );

    const numericCurrentValue = form.currentValue
      ? Number(form.currentValue.replace(/\./g, "").replace(",", "."))
      : 0;

    onSubmit({
      ...(isEditing && { id: initialValues.id }),
      name: form.name.trim(),
      maxValue: numericMaxValue,
      currentValue: numericCurrentValue,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs uppercase text-dark-gray/60 block mb-1">
          Nome da Categoria
        </label>
        <div className="relative">
          <LabelOutlinedIcon
            style={{ fontSize: 18 }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
          />
          <input
            type="text"
            placeholder="Ex: Alimentação"
            value={form.name}
            onChange={handleChange("name")}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-gray/5 text-sm
              outline-none focus:ring-2 focus:ring-dark-blue/30"
          />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase text-dark-gray/60 block mb-1">
          Valor Mensal Pretendido Gastar
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 text-sm">
            R$
          </span>
          <input
            type="text"
            inputMode="numeric"
            placeholder="0,00"
            value={form.maxValue}
            onChange={handleMaxValueChange}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-gray/5 text-sm
              outline-none focus:ring-2 focus:ring-dark-blue/30"
          />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase text-dark-gray/60 block mb-1">
          Valor Mensal Já Gasto
        </label>
        <div className="relative">
          <PaymentsIcon
            style={{ fontSize: 18 }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
          />
          <input
            type="text"
            inputMode="numeric"
            placeholder="0,00"
            value={form.currentValue}
            onChange={handleCurrentValueChange}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-gray/5 text-sm
              outline-none focus:ring-2 focus:ring-dark-blue/30"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button
          type="submit"
          variant="primary"
          title={isEditing ? "Salvar Alterações" : "Adicionar Categoria"}
          disabled={!isValid}
        />
        <Button
          type="button"
          variant="secondary"
          title="Cancelar"
          onClick={onCancel}
        />
      </div>
    </form>
  );
};

export default CategoryForm;
