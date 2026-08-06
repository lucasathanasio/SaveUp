import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddCategoryCard = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-full min-h-[140px] rounded-2xl border-2 border-dashed
        border-dark-gray/20 flex flex-col items-center justify-center gap-2
        text-dark-gray/50 hover:border-dark-gray/40 hover:text-dark-gray/70 transition"
    >
      <AddCircleIcon fontSize="large" />
      <span className="text-sm font-medium">Adicionar Categoria</span>
    </button>
  );
};

export default AddCategoryCard;
