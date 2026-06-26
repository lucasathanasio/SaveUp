import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Topbar = ({ onMenuToggle, menuOpen, onSearchToggle }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchOpen((prev) => {
      onSearchToggle?.(!prev);
      return !prev;
    });
  };

  return (
    <nav
      className={`
        fixed top-0 right-0 bg-light-background font-poppins z-10
        left-0 lg:left-64
      `}
    >
      {/* Linha principal */}
      <div className="flex items-center justify-between px-6 h-16">
        {/* Logo — só no mobile */}
        <div className="flex flex-col lg:hidden">
          <span className="text-medium-blue font-bold text-base">Save Up</span>
          <span className="text-dark-gray/80 text-xs leading-tight">
            Controle Financeiro
          </span>
        </div>

        {/* Search — só no desktop */}
        <div
          className={`hidden lg:flex items-center gap-2 bg-dark-gray/10
          rounded-2xl px-4 py-2 w-80`}
        >
          <SearchIcon className="text-dark-gray/50" fontSize="small" />
          <input
            type="text"
            placeholder="Pesquisar transações..."
            className={`bg-transparent outline-none text-dark-gray/80 text-sm w-full
              placeholder:text-dark-gray/50 font-poppins`}
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSearchToggle}
            className={`lg:hidden text-dark-gray/80 hover:text-medium-blue transition-colors
              duration-200 p-1 rounded-xl hover:bg-medium-blue/10`}
          >
            <SearchIcon />
          </button>

          <button
            className={`text-dark-gray/80 hover:text-medium-blue transition-colors
              duration-200 p-1 rounded-xl hover:bg-medium-blue/10`}
          >
            <NotificationsIcon />
          </button>

          <button
            className={`text-dark-gray/80 hover:text-medium-blue transition-colors
              duration-200 p-1 rounded-xl hover:bg-medium-blue/10`}
          >
            <AccountCircleIcon sx={{ fontSize: 34 }} />
          </button>

          <button
            onClick={onMenuToggle}
            className={`lg:hidden text-dark-gray/80 hover:text-medium-blue transition-colors
              duration-200 p-1 rounded-xl hover:bg-medium-blue/10 ml-1`}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Search expandido — só no mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out px-4
          ${searchOpen ? "max-h-16 opacity-100 pb-3" : "max-h-0 opacity-0"}`}
      >
        <div className="flex items-center gap-2 bg-dark-gray/10 rounded-2xl px-4 py-2 w-full">
          <SearchIcon className="text-dark-gray/50" fontSize="small" />
          <input
            type="text"
            placeholder="Pesquisar transações..."
            autoFocus={searchOpen}
            className="bg-transparent outline-none text-dark-gray/80 text-sm w-full placeholder:text-dark-gray/50 font-poppins"
          />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
