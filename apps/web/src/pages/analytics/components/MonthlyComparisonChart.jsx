import { LineChart } from "@/components/charts/line-chart";
import { Line } from "@/components/charts/line";
import { Grid } from "@/components/charts/grid";
import { XAxis } from "@/components/charts/x-axis";
import { YAxis } from "@/components/charts/y-axis";
import { ChartTooltip } from "@/components/charts/tooltip";

import { chartColors } from "@/constants/chartColors";

const MonthlyComparisonChart = ({ data }) => (
  <LineChart data={data} xDataKey="date" style={{ height: 200 }}>
    <Grid />
    <XAxis />
    <YAxis />
    <Line dataKey="atual" stroke={"var(--color-medium-cyan)"} />
    <Line dataKey="anterior" stroke={"var(--color-medium-orange)"} />
    <ChartTooltip />
  </LineChart>
);

export default MonthlyComparisonChart;
