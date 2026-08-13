import { useNavigate } from "react-router-dom";

import BaseCard from "../../../components/ui/BaseCard";

const SavingsGoalsCard = ({ goals }) => {
  const navigate = useNavigate();

  return (
    <BaseCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-dark-gray font-bold text-base">Economias Atuais</h3>
        <button
          onClick={() => navigate("/goals")}
          className="text-medium-blue hover:cursor-pointer"
        >
          Ver Todas
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {goals.map((g) => (
          <div key={g.name} className="flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: g.iconBg }}
            >
              <g.icon style={{ color: g.iconColor, fontSize: 16 }} />
            </span>

            <div className="flex-1">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-dark-gray font-medium">{g.name}</span>
                <span className="text-dark-gray/60">{g.percentage}%</span>
              </div>
              <div className="w-full h-1.5 bg-dark-gray/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${g.percentage}%`,
                    backgroundColor: g.iconColor,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default SavingsGoalsCard;
