import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Transactions from "./pages/transactions/Transactions";
//import Register from "./pages/auth/Register";
//import Login from "./pages/auth/Login";

function App() {
  return (
    <Routes>
      {/* páginas sem Sidebar e Topbar 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      */}

      {/* páginas com Sidebar e Topbar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>
    </Routes>
  );
}

export default App;
