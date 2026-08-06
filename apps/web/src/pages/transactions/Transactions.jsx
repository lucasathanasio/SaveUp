import React from "react";

import ChartCard from "../../components/ui/ChartCard";
import Button from "../../components/ui/Button";
import TransactionFilters from "./components/TransactionFilters";
import TransactionsList from "./components/TransactionList";

import { useTransactionFilters } from "../../hooks/useTransactionFilters";

import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PixIcon from "@mui/icons-material/Pix";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const data = [
  {
    id: 1,
    name: "Supermercados Atacadão",
    category: "Compras",
    date: "2026-08-04",
    value: 125.81,
    type: "despesa",
    paymentMethod: "Cartão de Crédito",
    icon: ShoppingCartIcon,
    iconBg: "var(--color-extra-light-blue)",
    iconColor: "var(--color-light-blue)",
  },
  {
    id: 2,
    name: "PIX Recebido",
    category: "PIX",
    date: "2026-07-28",
    value: 150.0,
    type: "receita",
    paymentMethod: "Transferência Bancária",
    icon: PixIcon,
    iconBg: "var(--color-extra-light-green)",
    iconColor: "var(--color-medium-green)",
  },
  {
    id: 3,
    name: "Pizzaria Brasil",
    category: "Alimentação",
    date: "2026-07-04",
    value: 252.5,
    type: "despesa",
    paymentMethod: "Cartão de Débito",
    icon: RestaurantIcon,
    iconBg: "var(--color-extra-light-red)",
    iconColor: "var(--color-medium-red)",
  },
];

const Transactions = () => {
  const { filters, setFilters, filteredTransactions } =
    useTransactionFilters(data);

  return (
    <>
      <div className="block md:flex items-center justify-between px-6 h-16">
        <div>
          <span className="text-dark-gray font-bold text-xl">Extrato</span>
          <br />
          <span className="text-dark-gray/80 text-lg">
            Resumo dos seus gastos
          </span>
        </div>
        <div className="mt-2 md:mt-0">
          <Button
            variant="primary"
            icon={AddIcon}
            title="Adicionar"
            description="Transação"
          />
        </div>
      </div>

      <div className="mt-12 md:mt-6 gap-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] items-start">
        <TransactionFilters filters={filters} setFilters={setFilters} />
        <TransactionsList transactions={filteredTransactions} />
      </div>
    </>
  );
};

export default Transactions;
