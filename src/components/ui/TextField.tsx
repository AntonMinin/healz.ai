import type { InputHTMLAttributes } from 'react';

import { useHydrated } from '@/hooks/useHydrated';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const fieldClass = 'h-9 w-full border border-line-strong bg-white px-2.5 text-[13px] text-ink';

export function TextField({ label, placeholder, ...rest }: Props) {
  const hydrated = useHydrated();

  return (
    <label className="flex flex-col gap-1 text-xs text-muted">
      {label}
      {hydrated ? (
        <input placeholder={placeholder} className={fieldClass} {...rest} />
      ) : (
        <span className={`${fieldClass} flex items-center text-subtle`} aria-hidden="true">
          {placeholder}
        </span>
      )}
    </label>
  );
}
