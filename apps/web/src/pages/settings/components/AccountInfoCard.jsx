import { useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import BaseCard from "../../../components/ui/BaseCard";
import Button from "../../../components/ui/Button";

const AccountInfoCard = ({ user, onSave, onCancel, onLogout }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <BaseCard>
      <h2 className="text-dark-gray font-bold text-lg mb-4">
        Informações da Conta
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 items-center mb-5">
        <div className="relative shrink-0">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover"
          />

          <button
            className="absolute bottom-0 right-0 w-7 h-7 bg-dark-blue rounded-full
        flex items-center justify-center border-2 border-white"
          >
            <PhotoCameraIcon style={{ color: "white", fontSize: 14 }} />
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 flex-1 w-full">
          <div>
            <label className="text-xs text-dark-gray/60 block mb-1">
              Nome Completo
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-dark-gray/5 text-sm
          outline-none focus:ring-2 focus:ring-dark-blue/30"
            />
          </div>

          <div>
            <label className="text-xs text-dark-gray/60 block mb-1">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-dark-gray/5 text-sm
          outline-none focus:ring-2 focus:ring-dark-blue/30"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-6 justify-center sm:justify-start">
        <Button
          variant="primary"
          title="Salvar"
          onClick={() => onSave({ name, email })}
        />
        <Button variant="secondary" title="Cancelar" onClick={onCancel} />
      </div>

      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3
      border-t border-dark-gray/10 pt-4"
      >
        <div>
          <p className="text-medium-red font-semibold text-sm">
            Gerenciamento da Sessão
          </p>
          <p className="text-dark-gray/60 text-xs">
            Encerre a sessão atual e saia da sua conta
          </p>
        </div>
        <Button variant="tertiary" title="Fazer Logout" onClick={onLogout} />
      </div>
    </BaseCard>
  );
};

export default AccountInfoCard;
