import React from 'react';
import { Button } from '@/components/ui/button';

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
}

export function FormButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  disabled,
  fullWidth = false,
  className,
  asChild = false,
  ...props
}: FormButtonProps) {
  const variantStyles = {
    primary:
      'bg-primary hover:bg-opacity-90 dark:bg-primary dark:hover:bg-opacity-80 text-white',
    secondary:
      'bg-button-secondary hover:bg-[#B3B3B3] dark:bg-[#C9C9C9] dark:hover:bg-[#B3B3B3] text-white',
    danger:
      'bg-button-danger hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white',
  };

  const sizeStyles = {
    sm: 'h-9 px-4 rounded-full text-sm',
    md: 'h-10 px-6 rounded-full text-sm',
    lg: 'h-11 px-8 rounded-full text-base',
  };

  // Default: 240px (w-60) width and 40px height (h-10)
  const widthClass = fullWidth ? 'w-full' : 'w-60';

  return (
    <Button
      disabled={loading || disabled}
      asChild={asChild}
      className={`${widthClass} ${sizeStyles[size]} ${variantStyles[variant]} flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-medium ${className || ''}`}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </Button>
  );
}
