import { useState } from 'react';

import type { Step } from '@/data/content';

import { Disclosure } from '../ui/Disclosure';

interface Props {
  steps: Step[];
}

export default function StepsAccordion({ steps }: Props) {
  const [open, setOpen] = useState(0);

  return (
    <ol className="mt-[18px] ml-[9px] border-l border-line-strong pl-7">
      {steps.map((step, i) => {
        const isOpen = i === open;
        return (
          <li key={step.title} className="relative">
            <span
              className={`absolute top-[23px] -left-[33px] size-[9px] rounded-full transition-colors ${
                isOpen ? 'bg-maroon' : 'bg-transparent'
              }`}
              aria-hidden="true"
            />
            <Disclosure
              id={`step-${i + 1}`}
              title={`${i + 1}. ${step.title}`}
              open={isOpen}
              onToggle={() => setOpen(isOpen ? -1 : i)}
              buttonClassName="py-4"
              animated
            >
              <div className="pb-5">
                {step.highlight && (
                  <span className="mb-2.5 inline-block bg-lime px-2 py-[3px] text-[13px]">
                    {step.highlight}
                  </span>
                )}
                <p className="leading-normal text-body">{step.description}</p>
              </div>
            </Disclosure>
          </li>
        );
      })}
    </ol>
  );
}
