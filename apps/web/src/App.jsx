import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Dashboard from "../src/pages/dashboard/Dashboard";
//import Register from "../src/pages/auth/Register";
//import Login from "../src/pages/auth/Login";

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
      </Route>
    </Routes>
  );
}

export default App;
