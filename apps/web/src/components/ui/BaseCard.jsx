import React from "react";

const BaseCard = ({
  title,
  value,
  icon: Icon,
  children,
  className = "",
  style,
}) => {
  const baseCardClass = `w-full bg-white rounded-2xl p-5 font-poppins`;
  const defaultClass = !children ? "h-30" : "";

  return (
    <div
      className={`${baseCardClass} ${className} hover:-translate-y-0.5 transition`}
      style={style}
    >
      {children ? (
        children
      ) : (
        <>
          <div className="flex justify-between">
            <span className="text-dark-gray/80 text-lg">{title}</span>

            {Icon && (
              <Icon
                className={`text-dark-gray/80 bg-dark-gray/20 rounded p-1`}
              />
            )}
          </div>

          <span className="text-dark-gray font-bold text-2xl">{value}</span>
        </>
      )}
    </div>
  );
};

export default BaseCard;
