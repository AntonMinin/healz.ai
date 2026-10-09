import type { ReactNode } from 'react';
import { LuChevronDown } from 'react-icons/lu';

interface Props {
  id: string;
  title: ReactNode;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
  buttonClassName?: string;
  animated?: boolean;
}

export function Disclosure({
  id,
  title,
  open,
  onToggle,
  children,
  buttonClassName = '',
  animated = false,
}: Props) {
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className={`flex w-full cursor-pointer items-center gap-3 text-left text-lg leading-[1.3] tracking-[-0.01em] text-ink ${buttonClassName}`}
        >
          <span className="flex-1">{title}</span>
          <LuChevronDown
            className={`size-5 flex-none transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </button>
      </h3>
      {animated ? (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          inert={!open}
          className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0 overflow-hidden">{children}</div>
        </div>
      ) : (
        <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
          {children}
        </div>
      )}
    </>
  );
}
