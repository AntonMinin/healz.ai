import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: ReactNode;
}

export function RoundIconButton({ label, children, className = '', ...rest }: Props) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`grid size-8 cursor-pointer place-items-center rounded-full text-ink transition-colors hover:bg-ink hover:text-white ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
