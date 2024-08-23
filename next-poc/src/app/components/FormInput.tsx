import React from "react";

interface FormInputProps {
  id?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  className?: string;
  labelElement?: any;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  type = "text",
  className,
  labelElement,
  disabled = false,
}) => {
  return (
    <div className="relative mb-4">
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder + (required ? "*" : "")}
        className={`p-2 border border-gray-300 rounded w-full ${className} ${
          error ? "border-red-500" : ""
        }`}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
      {labelElement}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormInput;
