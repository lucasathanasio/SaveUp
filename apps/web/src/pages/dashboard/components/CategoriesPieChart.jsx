import { PieChart } from "@/components/charts/pie-chart";
import { PieSlice } from "@/components/charts/pie-slice";
import { PieCenter } from "@/components/charts/pie-center";

import { chartColors } from "@/constants/chartColors";

const data = [
  {
    label: "Alimentação",
    value: 1200,
  },
  {
    label: "Transporte",
    value: 500,
  },
  {
    label: "Lazer",
    value: 300,
  },
  {
    label: "Moradia",
    value: 2000,
  },
];

const CategoriesPieChart = () => {
  return (
    <PieChart data={data} innerRadius={70} size={220}>
      {data.map((item, index) => (
        <PieSlice
          key={item.label}
          index={index}
          fill={chartColors.categories[index]}
        />
      ))}

      <PieCenter prefix="R$ " />
    </PieChart>
  );
};

export default CategoriesPieChart;
