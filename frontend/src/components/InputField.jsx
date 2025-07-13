import React from "react";

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
  helper = "",
  className = "",
  fullWidth = true,
  ...props
}) => {
  return (
    <div className={`mb-5 ${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-1 font-semibold text-gray-800">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-base ${error ? 'border-red-500' : 'border-gray-300'}`}
        {...props}
      />
      {helper && !error && <p className="text-xs text-gray-500 mt-1">{helper}</p>}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
