import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/ReceiptLong";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SavingsIcon from "@mui/icons-material/Savings";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 font-medium text-lg cursor-pointer
     mx-4 py-3 pl-4 rounded-2xl
     transition-colors duration-200
     ${
       isActive
         ? "text-medium-blue font-bold bg-medium-blue/15 shadow-xs"
         : "text-dark-gray/90 hover:bg-medium-blue/5"
     }`;

  return (
    <nav className="flex w-64 h-screen bg-light-background font-poppins">
      <div className="flex flex-col w-full mt-5">
        <h3 className="text-medium-blue font-bold text-xl ml-8">Save Up</h3>
        <p className="text-dark-gray/80 ml-8 mb-4">Controle Financeiro</p>

        <NavLink to="/dashboard" className={linkClass}>
          <DashboardIcon /> Dashboard
        </NavLink>
        <NavLink to="/transactions" className={linkClass}>
          <ReceiptIcon /> Transações
        </NavLink>
        <NavLink to="/budgets" className={linkClass}>
          <WalletIcon /> Orçamentos
        </NavLink>
        <NavLink to="/goals" className={linkClass}>
          <SavingsIcon /> Metas
        </NavLink>
        <NavLink to="/analytics" className={linkClass}>
          <ShowChartIcon /> Análises
        </NavLink>
        <NavLink to="/settings" className={linkClass}>
          <SettingsIcon /> Configurações
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
