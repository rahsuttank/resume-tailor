import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  fullWidth = false,
  loading = false,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-base shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {loading ? (
        <span className="animate-spin mr-2 w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
