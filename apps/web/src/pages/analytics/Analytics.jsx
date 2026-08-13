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

const comparisonDataByPeriod = {
  Mensal: [
    { date: new Date(2026, 7, 1), atual: 800, anterior: 900 },
    { date: new Date(2026, 7, 8), atual: 1400, anterior: 1100 },
    { date: new Date(2026, 7, 15), atual: 1100, anterior: 1300 },
    { date: new Date(2026, 7, 22), atual: 1900, anterior: 1500 },
  ],
  Semestral: [
    { date: new Date(2026, 2, 1), atual: 3800, anterior: 4100 },
    { date: new Date(2026, 3, 1), atual: 4200, anterior: 3900 },
    { date: new Date(2026, 4, 1), atual: 4500, anterior: 4300 },
    { date: new Date(2026, 5, 1), atual: 3900, anterior: 4600 },
    { date: new Date(2026, 6, 1), atual: 4100, anterior: 4000 },
    { date: new Date(2026, 7, 1), atual: 4280.5, anterior: 4470 },
  ],
  Anual: [
    { date: new Date(2025, 8, 1), atual: 42000, anterior: 39500 },
    { date: new Date(2025, 11, 1), atual: 45500, anterior: 43000 },
    { date: new Date(2026, 2, 1), atual: 48200, anterior: 46100 },
    { date: new Date(2026, 5, 1), atual: 49900, anterior: 48700 },
  ],
};

const categoriesData = [
  { name: "Casa", value: 1890.0, color: "var(--color-medium-orange)" },
  { name: "Alimentação", value: 1260.0, color: "var(--color-medium-red)" },
  { name: "Outros", value: 1050.0, color: "var(--color-medium-cyan)" },
];

const statsByPeriod = {
  Mensal: {
    totalGasto: "R$4.280,50",
    totalGastoComparativo: "4,3% a menos",
    maiorGasto: "R$942,00",
    maiorGastoCategoria: "Alimentação",
    taxaEconomia: "32,8%",
    taxaEconomiaComparativo: "2,1% de melhora",
  },
  Semestral: {
    totalGasto: "R$25.680,00",
    totalGastoComparativo: "6,1% a menos",
    maiorGasto: "R$4.500,00",
    maiorGastoCategoria: "Maio",
    taxaEconomia: "29,4%",
    taxaEconomiaComparativo: "1,3% de melhora",
  },
  Anual: {
    totalGasto: "R$185.600,00",
    totalGastoComparativo: "8,7% a menos",
    maiorGasto: "R$49.900,00",
    maiorGastoCategoria: "Jun 2026",
    taxaEconomia: "31,0%",
    taxaEconomiaComparativo: "3,5% de melhora",
  },
};

const savingsGoals = [
  {
    id: 1,
    name: "Reserva de Emergência",
    icon: SecurityIcon,
    iconBg: "var(--color-extra-light-blue)",
    iconColor: "var(--color-dark-blue)",
    current: 18450,
    target: 20000,
  },
  {
    id: 2,
    name: "Carro Novo",
    icon: DirectionsCarIcon,
    iconBg: "var(--color-extra-light-blue)",
    iconColor: "var(--color-medium-blue)",
    current: 12000,
    target: 30000,
    deadline: "Jul 2026",
    status: "atrasado",
  },
  {
    id: 3,
    name: "Férias",
    icon: FlightIcon,
    iconBg: "var(--color-extra-light-pink)",
    iconColor: "var(--color-medium-pink)",
    current: 3800,
    target: 5000,
    deadline: "Dez 2026",
    status: "no_prazo",
  },
];

const Analytics = () => {
  const [period, setPeriod] = useState("Mensal");

  const comparisonData = comparisonDataByPeriod[period];

  const stats = statsByPeriod[period];

  const savingsGoalsWithPercentage = savingsGoals.map((g) => ({
    ...g,
    percentage: Math.round((g.current / g.target) * 100),
  }));

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
          className="md:col-span-2 min-w-50"
        >
          <div className="min-w-50">
            <MonthlyComparisonChart data={comparisonData} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
              <div className="bg-dark-gray/5 rounded-xl p-3">
                <p className="text-dark-gray/60 text-xs">Total Gasto</p>
                <p className="text-dark-gray font-bold text-md">
                  {stats.totalGasto}
                </p>
                <p className="text-dark-green text-xs">
                  {stats.totalGastoComparativo}
                </p>
              </div>
              <div className="bg-dark-gray/5 rounded-xl p-3">
                <p className="text-dark-gray/60 text-xs">Maior Gasto</p>
                <p className="text-dark-gray font-bold text-md">
                  {stats.maiorGasto}
                </p>
                <p className="text-dark-gray/40 text-xs">
                  {stats.maiorGastoCategoria}
                </p>
              </div>
              <div className="bg-dark-gray/5 rounded-xl p-3">
                <p className="text-dark-gray/60 text-xs">Taxa de Economia</p>
                <p className="text-dark-gray font-bold text-md">
                  {stats.taxaEconomia}
                </p>
                <p className="text-dark-green text-xs">
                  {stats.taxaEconomiaComparativo}
                </p>
              </div>
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
        <SavingsGoalsCard goals={savingsGoalsWithPercentage} />
      </div>
    </>
  );
};

export default Analytics;
