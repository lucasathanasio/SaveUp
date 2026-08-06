import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import BaseCard from "../../../components/ui/BaseCard";

const categories = ["Todas", "Compras", "PIX", "Alimentação", "Contas"];
const types = ["Todas", "Receita", "Despesa"];
const periods = ["7 Dias", "30 Dias", "90 Dias"];

const Pill = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-sm font-medium transition
      ${
        active
          ? "bg-dark-blue text-white"
          : "bg-dark-gray/10 text-dark-gray/70 hover:bg-dark-gray/15"
      }`}
  >
    {label}
  </button>
);

const TransactionFilters = ({ filters, setFilters }) => {
  return (
    <BaseCard className="flex flex-col gap-5">
      <div className="relative">
        <SearchIcon
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-gray/50"
          fontSize="small"
        />
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full pl-9 pr-3 py-2 rounded-xl bg-dark-gray/5
            text-sm outline-none focus:ring-2 focus:ring-dark-blue/30"
          value={filters.search}
          onChange={(e) =>
            setFilters((f) => ({
              ...f,
              search: e.target.value,
            }))
          }
        />
      </div>

      <div>
        <p className="text-xs font-semibold text-dark-gray/60 uppercase mb-2">
          Categoria
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Pill
              key={c}
              label={c}
              active={filters.category === c}
              onClick={() => setFilters((f) => ({ ...f, category: c }))}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-dark-gray/60 uppercase mb-2">
          Tipo
        </p>
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <Pill
              key={t}
              label={t}
              active={filters.type === t}
              onClick={() => setFilters((f) => ({ ...f, type: t }))}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-dark-gray/60 uppercase mb-2">
          Período
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {periods.map((p) => (
            <Pill
              key={p}
              label={p}
              active={filters.period === p}
              onClick={() => setFilters((f) => ({ ...f, period: p }))}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <button
              onClick={() =>
                document.getElementById("startDateInput").showPicker()
              }
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm
        bg-dark-gray/10 text-dark-gray/70"
            >
              <CalendarMonthIcon className="w-3.5 h-3.5" fontSize="small" />
              {filters.startDate || "Data inicial"}
            </button>
            <input
              id="startDateInput"
              type="date"
              value={filters.startDate}
              onChange={(e) =>
                setFilters((f) => ({ ...f, startDate: e.target.value }))
              }
              className="absolute opacity-0 pointer-events-none"
            />
          </div>

          <div className="relative">
            <button
              onClick={() =>
                document.getElementById("endDateInput").showPicker()
              }
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm
        bg-dark-gray/10 text-dark-gray/70"
            >
              <CalendarMonthIcon className="w-3.5 h-3.5" fontSize="small" />
              {filters.endDate || "Data final"}
            </button>
            <input
              id="endDateInput"
              type="date"
              value={filters.endDate}
              onChange={(e) =>
                setFilters((f) => ({ ...f, endDate: e.target.value }))
              }
              className="absolute opacity-0 pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-dark-gray/60 uppercase mb-2">
          Valor
        </p>

        <div className="flex items-center gap-2">
          <div className="flex-1">
            <label className="text-xs text-dark-gray/50 block mb-1">
              Mínimo
            </label>
            <input
              type="number"
              min="0"
              placeholder="R$ 0"
              value={filters.minValue}
              onChange={(e) => {
                const value =
                  e.target.value === "" ? "" : Number(e.target.value);
                setFilters((f) => ({ ...f, minValue: value }));
              }}
              className="w-full px-3 py-2 rounded-xl bg-dark-gray/10 text-sm
          outline-none focus:ring-2 focus:ring-dark-blue/30"
            />
          </div>

          <span className="text-dark-gray/50 mt-4">—</span>

          <div className="flex-1">
            <label className="text-xs text-dark-gray/50 block mb-1">
              Máximo
            </label>
            <input
              type="number"
              min="0"
              placeholder="R$ 9.000+"
              value={filters.maxValue}
              onChange={(e) => {
                const value =
                  e.target.value === "" ? "" : Number(e.target.value);
                setFilters((f) => ({ ...f, maxValue: value }));
              }}
              className="w-full px-3 py-2 rounded-xl bg-dark-gray/10 text-dark-gray text-sm
          outline-none focus:ring-2 focus:ring-dark-blue/30"
            />
          </div>
        </div>
        {filters.minValue !== "" &&
          filters.maxValue !== "" &&
          filters.minValue > filters.maxValue && (
            <p className="text-xs text-medium-red mt-3">
              O valor mínimo não pode ser maior que o máximo
            </p>
          )}
      </div>
    </BaseCard>
  );
};

export default TransactionFilters;
