'use client';

import { cn } from '@/lib/utils';

interface FormCheckboxProps {
  id?: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

/**
 * Reusable FormCheckbox component
 * Extends UI checkbox with toggle switch design
 */
export function FormCheckbox({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  required = false,
  className,
}: FormCheckboxProps) {
  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div className={cn('flex items-center justify-between', className)}>
      {/* Label */}
      <span className="text-sm text-gray-700 dark:text-gray-300 ml-4 list-item list-disc">
        {label}
      </span>

      {/* Toggle Switch */}
      <div className="flex items-center gap-3">
        <label
          className={cn(
            'relative inline-flex items-center',
            disabled ? 'cursor-not-allowed opacity-80' : 'cursor-pointer',
          )}
        >
          <input
            id={id}
            type="checkbox"
            className="sr-only peer"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
          />
          <div
            className={cn(
              'w-11 h-6 rounded-full peer transition-colors duration-200',
              "after:content-[''] after:absolute after:top-[2px] after:left-[2px]",
              'after:bg-white after:border-gray-300 after:border after:rounded-full',
              'after:h-5 after:w-5 after:transition-all',
              'peer-checked:after:translate-x-full peer-checked:after:border-white',
              'peer-focus:outline-none',
              disabled
                ? 'bg-[#555555]'
                : checked
                  ? 'bg-[#4FB99F] peer-checked:bg-[#4FB99F]'
                  : 'bg-gray-300 dark:bg-gray-600',
            )}
          ></div>
          <span
            className={cn(
              'ml-2 text-xs font-medium',
              disabled
                ? 'text-gray-900 dark:text-gray-300'
                : checked
                  ? 'text-[#4FB99F]'
                  : 'text-gray-500 dark:text-gray-400',
            )}
          >
            {checked ? 'オン' : 'オフ'}
          </span>
        </label>

        {/* Required badge */}
        {required && <span className="text-xs text-red-400">（変更不可）</span>}
      </div>
    </div>
  );
}
