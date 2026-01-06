import React from 'react';

interface InputGroupProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({ label, children, className = '' }) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );
};
