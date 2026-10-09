import type { APIRoute } from 'astro';

import { site } from '@/config/site';
import { addOns, comparison, faqs, plans, stages } from '@/data/content';
import { doctors } from '@/data/doctors';
import { absoluteUrl, withBase } from '@/lib/url';

const list = (items: string[]) => items.map((item) => `- ${item}`).join('\n');

export const GET: APIRoute = ({ site: siteUrl }) => {
  const page = absoluteUrl(withBase(), siteUrl);
  const body = `# ${site.name}

> ${site.description}

${site.name} is for cancer patients and their caregivers. AI trained on 40M+ cancer studies works together with 170+ board-certified doctors from leading hospitals, all in one chat. Healz.ai is an educational service, not a medical provider: always discuss every decision with your doctor. AI can make mistakes.

## What Healz does

${list([
  'Personal plan by the latest guidelines',
  'Top oncologists join your chat for 7 days, usually within 24 hours',
  'Checks every report (labs, scans, docs) for mistakes and explains it',
  'Contacts hospitals and insurers for you: drafts the email, you tap send',
  'Finds open clinical trials near home that match the biopsy',
  "Saves money on treatments that won't work. Sometimes $100k",
])}

## How Healz helps at each stage

${stages.map((stage) => `### ${stage.label}\n\n${list(stage.items.map((i) => `${i.title}: ${i.description}`))}`).join('\n\n')}

## Healz vs general AI chatbots

${list(comparison.map((c) => `Healz: ${c.healz}. General chatbots: ${c.others}.`))}

## Pricing (USD)

${list([
  `${plans.annual.name}: ${plans.annual.total} per year (${plans.annual.price} ${plans.annual.period}), regular ${plans.annual.oldPrice}`,
  `${plans.monthly.name}: ${plans.monthly.price}${plans.monthly.period}, cancel anytime`,
  ...addOns.map((a) => `${a.title}: ${a.price}. ${a.description}`),
])}

## Doctors

${list(doctors.map((d) => `${d.name}, ${d.role}. ${d.credentials}. ${d.city}, ${d.organization}`))}

## FAQ

${faqs.map((f) => `### ${f.question}\n\n${f.answer}`).join('\n\n')}

## Links

- [Landing page](${page})
- [Start with Healz](${site.links.app})
- [Healz website](${site.homepage})
- [Business Insider story](${site.links.pressStory})
- [Terms of Service](${site.links.terms})
- [Privacy Policy](${site.links.privacy})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
