import { useNavigate } from "react-router-dom";
import BaseCard from "../../../components/ui/BaseCard";
import TypeBadge from "../../../components/ui/TypeBadge";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PixIcon from "@mui/icons-material/Pix";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const data = [
  {
    id: 1,
    name: "Supermercados Atacadão",
    category: "Compras",
    date: "24/04/2026",
    value: 125.81,
    type: "despesa",
    icon: ShoppingCartIcon,
    iconBg: "var(--color-extra-light-blue)",
    iconColor: "var(--color-light-blue)",
  },
  {
    id: 2,
    name: "PIX Recebido",
    category: "PIX",
    date: "24/04/2026",
    value: 150.0,
    type: "receita",
    icon: PixIcon,
    iconBg: "var(--color-extra-light-green)",
    iconColor: "var(--color-medium-green)",
  },
  {
    id: 3,
    name: "Pizzaria Brasil",
    category: "Alimentação",
    date: "23/04/2026",
    value: 252.5,
    type: "despesa",
    icon: RestaurantIcon,
    iconBg: "var(--color-extra-light-red)",
    iconColor: "var(--color-medium-red)",
  },
];

const RecentTransactionsCard = ({
  title,
  transactions = data,
  className = "",
}) => {
  const navigate = useNavigate();

  return (
    <BaseCard className={className}>
      <div className="flex justify-between items-center mb-4">
        <span className="text-dark-gray font-bold text-xl">{title}</span>
        <button
          onClick={() => navigate("/transactions")}
          className="text-medium-blue hover:cursor-pointer"
        >
          Ver Todas
        </button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-dark-gray/60 uppercase">
            <th className="text-xs md:text-sm pb-3 font-medium">Transação</th>
            <th className="text-xs md:text-sm hidden md:table-cell pb-3 font-medium">
              Categoria
            </th>
            <th className="text-xs md:text-sm hidden md:table-cell pb-3 font-medium">
              Data
            </th>
            <th className="text-xs md:text-sm pb-3 font-medium">Valor</th>
            <th className="text-xs md:text-sm pb-3 font-medium">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-t border-dark-gray/10">
              <td className="py-3 flex items-center gap-3">
                <span
                  className="hidden sm:flex w-8 h-8 rounded-full items-center justify-center"
                  style={{ backgroundColor: t.iconBg }}
                >
                  <t.icon className="w-4 h-4" style={{ color: t.iconColor }} />
                </span>
                <span className="text-xs md:text-sm text-dark-gray font-medium">
                  {t.name}
                </span>
              </td>
              <td className="hidden md:table-cell text-dark-gray/70 text-sm">
                {t.category}
              </td>
              <td className="hidden md:table-cell text-dark-gray/70 text-sm">
                {t.date}
              </td>
              <td
                className={`text-xs md:text-sm font-semibold ${
                  t.type === "receita" ? "text-medium-green" : "text-medium-red"
                }`}
              >
                {/* Mobile: sem sinal */}
                <span className="sm:hidden">
                  R${t.value.toFixed(2).replace(".", ",")}
                </span>

                {/* Tablet/desktop: com sinal */}
                <span className="hidden sm:inline">
                  {t.type === "receita" ? "+ " : "- "}R$
                  {t.value.toFixed(2).replace(".", ",")}
                </span>
              </td>
              <td>
                <TypeBadge type={t.type} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </BaseCard>
  );
};

export default RecentTransactionsCard;
