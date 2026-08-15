import { useState, useEffect } from "react";
import { BarChart } from "@/components/charts/bar-chart";

import { Bar } from "@/components/charts/bar";
import { Grid } from "@/components/charts/grid";
import { BarXAxis } from "@/components/charts/bar-x-axis";
import { YAxis } from "@/components/charts/y-axis";
import { ChartTooltip } from "@/components/charts/tooltip";

import { chartColors } from "@/constants/chartColors";

const data = [
  { Mes: "Jan", Receitas: 8500, Despesas: 4200 },
  { Mes: "Fev", Receitas: 9200, Despesas: 5100 },
  { Mes: "Mar", Receitas: 7800, Despesas: 4700 },
  { Mes: "Abr", Receitas: 9900, Despesas: 6100 },
  { Mes: "Mai", Receitas: 10400, Despesas: 5900 },
  { Mes: "Jun", Receitas: 11100, Despesas: 6500 },
];

const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false,
  );

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmall;
};

const ExpensesBarChart = () => {
  const isSmallScreen = useIsSmallScreen();
  const chartData = isSmallScreen ? data.slice(-3) : data;

  return (
    <BarChart
      data={chartData}
      xDataKey="Mes"
      margin={{ left: 50 }}
      className="min-h-60"
      barGap={0.1}
    >
      <Grid horizontal />
      <YAxis />
      <BarXAxis />
      <Bar dataKey="Receitas" fill={chartColors.receitas} />
      <Bar dataKey="Despesas" fill={chartColors.despesas} />
      <ChartTooltip />
    </BarChart>
  );
};

export default ExpensesBarChart;
