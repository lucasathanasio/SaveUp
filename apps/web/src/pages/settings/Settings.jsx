import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountInfoCard from "./components/AccountInfoCard";
import SecurityCard from "./components/SecurityCard";
import ExportDataCard from "./components/ExportDataCard";
import PreferencesCard from "./components/PreferencesCard";
import DangerZoneCard from "./components/DangerZoneCard";

const User = {
  name: "Marcos Silva",
  email: "marcossilva@gmail.com",
  avatarUrl: "https://i.pravatar.cc/150?img=12",
};

const Settings = () => {
  const navigate = useNavigate();

  const [preferences, setPreferences] = useState({
    darkMode: false,
    currency: "BRL",
    language: "pt-BR",
    notifications: true,
    monthlyEmail: true,
  });

  const handlePreferenceChange = (key, value) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-1 md:h-16 gap-4">
        <div>
          <span className="text-lg md:text-xl text-dark-gray font-bold">
            Configurações
          </span>
          <br />
          <span className="text-md md:text-lg text-dark-gray/80">
            Altere seus dados ou suas preferências
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-5 px-1">
        <div className="md:col-span-2 flex flex-col gap-6">
          <AccountInfoCard
            user={User}
            onSave={(data) => console.log("salvar", data)}
            onCancel={() => {}}
            onLogout={() => navigate("/login")}
          />

          <div className="grid sm:grid-cols-2 gap-6">
            <SecurityCard
              lastPasswordChange="4 meses atrás"
              onChangePassword={() => {}}
            />
            <ExportDataCard onExport={() => {}} />
          </div>
        </div>

        <PreferencesCard
          preferences={preferences}
          onChange={handlePreferenceChange}
        />
      </div>

      <div className="mt-6 px-1">
        <DangerZoneCard onDelete={() => {}} />
      </div>
    </>
  );
};

export default Settings;
