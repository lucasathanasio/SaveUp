import React, { useState } from "react";

import Button from "../../components/ui/Button";
import MonthlyLimitCard from "./components/MonthlyLimitCard";
import SmartTipCard from "./components/SmartTipCard";
import CategoryCard from "./components/CategoryCard";
import AddCategoryCard from "./components/AddCategoryCard";

import AddIcon from "@mui/icons-material/Add";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const budgetsByMonth = {
  "2026-08": {
    limit: 4250,
    spent: 2840.5,
    savedAmount: "420",
    categories: [
      {
        id: 1,
        name: "Alimentação",
        icon: RestaurantIcon,
        iconBg: "var(--color-extra-light-red)",
        iconColor: "var(--color-medium-red)",
        spent: 710,
        limit: 800,
        status: "alerta",
      },
      {
        id: 2,
        name: "Moradia",
        icon: HomeIcon,
        iconBg: "var(--color-extra-light-orange)",
        iconColor: "var(--color-medium-orange)",
        spent: 1200,
        limit: 1200,
        status: "meta",
      },
      {
        id: 3,
        name: "Transporte",
        icon: DirectionsCarIcon,
        iconBg: "var(--color-extra-light-pink)",
        iconColor: "var(--color-medium-pink)",
        spent: 145.2,
        limit: 350,
        status: "controlado",
      },
      {
        id: 4,
        name: "Entretenimento",
        icon: SportsEsportsIcon,
        iconBg: "var(--color-extra-light-purple)",
        iconColor: "var(--color-medium-purple)",
        spent: 315,
        limit: 250,
        status: "excedido",
      },
      {
        id: 5,
        name: "Compras",
        icon: ShoppingCartIcon,
        iconBg: "var(--color-extra-light-brown)",
        iconColor: "var(--color-medium-brown)",
        spent: 212,
        limit: 500,
        status: "controlado",
      },
    ],
  },
  "2026-07": {
    limit: 4000,
    spent: 3980,
    savedAmount: "150",
    categories: [
      {
        id: 1,
        name: "Alimentação",
        icon: RestaurantIcon,
        iconBg: "var(--color-extra-light-red)",
        iconColor: "var(--color-medium-red)",
        spent: 790,
        limit: 800,
        status: "alerta",
      },
      {
        id: 2,
        name: "Moradia",
        icon: HomeIcon,
        iconBg: "var(--color-extra-light-orange)",
        iconColor: "var(--color-medium-orange)",
        spent: 1200,
        limit: 1200,
        status: "meta",
      },
      {
        id: 3,
        name: "Transporte",
        icon: DirectionsCarIcon,
        iconBg: "var(--color-extra-light-pink)",
        iconColor: "var(--color-medium-pink)",
        spent: 380,
        limit: 350,
        status: "excedido",
      },
    ],
  },
};

const Budgets = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 7, 1)); // Agosto/2026, mês inicial

  const monthKey = `${selectedDate.getFullYear()}-${String(
    selectedDate.getMonth() + 1,
  ).padStart(2, "0")}`;

  const getMonthKey = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

  const previousMonthDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() - 1,
    1,
  );
  const nextMonthDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    1,
  );

  const hasPreviousMonth = !!budgetsByMonth[getMonthKey(previousMonthDate)];
  const hasNextMonth = !!budgetsByMonth[getMonthKey(nextMonthDate)];

  const currentBudget = budgetsByMonth[monthKey];

  const handlePreviousMonth = () => {
    if (hasPreviousMonth) setSelectedDate(previousMonthDate);
  };

  const handleNextMonth = () => {
    if (hasNextMonth) setSelectedDate(nextMonthDate);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 md:h-16 gap-4">
        <div>
          <span className="text-lg md:text-xl text-dark-gray font-bold">
            Orçamento Mensal
          </span>
          <br />
          <span className="text-md md:text-lg text-dark-gray/80">
            Seus gastos em {monthNames[selectedDate.getMonth()]} de{" "}
            {selectedDate.getFullYear()}
          </span>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-5">
          <div className="flex flex-wrap gap-2">
            <div className="flex gap-2">
              <Button
                variant="secondary"
                title="Mês"
                description="Anterior"
                onClick={handlePreviousMonth}
                disabled={!hasPreviousMonth}
              />
              <Button
                variant="secondary"
                title="Próximo"
                description="Mês"
                onClick={handleNextMonth}
                disabled={!hasNextMonth}
              />
            </div>
          </div>
          <Button
            variant="primary"
            icon={AddIcon}
            title="Nova"
            description="Categoria"
          />
        </div>
      </div>

      {currentBudget ? (
        <>
          <div className="grid gap-6 md:grid-cols-3 mt-5 px-6">
            <div className="md:col-span-2">
              <MonthlyLimitCard
                limit={currentBudget.limit}
                spent={currentBudget.spent}
              />
            </div>
            <SmartTipCard savedAmount={currentBudget.savedAmount} />
          </div>

          <div className="px-6 mt-8">
            <div className="block md:flex items-center justify-between mb-4">
              <h2 className="text-dark-gray font-bold text-lg">
                Categorias de Gastos
              </h2>
              <div className="flex items-center gap-4 text-xs text-dark-gray/60">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-dark-green" />{" "}
                  Controlado
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" /> Alerta
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-dark-red" /> Excedido
                </span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {currentBudget.categories.map((c) => (
                <CategoryCard key={c.id} {...c} />
              ))}
              <AddCategoryCard onClick={() => {}} />
            </div>
          </div>
        </>
      ) : (
        <p className="text-dark-gray/50 text-center mt-10 px-6">
          Nenhum dado de orçamento disponível para este mês.
        </p>
      )}
    </>
  );
};

export default Budgets;
