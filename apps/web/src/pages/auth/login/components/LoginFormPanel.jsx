import { useState } from "react";
import { Link } from "react-router-dom";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";

import Button from "../../../../components/ui/Button";

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

const LoginFormPanel = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleLogin = () => {
    // TODO: integrar com a API de login
    console.log("Entrando:", form);
  };

  return (
    <div className="w-full md:w-1/2 bg-white p-8 sm:p-10">
      <h2 className="text-dark-gray font-bold text-2xl mb-6">
        Bem-vindo de volta
      </h2>

      <div className="space-y-4">
        <div>
          <label className="text-xs uppercase text-dark-gray/60 block mb-1">
            Email
          </label>
          <div className="relative">
            <EmailOutlinedIcon
              style={{ fontSize: 18 }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
            />
            <input
              type="email"
              placeholder="email@exemplo.com"
              value={form.email}
              onChange={handleChange("email")}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-gray/5 text-sm
                outline-none focus:ring-2 focus:ring-dark-blue/30"
            />
          </div>
        </div>

        <div>
          <label className="text-xs uppercase text-dark-gray/60 block mb-1">
            Senha
          </label>
          <div className="relative">
            <LockOutlinedIcon
              style={{ fontSize: 18 }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange("password")}
              className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-dark-gray/5 text-sm
                outline-none focus:ring-2 focus:ring-dark-blue/30"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
            >
              {showPassword ? (
                <VisibilityOffIcon style={{ fontSize: 18 }} />
              ) : (
                <VisibilityIcon style={{ fontSize: 18 }} />
              )}
            </button>
          </div>
        </div>

        <Link
          to="/forgot-password"
          className="block text-xs text-dark-blue font-medium"
        >
          Esqueci a Senha
        </Link>

        <div className="flex justify-center pt-2">
          <Button
            variant="primary"
            title="Entrar"
            onClick={handleLogin}
            disabled={!isValidEmail(form.email) || form.password.length < 5}
            className="rounded-full px-16"
          />
        </div>

        <p className="text-center text-xs text-dark-gray/60">
          Não possui uma conta?{" "}
          <Link to="/register" className="text-dark-blue font-medium">
            Criar Conta
          </Link>
        </p>

        <div className="h-px bg-dark-gray/10 my-4" />

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-dark-gray/10
            rounded-full py-2.5 text-sm font-medium text-dark-gray hover:-translate-y-0.5 transition"
        >
          <GoogleIcon style={{ fontSize: 18 }} />
          Continuar com Google
        </button>
      </div>
    </div>
  );
};

export default LoginFormPanel;
