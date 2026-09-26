import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import GuestRoute from "./components/auth/GuestRoute";

import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Transactions from "./pages/transactions/Transactions";
import Budgets from "./pages/budgets/Budgets";
import Goals from "./pages/goals/Goals";
import Analytics from "./pages/analytics/Analytics";
import Settings from "./pages/settings/Settings";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* bloqueadas para quem já está logado */}
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* exige login para todas as seguintes páginas */}
        <Route element={<ProtectedRoute />}>
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
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
