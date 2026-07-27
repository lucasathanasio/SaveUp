import React from "react";

import BaseCard from "../ui/BaseCard";

const ChartCard = ({ title, description, children, className = "" }) => {
  return (
    <BaseCard className={className}>
      <span className="text-dark-gray font-bold text-xl">{title}</span>
      <br />
      <span className="text-dark-gray/80 text-lg">{description}</span>

      {children}
    </BaseCard>
  );
};

export default ChartCard;
