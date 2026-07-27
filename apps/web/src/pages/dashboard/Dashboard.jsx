import React from "react";

import MoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import BaseCard from "../../components/ui/BaseCard";
import ChartCard from "../../components/ui/ChartCard";
import ExpensesBarChart from "./components/ExpensesBarChart";
import CategoriesPieChart from "./components/CategoriesPieChart";

const Dashboard = () => {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        <BaseCard title="Saldo Total" value="R$ 100.000,00" icon={MoneyIcon} />

        <BaseCard
          title="Receita Mensal"
          value="R$ 400.000,00"
          icon={TrendingUpIcon}
          className="shadow-[inset_3px_0_0_0_var(--color-dark-green)]"
        />

        <BaseCard
          title="Despesa Mensal"
          value="R$ 100.000,00"
          icon={TrendingDownIcon}
          className="shadow-[inset_3px_0_0_0_var(--color-dark-red)]"
        />

        <ChartCard
          title="Receitas x Despesas"
          description="Análise do seu ano financeiro"
          className="md:col-span-2"
        >
          <ExpensesBarChart />
        </ChartCard>

        <ChartCard title="Categorias" className="md:col-span-1">
          <CategoriesPieChart />
        </ChartCard>
      </div>
    </>
  );
};

export default Dashboard;
