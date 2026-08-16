import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";

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

const getLastSixMonths = () => {
  const now = new Date();
  const currentMonthIndex = now.getMonth(); // 0 = Jan, 11 = Dez

  return Array.from({ length: 6 }, (_, i) => {
    const offset = 5 - i; // 5,4,3,2,1,0 -> mais antigo pro mais recente
    const monthIndex = (currentMonthIndex - offset + 12) % 12;

    return {
      label: MonthLabels[monthIndex],
      active: offset === 0,
    };
  });
};

const ChartMonths = getLastSixMonths();

const now = new Date();
const CurrentMonthLabels = MonthLabels[now.getMonth()];
const CurrentYear = now.getFullYear();

const Transactions = [
  {
    name: "Mercado",
    category: "Alimentação",
    amount: -230,
    icon: ShoppingCartOutlinedIcon,
  },
  {
    name: "Salário",
    category: "Receita",
    amount: 5200,
    icon: PaidOutlinedIcon,
  },
  {
    name: "Celular",
    category: "Assinatura",
    amount: -79,
    icon: PhoneIphoneOutlinedIcon,
  },
];

const formatAmount = (value) => {
  const sign = value > 0 ? "+" : "-";
  return `${sign} R$ ${Math.abs(value).toLocaleString("pt-BR")}`;
};

const DashboardPreviewCard = () => {
  return (
    <div className="bg-white/10 rounded-2xl mt-6 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-white/60">Dashboard</span>
        <span className="text-[10px] bg-white/10 rounded-full px-2 py-0.5 text-white/70">
          {CurrentMonthLabels} {CurrentYear}
        </span>
      </div>

      <p className="text-xs text-white/60">Saldo total</p>
      <p className="text-2xl font-bold mt-1">R$ 12.840</p>
      <p className="text-light-green text-xs mt-1">
        ↑ +8,4% em relação ao mês passado
      </p>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="bg-white/10 rounded-xl p-3">
          <p className="text-[11px] text-white/60">Receitas</p>
          <p className="text-medium-green text-sm font-semibold mt-1">
            R$ 5.200
          </p>
        </div>
        <div className="bg-white/10 rounded-xl p-3">
          <p className="text-[11px] text-white/60">Despesas</p>
          <p className="text-medium-red text-sm font-semibold mt-1">R$ 2.360</p>
        </div>
      </div>

      <p className="text-[11px] text-white/60 mt-4 mb-2">Gastos por mês</p>
      <div className="flex items-end gap-2 h-14">
        {ChartMonths.map((month) => (
          <div
            key={month.label}
            className="flex-1 flex flex-col items-center gap-1"
          >
            <div
              className={`w-full rounded-md ${
                month.active ? "bg-medium-green h-10" : "bg-white/10 h-6"
              }`}
            />
            <span className="text-[9px] text-white/40">{month.label}</span>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-white/60 mt-4 mb-2">Últimas transações</p>
      <div className="space-y-2">
        {Transactions.map((tx) => {
          const Icon = tx.icon;
          return (
            <div key={tx.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon style={{ fontSize: 14 }} className="text-white/70" />
                </div>
                <div>
                  <p className="text-xs font-medium">{tx.name}</p>
                  <p className="text-[10px] text-white/50">{tx.category}</p>
                </div>
              </div>
              <span
                className={`text-xs font-semibold ${
                  tx.amount > 0 ? "text-medium-green" : "text-medium-red"
                }`}
              >
                {formatAmount(tx.amount)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardPreviewCard;
