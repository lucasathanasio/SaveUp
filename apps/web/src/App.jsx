import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Transactions from "./pages/transactions/Transactions";
import Budgets from "./pages/budgets/Budgets";
import Goals from "./pages/goals/Goals";
import Analytics from "./pages/analytics/Analytics";
import Settings from "./pages/settings/Settings";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";

function App() {
  return (
    <Routes>
      {/* páginas sem Sidebar e Topbar */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* páginas com Sidebar e Topbar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
