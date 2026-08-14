const DangerZoneCard = ({ onDelete }) => (
  <div
    className="w-full bg-extra-light-red rounded-2xl p-5 flex flex-col
    sm:flex-row items-start sm:items-center justify-between gap-4 font-poppins"
  >
    <div>
      <p className="text-medium-red font-semibold text-sm">
        Gerenciamento da Conta
      </p>
      <p className="text-dark-gray/60 text-xs">
        Ao excluir sua conta seus dados serão perdidos
      </p>
    </div>
    <button
      onClick={onDelete}
      className="bg-medium-red text-white text-sm font-medium px-5 py-2
        rounded-full hover:-translate-y-0.5 transition shrink-0"
    >
      Excluir Conta
    </button>
  </div>
);

export default DangerZoneCard;
