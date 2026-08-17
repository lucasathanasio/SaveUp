import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-gray/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-dark-gray">{title}</h2>

          <button onClick={onClose} className="cursor-pointer">
            <CloseIcon className="text-dark-blue" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
