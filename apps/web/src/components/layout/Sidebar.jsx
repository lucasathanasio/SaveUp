import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/ReceiptLong";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SavingsIcon from "@mui/icons-material/Savings";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = ({ isOpen, onClose }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 font-medium text-lg cursor-pointer
     mx-4 py-3 pl-4 rounded-2xl
     transition-colors duration-200
     ${
       isActive
         ? "text-medium-blue font-bold bg-medium-blue/15 shadow-xs"
         : "text-dark-gray/90 hover:bg-medium-blue/5"
     }`;

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <>
      {/* Overlay escuro — só no mobile quando aberto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <nav
        className={`
          fixed top-0 left-0 h-screen w-64 bg-light-background font-poppins z-30
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        <div className="flex flex-col w-full mt-5">
          <h3 className="text-medium-blue font-bold text-xl ml-8">Save Up</h3>
          <p className="text-dark-gray/80 ml-8 mb-4">Controle Financeiro</p>

          <NavLink
            to="/dashboard"
            className={linkClass}
            onClick={handleLinkClick}
          >
            <DashboardIcon /> Dashboard
          </NavLink>
          <NavLink
            to="/transactions"
            className={linkClass}
            onClick={handleLinkClick}
          >
            <ReceiptIcon /> Transações
          </NavLink>
          <NavLink
            to="/budgets"
            className={linkClass}
            onClick={handleLinkClick}
          >
            <WalletIcon /> Orçamentos
          </NavLink>
          <NavLink to="/goals" className={linkClass} onClick={handleLinkClick}>
            <SavingsIcon /> Metas
          </NavLink>
          <NavLink
            to="/analytics"
            className={linkClass}
            onClick={handleLinkClick}
          >
            <ShowChartIcon /> Análises
          </NavLink>
          <NavLink
            to="/settings"
            className={linkClass}
            onClick={handleLinkClick}
          >
            <SettingsIcon /> Configurações
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
