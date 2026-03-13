import React from "react";
import clsx from "clsx";

const Button = ({ children, variant = "primary", className, ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center border border-transparent shadow-sm font-medium leading-5 rounded-md text-sm px-4 py-2 m-1  focus:outline-none focus:ring-4";
  const variants = {
    primary: "text-white bg-brand hover:bg-brand-strong focus:ring-brand-medium",
    secondary: "text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-300",
    danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-300",
  };
  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
