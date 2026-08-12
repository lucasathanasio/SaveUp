import React, { useState } from "react";

import ChartCard from "../../components/ui/ChartCard";
import SmartTipCard from "../../components/ui/SmartTipCard";
import SegmentedControl from "../../components/ui/SegmentedControl";
import InsightCard from "./components/InsightCard";
import MonthlyComparisonChart from "./components/MonthlyComparisonChart";
import CategoriesDonutCard from "./components/CategoriesDonutCard";
import SavingsGoalsCard from "./components/SavingsGoalsCard";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SecurityIcon from "@mui/icons-material/Security";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const comparisonData = [
  { week: "Semana 1", atual: 800, anterior: 900 },
  { week: "Semana 2", atual: 1400, anterior: 1100 },
  { week: "Semana 3", atual: 1100, anterior: 1300 },
  { week: "Semana 4", atual: 1900, anterior: 1500 },
];

const categoriesData = [
  { name: "Casa", value: 1890.0, color: "var(--color-medium-orange)" },
  { name: "Alimentação", value: 1260.0, color: "var(--color-medium-red)" },
  { name: "Outros", value: 1050.0, color: "var(--color-medium-cyan)" },
];

const savingsGoals = [
  {
    name: "Reserva de Emergência",
    icon: SecurityIcon,
    iconBg: "var(--color-extra-light-blue)",
    iconColor: "var(--color-medium-blue)",
    percentage: 92,
  },
  {
    name: "Férias",
    icon: FlightIcon,
    iconBg: "var(--color-extra-light-pink)",
    iconColor: "var(--color-medium-pink)",
    percentage: 76,
  },
  {
    name: "Carro Novo",
    icon: DirectionsCarIcon,
    iconBg: "var(--color-extra-light-blue)",
    iconColor: "var(--color-medium-blue)",
    percentage: 40,
  },
];

const Analytics = () => {
  const [period, setPeriod] = useState("Mensal");

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 md:h-16 gap-4">
        <div>
          <span className="text-lg md:text-xl text-dark-gray font-bold">
            Análises e Insights
          </span>
          <br />
          <span className="text-md md:text-lg text-dark-gray/80">
            Análises gráficas e mais rápidas
          </span>
        </div>

        <SegmentedControl
          options={["Mensal", "Semestral", "Anual"]}
          active={period}
          onChange={setPeriod}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-5 px-6">
        <div className="flex flex-col gap-6">
          <InsightCard
            icon={TrendingUpIcon}
            iconColor="var(--color-dark-green)"
            borderColor="var(--color-dark-green)"
            label="Marco de Crescimento"
            message="Economizou 15% a mais que no último mês"
          />
          <InsightCard
            icon={WarningAmberIcon}
            iconColor="var(--color-dark-red)"
            borderColor="var(--color-dark-red)"
            label="Alerta de Gasto"
            message="Gastou mais com alimentação essa semana"
          />

          <SmartTipCard title="Dica de Otimização" icon={LightbulbIcon}>
            <p className="text-sm leading-relaxed text-white/90">
              Ao mudar suas assinaturas para cobrança anual, você pode
              economizar mais R$240 por ano, baseado nos padrões de cobrança
              recorrente atuais.
            </p>
          </SmartTipCard>
        </div>

        <ChartCard
          title="Comparação mês a mês"
          description="Visualize seus gastos por período"
          className="md:col-span-2"
        >
          <MonthlyComparisonChart data={comparisonData} />
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="bg-dark-gray/5 rounded-xl p-3">
              <p className="text-dark-gray/60 text-xs">Total Gasto</p>
              <p className="text-dark-gray font-bold text-md">R$4.280,50</p>
              <p className="text-dark-green text-xs">4,3% a menos</p>
            </div>
            <div className="bg-dark-gray/5 rounded-xl p-3">
              <p className="text-dark-gray/60 text-xs">Maior Gasto</p>
              <p className="text-dark-gray font-bold text-md">R$942,00</p>
              <p className="text-dark-gray/40 text-xs">Alimentação</p>
            </div>
            <div className="bg-dark-gray/5 rounded-xl p-3">
              <p className="text-dark-gray/60 text-xs">Taxa de Economia</p>
              <p className="text-dark-gray font-bold text-md">32,8%</p>
              <p className="text-dark-green text-xs">2,1% de melhora</p>
            </div>
          </div>
        </ChartCard>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-6 px-6">
        <CategoriesDonutCard
          total="4.2K"
          monthLabel="ABRIL"
          categories={categoriesData}
        />
        <SavingsGoalsCard goals={savingsGoals} />
      </div>
    </>
  );
};

export default Analytics;
