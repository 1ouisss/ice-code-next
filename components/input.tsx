// components/ui/input.tsx
import React from "react";

interface InputProps {
  id: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({ id, type = "text", value, onChange, placeholder, required }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
    />
  );
};
