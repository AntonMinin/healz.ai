import { useState } from 'react';

import type { Stage } from '@/data/content';

import { ChipToggle } from '../ui/ChipToggle';

interface Props {
  stages: Stage[];
}

export default function StageSelector({ stages }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-white p-[clamp(22px,2.6vw,32px)] shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
      <p id="stage-label" className="text-lg leading-[1.35]">
        Where are you right now?
      </p>
      <div role="group" aria-labelledby="stage-label" className="mt-4 flex flex-wrap gap-2">
        {stages.map((stage, i) => (
          <ChipToggle
            key={stage.label}
            active={i === active}
            aria-controls={`stage-panel-${i}`}
            onClick={() => setActive(i)}
          >
            {stage.label}
          </ChipToggle>
        ))}
      </div>
      <p className="mt-[26px] text-sm font-semibold">Healz will help you:</p>
      {stages.map((stage, i) => (
        <ol
          key={stage.label}
          id={`stage-panel-${i}`}
          aria-label={`${stage.label}: how Healz helps`}
          hidden={i !== active}
          className="mt-1.5"
        >
          {stage.items.map((item, n) => (
            <li
              key={item.title}
              className="grid grid-cols-[32px_1fr] border-t border-dashed border-line py-3 text-[15px] leading-[1.45]"
            >
              <span className="pt-px text-[13px] font-semibold text-maroon" aria-hidden="true">
                {String(n + 1).padStart(2, '0')}
              </span>
              <span>
                <strong className="font-semibold">{item.title}</strong>
                <br />
                <span className="text-muted">{item.description}</span>
              </span>
            </li>
          ))}
        </ol>
      ))}
    </div>
  );
}
