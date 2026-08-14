const Toggle = ({ checked, onChange }) => (
  <button
    onClick={() => onChange(!checked)}
    className={`w-11 h-6 rounded-full transition-colors relative shrink-0
      ${checked ? "bg-dark-blue" : "bg-dark-gray/20"}`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform
        ${checked ? "translate-x-5" : ""}`}
    />
  </button>
);

export default Toggle;
