import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  rounded="rounded-lg",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 cursor-pointer ${rounded} ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
