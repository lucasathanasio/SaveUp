const StatusLegend = ({ items }) => (
  <div className="flex items-center gap-4 text-xs text-dark-gray/60">
    {items.map((item) => (
      <span key={item.label} className="flex items-center gap-1">
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: item.color }}
        />
        {item.label}
      </span>
    ))}
  </div>
);

export default StatusLegend;
