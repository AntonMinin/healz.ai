interface Props {
  value: number;
  className?: string;
}

const TRACK = 28;

export function ScrollProgress({ value, className = '' }: Props) {
  return (
    <span
      className={`flex h-8 w-[72px] items-center rounded-full px-3 ${className}`}
      aria-hidden="true"
    >
      <span className="relative block h-[3px] w-12 bg-black/10">
        <span
          className="absolute top-0 left-0 h-[3px] w-5 bg-ink transition-transform duration-150"
          style={{ transform: `translateX(${Math.round(value * TRACK)}px)` }}
        />
      </span>
    </span>
  );
}
