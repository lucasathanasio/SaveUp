import { useNavigate } from "react-router-dom";

import { PieChart } from "@/components/charts/pie-chart";
import { PieSlice } from "@/components/charts/pie-slice";

import BaseCard from "../../../components/ui/BaseCard";

const CategoriesDonutCard = ({ total, monthLabel, categories }) => {
  const navigate = useNavigate();

  return (
    <BaseCard className="h-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-dark-gray font-bold text-base">
          Categorias de Gastos
        </h3>

        <button
          onClick={() => navigate("/budgets")}
          className="text-medium-blue hover:cursor-pointer"
        >
          Ver Todas
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="relative w-32 h-32 shrink-0">
          <PieChart
            data={categories}
            innerRadius={45}
            padAngle={0.035}
            className="w-full h-full"
          >
            {categories.map((category, index) => (
              <PieSlice
                key={category.name}
                index={index}
                color={category.color}
                hoverEffect="grow"
              />
            ))}
          </PieChart>

          {/* Conteúdo central */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-dark-gray font-bold text-lg">R${total}</span>

            <span className="text-dark-gray/50 text-xs">{monthLabel}</span>
          </div>
        </div>

        {/* Legenda */}
        <div className="flex flex-col gap-2 flex-1 w-full">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2 text-dark-gray/80">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: category.color }}
                />

                {category.name}
              </span>

              <span className="text-dark-gray font-medium">
                R$
                {category.value.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BaseCard>
  );
};

export default CategoriesDonutCard;
