import React from "react";

import Button from "../../components/ui/Button";
import SmartTipCard from "../../components/ui/SmartTipCard";
import FeaturedGoalCard from "./components/FeaturedGoalCard";
import StatusLegend from "../../components/ui/StatusLegend";
import ItemCard from "../../components/ui/ItemCard";
import AddItemCard from "../../components/ui/AddItemCard";

import AddIcon from "@mui/icons-material/Add";
import SecurityIcon from "@mui/icons-material/Security";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FlightIcon from "@mui/icons-material/Flight";
import WatchIcon from "@mui/icons-material/Watch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const featuredGoal = {
  name: "Reserva de Emergência",
  icon: SecurityIcon,
  deadline: "Dez 2026",
  current: 18450,
  target: 20000,
  status: "quase_la",
  message:
    "Você está a apenas R$1.550,00 da sua segurança financeira. Continue nesse ritmo!",
};

const velocity = {
  growthPercentage: 14,
  monthsEarlier: 2,
  totalGrowth: 2450,
};

const deadlineStatusConfig = {
  no_prazo: {
    label: "No Prazo",
    color: "var(--color-dark-green)",
    barColor: "bg-dark-green",
  },
  perto_vencimento: {
    label: "Perto do Vencimento",
    color: "var(--color-yellow)",
    barColor: "bg-yellow",
  },
  atrasado: {
    label: "Atrasado",
    color: "var(--color-dark-red)",
    barColor: "bg-dark-red",
  },
};

const goals = [
  {
    id: 1,
    name: "Carro Novo",
    icon: DirectionsCarIcon,
    iconBg: "var(--color-extra-light-blue)",
    iconColor: "var(--color-medium-blue)",
    current: 12000,
    target: 30000,
    deadline: "Jul 2026",
    status: "atrasado",
  },
  {
    id: 2,
    name: "Relógio Novo",
    icon: WatchIcon,
    iconBg: "var(--color-extra-light-purple)",
    iconColor: "var(--color-medium-purple)",
    current: 1200,
    target: 15000,
    deadline: "Ago 2026",
    status: "perto_vencimento",
  },
  {
    id: 3,
    name: "Férias",
    icon: FlightIcon,
    iconBg: "var(--color-extra-light-pink)",
    iconColor: "var(--color-medium-pink)",
    current: 3800,
    target: 5000,
    deadline: "Dez 2026",
    status: "no_prazo",
  },
];

const Goals = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 md:h-16 gap-4">
        <div>
          <span className="text-lg md:text-xl text-dark-gray font-bold">
            Metas Financeiras
          </span>
          <br />
          <span className="text-md md:text-lg text-dark-gray/80">
            Defina suas metas financeiras
          </span>
        </div>

        <div>
          <Button
            variant="primary"
            icon={AddIcon}
            title="Nova"
            description="Meta"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-5 px-6">
        <div className="md:col-span-2">
          <FeaturedGoalCard {...featuredGoal} />
        </div>
        <SmartTipCard title="Velocidade mensal" icon={AutoAwesomeIcon}>
          <p className="text-sm leading-relaxed text-white/90">
            Sua taxa média de economia aumentou {velocity.growthPercentage}%
            neste trimestre. Nesse ritmo, você alcançará seu próximo marco{" "}
            {velocity.monthsEarlier} meses antes do previsto.
          </p>
          <div className="border-t border-white/20 mt-4 pt-4">
            <p className="text-white/60 text-xs">
              Crescimento total da economia
            </p>
            <p className="text-light-green font-bold text-lg">
              + R${velocity.totalGrowth.toLocaleString("pt-BR")}
            </p>
          </div>
        </SmartTipCard>
      </div>

      <div className="px-6 mt-8">
        <div className="block md:flex items-center justify-between mb-4">
          <h2 className="text-dark-gray font-bold text-lg">Suas Metas</h2>
          <StatusLegend
            items={[
              { label: "No Prazo", color: "var(--color-dark-green)" },
              { label: "Perto do Vencimento", color: "var(--color-yellow)" },
              { label: "Atrasado", color: "var(--color-dark-red)" },
            ]}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {goals.map((g) => {
            const percentage = Math.min((g.current / g.target) * 100, 100);
            const deadlineConfig = deadlineStatusConfig[g.status];

            return (
              <ItemCard
                key={g.id}
                name={g.name}
                icon={g.icon}
                iconBg={g.iconBg}
                iconColor={g.iconColor}
                current={g.current}
                total={g.target}
                topRight={`${percentage.toFixed(0)}%`}
                barColor={deadlineConfig.barColor}
                footerLeft={`Meta: R$ ${g.target.toFixed(2).replace(".", ",")}`}
                footerRight={g.deadline}
                footerRightColor={deadlineConfig.color}
              />
            );
          })}
          <AddItemCard label="Adicionar Meta" onClick={() => {}} />
        </div>
      </div>
    </>
  );
};

export default Goals;
