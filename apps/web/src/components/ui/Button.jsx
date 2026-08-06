import React from "react";

const variantClasses = {
  primary: "bg-dark-blue text-white",
  secondary: "bg-white text-dark-blue border border-dark-blue",
};

const Button = ({ title, description, icon: Icon, variant = "primary" }) => {
  return (
    <button
      className={`flex items-center rounded-full px-3 py-2 cursor-pointer text-sm
        hover:-translate-y-0.5 transition ${variantClasses[variant]}`}
    >
      {Icon && (
        <span className="mr-1 flex items-center">
          <Icon className="w-4 h-4" fontSize="small" />
        </span>
      )}
      {title && <span className="mr-1 font-medium">{title}</span>}

      {description && <span>{description}</span>}
    </button>
  );
};

export default Button;
