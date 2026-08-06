import React from "react";

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

const categories = [
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
];

const Budgets = () => {
  const today = new Date();
  const currentMonthName = monthNames[today.getMonth()];
  const currentYear = today.getFullYear();

  return (
    <>
      <div className="block md:flex items-center justify-between px-6 h-16">
        <div>
          <span className="text-dark-gray font-bold text-xl">
            Orçamento Mensal
          </span>
          <br />
          <span className="text-dark-gray/80 text-lg">
            Garantindo sua liberdade financeira para {currentMonthName} de{" "}
            {currentYear}
          </span>
        </div>
        <div className="flex gap-5 mt-2 md:mt-0">
          <Button variant="secondary" title="Mês" description="Anterior" />
          <Button
            variant="primary"
            icon={AddIcon}
            title="Nova"
            description="Categoria"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-5 px-6">
        <div className="md:col-span-2">
          <MonthlyLimitCard limit={4250} spent={2840.5} />
        </div>
        <SmartTipCard savedAmount="420" />
      </div>

      <div className="px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-dark-gray font-bold text-lg">
            Categorias de Gastos
          </h2>
          <div className="flex items-center gap-4 text-xs text-dark-gray/60">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-dark-green" /> Controlado
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
          {categories.map((c) => (
            <CategoryCard key={c.id} {...c} />
          ))}
          <AddCategoryCard onClick={() => {}} />
        </div>
      </div>
    </>
  );
};

export default Budgets;
