import { useState } from "react";

import CategoryIcon from "@mui/icons-material/Category";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";

import Button from "../../../components/ui/Button";

import { formatCurrencyInput } from "../../../utils/formatCurrencyInput";

const categories = [
  "Alimentação",
  "Transporte",
  "Lazer",
  "Moradia",
  "Compras",
  "Contas",
  "Saúde",
  "Outros",
];

const TransactionForm = ({ onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    type: "despesa",
    date: "",
    value: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleValueChange = (e) => {
    const formatted = formatCurrencyInput(e.target.value);
    setForm((prev) => ({ ...prev, value: formatted }));
  };

  const handleTypeChange = (type) => {
    setForm((prev) => ({ ...prev, type }));
  };

  const isValid =
    form.name.trim().length > 0 &&
    form.category.length > 0 &&
    form.date.length > 0 &&
    form.value.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    const numericValue = Number(
      form.value.replace(/\./g, "").replace(",", "."),
    );

    onSubmit({
      name: form.name.trim(),
      category: form.category,
      type: form.type,
      date: form.date,
      value: numericValue,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs uppercase text-dark-gray/60 block mb-1">
          Nome da Transação
        </label>
        <div className="relative">
          <DescriptionIcon
            style={{ fontSize: 18 }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
          />
          <input
            type="text"
            placeholder="Ex: Supermercado"
            value={form.name}
            onChange={handleChange("name")}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-gray/5 text-sm
              outline-none focus:ring-2 focus:ring-dark-blue/30"
          />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase text-dark-gray/60 block mb-1">
          Categoria
        </label>
        <div className="relative">
          <CategoryIcon
            style={{ fontSize: 18 }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
          />
          <select
            value={form.category}
            onChange={handleChange("category")}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-gray/5 text-sm
              outline-none focus:ring-2 focus:ring-dark-blue/30 appearance-none"
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs uppercase text-dark-gray/60 block mb-1">
          Tipo
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleTypeChange("receita")}
            className={`py-2.5 rounded-xl text-sm font-medium border transition ${
              form.type === "receita"
                ? "bg-dark-green/10 border-dark-green text-dark-green"
                : "bg-dark-gray/5 border-transparent text-dark-gray/60"
            }`}
          >
            Receita
          </button>
          <button
            type="button"
            onClick={() => handleTypeChange("despesa")}
            className={`py-2.5 rounded-xl text-sm font-medium border transition ${
              form.type === "despesa"
                ? "bg-medium-red/10 border-medium-red text-medium-red"
                : "bg-dark-gray/5 border-transparent text-dark-gray/60"
            }`}
          >
            Despesa
          </button>
        </div>
      </div>

      <div>
        <label className="text-xs uppercase text-dark-gray/60 block mb-1">
          Data
        </label>
        <div className="relative">
          <CalendarTodayIcon
            style={{ fontSize: 16 }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
          />
          <input
            type="date"
            value={form.date}
            onChange={handleChange("date")}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-gray/5 text-sm
              outline-none focus:ring-2 focus:ring-dark-blue/30"
          />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase text-dark-gray/60 block mb-1">
          Valor
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 text-sm">
            R$
          </span>
          <input
            type="text"
            inputMode="numeric"
            placeholder="0,00"
            value={form.value}
            onChange={handleValueChange}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-gray/5 text-sm
              outline-none focus:ring-2 focus:ring-dark-blue/30"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button
          type="submit"
          variant="primary"
          title="Adicionar Transação"
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

export default TransactionForm;
