import React, { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      enablePageScroll();
    } else {
      setMenuOpen(true);
      disablePageScroll();
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    enablePageScroll();
  };

  return (
    <div className="flex h-screen bg-light-background">
      <Sidebar isOpen={menuOpen} onClose={closeMenu} />

      <div className="flex flex-col flex-1 lg:ml-0 min-w-0">
        <Topbar
          onMenuToggle={toggleMenu}
          menuOpen={menuOpen}
          onSearchToggle={setSearchOpen}
        />
        {/* mt sobe quando o search expande no mobile */}
        <main
          className={`p-6 overflow-y-auto flex-1 transition-all duration-300
            ${searchOpen ? "mt-28 lg:mt-16" : "mt-16"}`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
