const MonthLabels = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const now = new Date();
const CurrentMonthLabel = MonthLabels[now.getMonth()];
const CurrentYear = now.getFullYear();

const GoalsPreview = [
  {
    label: "Reserva de emergência",
    current: 5300,
    target: 5000,
    color: "bg-medium-green",
  },
  {
    label: "Viagem Europa",
    current: 4100,
    target: 8000,
    color: "bg-medium-cyan",
  },
  {
    label: "Notebook novo",
    current: 2800,
    target: 3500,
    color: "bg-medium-orange",
  },
];

const GoalsPreviewCard = () => {
  return (
    <div className="bg-white/10 rounded-2xl mt-6 p-4 backdrop-blur-sm">
      <p className="text-xs text-white/60 mb-3">
        Suas metas — {CurrentMonthLabel} {CurrentYear}
      </p>
      <div className="space-y-3">
        {GoalsPreview.map((goal) => (
          <div key={goal.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white/80">{goal.label}</span>
              <span className="text-white/60">
                R$ {goal.current.toLocaleString("pt-BR")} / R${" "}
                {goal.target.toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className={`h-full ${goal.color} rounded-full`}
                style={{
                  width: `${Math.min((goal.current / goal.target) * 100, 100)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 pt-3 border-t border-white/10 text-xs">
        <div>
          <p className="text-white/50">Total economizado</p>
          <p className="font-semibold">
            R${" "}
            {GoalsPreview.reduce((sum, g) => sum + g.current, 0).toLocaleString(
              "pt-BR",
            )}
          </p>
        </div>
        <div>
          <p className="text-white/50">Metas ativas</p>
          <p className="font-semibold">{GoalsPreview.length} metas</p>
        </div>
      </div>
    </div>
  );
};

export default GoalsPreviewCard;
