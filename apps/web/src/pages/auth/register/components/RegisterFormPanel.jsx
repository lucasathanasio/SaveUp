import { useState } from "react";
import { Link } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GoogleIcon from "@mui/icons-material/Google";

import Button from "../../../../components/ui/Button";

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

const getPasswordStrength = (password) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1)
    return { label: "Senha fraca", color: "bg-medium-red", percent: 33 };
  if (score <= 3)
    return { label: "Senha média", color: "bg-medium-orange", percent: 66 };
  return { label: "Senha forte", color: "bg-dark-green", percent: 100 };
};

const RegisterFormPanel = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const strength = getPasswordStrength(form.password);
  const passwordsMatch =
    form.confirmPassword.length === 0 || form.password === form.confirmPassword;

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleRegister = () => {
    if (!passwordsMatch) return;
    // TODO: integrar com a API de registro
    console.log("Registrando:", form);
  };

  return (
    <div className="w-full md:w-1/2 bg-white p-8 sm:p-10">
      <h2 className="text-dark-gray font-bold text-2xl mb-6">Crie sua conta</h2>

      <div className="space-y-4">
        <div>
          <label className="text-xs uppercase text-dark-gray/60 block mb-1">
            Nome
          </label>
          <div className="relative">
            <PersonIcon
              style={{ fontSize: 18 }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
            />
            <input
              type="text"
              placeholder="Nome completo"
              value={form.name}
              onChange={handleChange("name")}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-gray/5 text-sm
                outline-none focus:ring-2 focus:ring-dark-blue/30"
            />
          </div>
        </div>

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

          {form.password.length > 0 && (
            <div className="mt-2">
              <div className="h-1.5 bg-dark-gray/10 rounded-full overflow-hidden">
                <div
                  className={`h-full ${strength.color} rounded-full transition-all`}
                  style={{ width: `${strength.percent}%` }}
                />
              </div>
              <p className="flex items-center gap-1 text-xs text-dark-gray/60 mt-1">
                <CheckCircleIcon
                  style={{ fontSize: 12 }}
                  className="text-dark-green"
                />
                {strength.label}
              </p>
            </div>
          )}
        </div>

        <div>
          <label className="text-xs uppercase text-dark-gray/60 block mb-1">
            Confirme sua senha
          </label>
          <div className="relative">
            <LockOutlinedIcon
              style={{ fontSize: 18 }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
            />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={handleChange("confirmPassword")}
              className={`w-full pl-9 pr-9 py-2.5 rounded-xl bg-dark-gray/5 text-sm
                outline-none focus:ring-2 ${
                  passwordsMatch
                    ? "focus:ring-dark-blue/30"
                    : "ring-2 ring-medium-red/50"
                }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-gray/40"
            >
              {showConfirmPassword ? (
                <VisibilityOffIcon style={{ fontSize: 18 }} />
              ) : (
                <VisibilityIcon style={{ fontSize: 18 }} />
              )}
            </button>
          </div>
          {!passwordsMatch && (
            <p className="text-medium-red text-xs mt-1">
              As senhas não coincidem
            </p>
          )}
        </div>

        <Button
          variant="primary"
          title="Criar Conta"
          onClick={handleRegister}
          disabled={
            !isValidEmail(form.email) ||
            !passwordsMatch ||
            form.password.length < 5
          }
          className="w-full justify-center rounded-full mt-2"
        />

        <p className="text-center text-xs text-dark-gray/60">
          Já possui uma conta?{" "}
          <Link to="/login" className="text-dark-blue font-medium">
            Fazer Login
          </Link>
        </p>

        <div className="flex items-center gap-3 my-4">
          <div className="h-px bg-dark-gray/10 flex-1" />
          <span className="text-xs text-dark-gray/40">ou</span>
          <div className="h-px bg-dark-gray/10 flex-1" />
        </div>

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

export default RegisterFormPanel;
