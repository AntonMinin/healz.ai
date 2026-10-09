import type { ReactNode } from 'react';

import { useScrollRail } from '@/hooks/useScrollRail';

import { CarouselControls, type ControlsTone } from '../ui/CarouselControls';

interface Props {
  label: string;
  tone?: ControlsTone;
  children: ReactNode;
  aside?: ReactNode;
}

export default function Carousel({ label, tone = 'canvas', children, aside }: Props) {
  const { ref, progress, onScroll, scrollByPage } = useScrollRail<HTMLDivElement>();

  return (
    <>
      <div
        ref={ref}
        onScroll={onScroll}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        className="no-scrollbar flex snap-x snap-mandatory px-rail gap-8 overflow-x-auto"
      >
        {children}
      </div>
      <div className="mx-auto mt-6 flex max-w-page flex-wrap items-start justify-between gap-5 px-gutter">
        {aside}
        <CarouselControls
          progress={progress}
          tone={tone}
          onPrev={() => scrollByPage(-1)}
          onNext={() => scrollByPage(1)}
        />
      </div>
    </>
  );
}
