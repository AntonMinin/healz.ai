import { useState } from 'react';

import type { Faq } from '@/data/content';

import { Disclosure } from '../ui/Disclosure';

interface Props {
  faqs: Faq[];
  initialCount?: number;
}

export default function FaqAccordion({ faqs, initialCount = 5 }: Props) {
  const [open, setOpen] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <ul id="faq-list" className="mt-8">
        {faqs.map((faq, i) => {
          const isOpen = i === open;
          return (
            <li
              key={faq.question}
              className="border-b border-dashed border-line"
              hidden={!expanded && i >= initialCount}
            >
              <Disclosure
                id={`faq-${i + 1}`}
                title={faq.question}
                open={isOpen}
                onToggle={() => setOpen(isOpen ? -1 : i)}
                buttonClassName="justify-between gap-4 py-5 leading-[1.35]"
                animated
              >
                <p className="max-w-[820px] pr-12 pb-6 leading-[1.55] text-body">{faq.answer}</p>
              </Disclosure>
            </li>
          );
        })}
      </ul>
      {faqs.length > initialCount && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="faq-list"
          onClick={() => setExpanded((v) => !v)}
          className="mt-5 cursor-pointer text-[15px] text-ink underline underline-offset-[3px]"
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </>
  );
}
