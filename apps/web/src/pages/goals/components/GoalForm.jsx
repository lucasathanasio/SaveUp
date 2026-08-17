import { useState } from "react";

import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";

import Button from "../../../components/ui/Button";
import { formatCurrencyInput } from "../../../utils/formatCurrencyInput";

const GoalForm = ({ onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    targetValue: "",
    currentValue: "",
    deadline: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleTargetValueChange = (e) => {
    const formatted = formatCurrencyInput(e.target.value);
    setForm((prev) => ({ ...prev, targetValue: formatted }));
  };

  const handleCurrentValueChange = (e) => {
    const formatted = formatCurrencyInput(e.target.value);
    setForm((prev) => ({ ...prev, currentValue: formatted }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    const numericCurrentValue = form.currentValue
      ? Number(form.currentValue.replace(/\./g, "").replace(",", "."))
      : 0;

    onSubmit({
      name: form.name.trim(),
      targetValue: numericTargetValue,
      currentValue: numericCurrentValue,
      deadline: form.deadline,
    });
  };

  const today = new Date();

  const formattedToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const numericTargetValue = form.targetValue
    ? Number(form.targetValue.replace(/\./g, "").replace(",", "."))
    : 0;

  const isValid =
    form.name.trim().length > 0 &&
    numericTargetValue > 0 &&
    form.deadline.length > 0 &&
    form.deadline >= formattedToday;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs uppercase text-dark-gray/60 block mb-1">
          Nome da Meta
        </label>
        <div className="relative">
          <FlagOutlinedIcon
            style={{ fontSize: 18 }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
          />
          <input
            type="text"
            placeholder="Ex: Viagem Europa"
            value={form.name}
            onChange={handleChange("name")}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-gray/5 text-sm 
              outline-none focus:ring-2 focus:ring-dark-blue/30"
          />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase text-dark-gray/60 block mb-1">
          Valor da Meta
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 text-sm">
            R$
          </span>
          <input
            type="text"
            inputMode="numeric"
            placeholder="0,00"
            value={form.targetValue}
            onChange={handleTargetValueChange}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-gray/5 text-sm 
              outline-none focus:ring-2 focus:ring-dark-blue/30"
          />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase text-dark-gray/60 block mb-1">
          Valor Já Economizado{" "}
          <span className="normal-case text-dark-gray/40">(opcional)</span>
        </label>
        <div className="relative">
          <SavingsOutlinedIcon
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

      <div>
        <label className="text-xs uppercase text-dark-gray/60 block mb-1">
          Data Limite
        </label>
        <div className="relative">
          <CalendarTodayIcon
            style={{ fontSize: 16 }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
          />
          <input
            type="date"
            min={formattedToday}
            value={form.deadline}
            onChange={handleChange("deadline")}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-gray/5 text-sm 
              outline-none focus:ring-2 focus:ring-dark-blue/30"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button
          type="submit"
          variant="primary"
          title="Adicionar Meta"
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

export default GoalForm;
