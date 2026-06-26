import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Topbar = () => {
  return (
    <nav
      className={`fixed top-0 left-64 right-0 h-16 flex items-center
    justify-between px-6 bg-light-background font-poppins`}
    >
      <div className="flex items-center gap-2 bg-dark-gray/10 rounded-2xl px-4 py-2 w-80">
        <SearchIcon className="text-dark-gray/50" fontSize="small" />
        <input
          type="text"
          placeholder="Pesquisar transações..."
          className={`bg-transparent outline-none text-dark-gray/80 text-sm w-full
            placeholder:text-dark-gray/50 font-poppins`}
        />
      </div>

      <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
};

export default Topbar;
