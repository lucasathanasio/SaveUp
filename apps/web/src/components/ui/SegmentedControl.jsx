const SegmentedControl = ({ options, active, onChange }) => (
  <div className="flex bg-dark-gray/5 rounded-full p-1 cursor-pointer">
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => onChange(opt)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition cursor-pointer
          ${
            active === opt
              ? "bg-white text-dark-blue shadow-sm"
              : "text-dark-gray/60"
          }`}
      >
        {opt}
      </button>
    ))}
  </div>
);

export default SegmentedControl;
