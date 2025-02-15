// src/components/common/Button.jsx
import React from 'react';

export const Button = ({ 
  className, 
  variant = 'default', 
  children, 
  ...props 
}) => {
  const variants = {
    default: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'border border-purple-600 text-purple-600 hover:bg-purple-50'
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center 
        rounded-md text-sm font-medium 
        px-4 py-2 
        transition-colors 
        focus:outline-none focus:ring-2 focus:ring-purple-500 
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