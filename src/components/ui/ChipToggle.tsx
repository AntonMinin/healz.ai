import type { ButtonHTMLAttributes } from 'react';

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-pressed'> {
  active: boolean;
}

export function ChipToggle({ active, className = '', children, ...rest }: Props) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`h-[38px] rounded-full border px-[15px] text-sm transition-colors ${
        // active ? 'border-ink bg-ink text-white' : 'border-border border-dashed bg-white text-ink hover:bg-canvas cursor-pointer'
        active
          ? 'border-[var(--color-lime)] bg-[var(--color-lime)]'
          : 'cursor-pointer border-dashed border-border bg-white text-ink hover:bg-canvas'
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
