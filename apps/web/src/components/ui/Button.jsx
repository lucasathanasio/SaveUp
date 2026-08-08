import React from "react";

const variantClasses = {
  primary: "bg-dark-blue text-white",
  secondary: "bg-light-background text-dark-blue border border-dark-blue",
};

const Button = ({
  title,
  description,
  icon: Icon,
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`flex items-center rounded-full px-3 py-2 text-sm
         transition ${variantClasses[variant]} ${className} ${
           disabled
             ? "opacity-40 cursor-not-allowed hover:translate-y-0"
             : "cursor-pointer hover:-translate-y-0.5"
         }`}
      onClick={onClick}
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
