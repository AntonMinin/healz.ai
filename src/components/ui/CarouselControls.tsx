import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';

import { RoundIconButton } from './RoundIconButton';
import { ScrollProgress } from './ScrollProgress';

export type ControlsTone = 'canvas' | 'sand';

interface Props {
  progress: number;
  onPrev: () => void;
  onNext: () => void;
  tone?: ControlsTone;
}

const tones: Record<ControlsTone, string> = {
  canvas: 'bg-control',
  sand: 'bg-control-dark',
};

export function CarouselControls({ progress, onPrev, onNext, tone = 'canvas' }: Props) {
  const bg = tones[tone];
  return (
    <div className="ms-auto flex items-center gap-2">
      <ScrollProgress value={progress} className={bg} />
      <RoundIconButton label="Previous" onClick={onPrev} className={bg}>
        <LuArrowLeft className="size-4" strokeWidth={1.8} aria-hidden="true" />
      </RoundIconButton>
      <RoundIconButton label="Next" onClick={onNext} className={bg}>
        <LuArrowRight className="size-4" strokeWidth={1.8} aria-hidden="true" />
      </RoundIconButton>
    </div>
  );
}
