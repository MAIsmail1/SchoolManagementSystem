// src/components/common/Input.jsx
import React, { forwardRef } from 'react';

export const Input = forwardRef(({ 
  className, 
  type, 
  name, 
  value, 
  onChange, 
  error,
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`flex h-10 w-full rounded-md border 
          ${error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-input focus:ring-purple-500'
          } 
          bg-background px-3 py-2 text-sm 
          ring-offset-background 
          focus:outline-none focus:ring-2 focus:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50 
          ${className}`}
        autoComplete={type === 'password' ? 'current-password' : 'off'}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';