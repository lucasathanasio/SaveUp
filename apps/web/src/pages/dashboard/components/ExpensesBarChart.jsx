import { BarChart } from "@/components/charts/bar-chart";

import { Bar } from "@/components/charts/bar";
import { Grid } from "@/components/charts/grid";
import { BarXAxis } from "@/components/charts/bar-x-axis";
import { YAxis } from "@/components/charts/y-axis";
import { ChartTooltip } from "@/components/charts/tooltip";

import { chartColors } from "@/constants/chartColors";

const data = [
  {
    Mes: "Jan",
    Receitas: 8500,
    Despesas: 4200,
  },
  {
    Mes: "Fev",
    Receitas: 9200,
    Despesas: 5100,
  },
  {
    Mes: "Mar",
    Receitas: 7800,
    Despesas: 4700,
  },
  {
    Mes: "Abr",
    Receitas: 9900,
    Despesas: 6100,
  },
  {
    Mes: "Mai",
    Receitas: 10400,
    Despesas: 5900,
  },
  {
    Mes: "Jun",
    Receitas: 11100,
    Despesas: 6500,
  },
];

const ExpensesBarChart = () => {
  return (
    <BarChart
      data={data}
      xDataKey="Mes"
      margin={{ left: 50 }}
      aspectRatio="2.2 / 1"
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
