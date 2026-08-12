import { LineChart } from "@/components/charts/line-chart";
import { Line } from "@/components/charts/line";
import { Grid } from "@/components/charts/grid";
import { XAxis } from "@/components/charts/x-axis";
import { YAxis } from "@/components/charts/y-axis";
import { ChartTooltip } from "@/components/charts/tooltip";

import { chartColors } from "@/constants/chartColors";

const MonthlyComparisonChart = ({ data }) => {
  return (
    <LineChart
      data={data}
      xDataKey="week"
      margin={{ left: 10 }}
      aspectRatio="2.2 / 1"
    >
      <Grid horizontal />

      <XAxis />

      <YAxis />

      <Line
        dataKey="atual"
        stroke={chartColors.atual}
        strokeWidth={2}
        dot={false}
      />

      <Line
        dataKey="anterior"
        stroke={chartColors.anterior}
        strokeOpacity={0.3}
        strokeWidth={2}
        dot={false}
      />

      <ChartTooltip />
    </LineChart>
  );
};

export default MonthlyComparisonChart;
