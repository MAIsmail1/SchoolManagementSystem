// src/components/common/Button.jsx
import React from 'react';

export const Button = ({ 
  className, 
  variant = 'default', 
  children, 
  ...props 
}) => {
  const variants = {
    default: 'bg-green-700 text-white hover:bg-green-800',
    outline: 'border border-green-700 text-green-700 hover:bg-green-50'
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center 
        rounded-md text-sm font-medium 
        px-4 py-2 
        transition-colors 
        focus:outline-none focus:ring-2 focus:ring-green-500 
        disabled:opacity-50 disabled:pointer-events-none 
        ${variants[variant]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};