export interface StageItem {
  title: string;
  description: string;
}

export interface Stage {
  label: string;
  items: StageItem[];
}

export interface Step {
  title: string;
  description: string;
  highlight?: string;
  appointmentForm?: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Quote {
  tag: string;
  context: string;
  text: string;
  author: string;
  tone: 'lime' | 'maroon' | 'stone' | 'ink';
}

export interface Comparison {
  healz: string;
  others: string;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface AddOn {
  title: string;
  description: string;
  price: string;
}

export const stages: Stage[] = [
  {
    label: 'Just diagnosed',
    items: [
      {
        title: 'Check the diagnosis and plan',
        description: "Find the options your doctor didn't mention",
      },
      {
        title: 'Get to the right hospital',
        description: 'Find the center and doctor for your cancer',
      },
      { title: 'Stop losing weeks', description: 'Get the scan, biopsy or visit sooner' },
    ],
  },
  {
    label: 'Waiting for a scan or biopsy',
    items: [
      {
        title: 'Stop losing weeks',
        description: 'Healz finds where you can get the scan, biopsy or visit sooner',
      },
      {
        title: "Avoid your doctors' mistakes",
        description: 'Every report from every doctor, checked for mistakes and explained',
      },
      { title: 'Track every result', description: 'See what to ask next' },
    ],
  },
  {
    label: 'In treatment',
    items: [
      {
        title: 'Get through treatment',
        description: 'Chemo, radiation, surgery or immunotherapy: each has its own traps',
      },
      {
        title: 'Track every result',
        description: 'See if treatment is working, and what to ask next',
      },
      {
        title: 'Find trials that fit you',
        description: 'Open trials near home that match the biopsy',
      },
    ],
  },
  {
    label: 'Caring for someone',
    items: [
      {
        title: 'Your cancer control center',
        description: 'Stage, markers, plan and next steps in one place',
      },
      {
        title: 'Top oncologists in your chat',
        description: 'Join within 24 hours, sometimes longer, and stay 7 days',
      },
      {
        title: 'AI contacts hospitals for you',
        description: 'Drafts the email to a top cancer center, you tap send',
      },
    ],
  },
];

export const steps: Step[] = [
  {
    title: 'Stop losing weeks',
    description: 'Healz finds where you can get the scan, biopsy or visit sooner',
    appointmentForm: true,
  },
  {
    title: "Avoid your doctors' mistakes",
    description: 'Every report from every doctor, checked for mistakes and explained',
  },
  {
    title: 'Check the diagnosis and plan',
    description: "Find the options your doctor didn't mention",
    highlight: 'The step that changes outcomes',
  },
  {
    title: 'Get to the right hospital',
    description:
      'Your local hospital may not be enough. Find the center and doctor for your cancer',
  },
  {
    title: 'Get through treatment',
    description: 'Chemo, radiation, surgery or immunotherapy: each has its own traps',
  },
  { title: 'Track every result', description: 'See if treatment is working, and what to ask next' },
];

export const faqs: Faq[] = [
  {
    question: 'Will Healz read my pathology report?',
    answer:
      'Yes. Add labs, scans and docs to the chat. Every report from every doctor is checked for mistakes and explained.',
  },
  {
    question: 'Can Healz find clinical trials for me?',
    answer:
      'Yes. Healz finds open trials near home that match the biopsy, and helps you get into the latest trials.',
  },
  {
    question: 'Does Healz work for caregivers? My mom has cancer.',
    answer:
      'Yes. Healz is built for patients and their caregivers. Add her reports and scans and ask everything in one chat.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Annual is $499 today ($1.37 / day). Monthly is $69/mo. Cancel anytime. A top oncologist in your chat is added separately, when you want one.',
  },
  {
    question: 'Does Healz replace my oncologist?',
    answer:
      'No. Healz.ai is an educational service, not a medical provider. Always discuss every decision with your doctor.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Anonymous when you want. A built-in redactor you use to remove identifying details, so your questions never have to carry your name.',
  },
  {
    question: 'Can I share imaging (CT, MRI, PET, X-ray)?',
    answer:
      'Yes. For a written report by a radiologist on your MRI, CT, X-ray or ultrasound, add MRI & Imaging Review ($449).',
  },
  {
    question: 'What if my case is complex and needs human eyes?',
    answer:
      'Add a top doctor to your chat for 7 days. For complex and late-stage cases, the Complete Oncology Review matches a top German oncologist to your case.',
  },
];

export const quotes: Quote[] = [
  {
    tag: 'It caught what her doctors missed',
    context: 'Endometrial cancer',
    tone: 'lime',
    text: "They didn't really do the right thing by me... I should have been on letrozole right from the start.",
    author: 'A woman after endometrial cancer, retelling what Healz told her',
  },
  {
    tag: 'It connected the dots',
    context: 'Prostate cancer',
    tone: 'maroon',
    text: 'There was a rebound effect 6 to 8 weeks later, and Healz picked it up, explained exactly.',
    author: 'A man with prostate cancer, on a PSA spike after antibiotics',
  },
  {
    tag: 'It told him not to wait',
    context: 'Caregiver',
    tone: 'stone',
    text: "The old machine delivers the same radiation. Her tumor won't wait for a sharper alignment photo.",
    author:
      "A husband, 78, reading Healz's answer on whether to wait for a newer radiation machine",
  },
  {
    tag: 'The real science, not “talk to your oncologist”',
    context: 'Parent',
    tone: 'ink',
    text: 'Perplexity Max was always telling me you need to talk to your oncologist... Healz tries to help you understand the real science.',
    author: "A father whose child's cancer came back",
  },
  {
    tag: 'Why she joined',
    context: 'Lung nodules',
    tone: 'lime',
    text: 'It said the word cavitating, and likely metastatic... that is when I decided to join.',
    author: 'A woman watching lung nodules after endometrial cancer',
  },
];

export const comparison: Comparison[] = [
  {
    healz: 'Built for cancer. Trained on 40M+ cancer studies',
    others: 'Built for any question, on any topic',
  },
  {
    healz: 'Remembers every scan, every dose, every side effect',
    others: 'Forgets you between sessions',
  },
  {
    healz: 'Top oncologists join your chat, usually within 24 hours',
    others: 'No doctor in the chat',
  },
  {
    healz: 'Helps you understand the real science',
    others: 'Often stops at “talk to your oncologist”',
  },
  {
    healz: 'Contacts hospitals and insurers, finds trials that match the biopsy',
    others: 'Leaves the calls and emails to you',
  },
];

const planFeatures = [
  "Guides you through cancer by the world's latest guidelines",
  'Oncologists from top 20 world cancer centers',
  '20% off every doctor case',
  'Contacts hospitals and insurers for you',
  'Gets you into the latest trials',
  "Saves your money from treatments that won't work. Sometimes $100k.",
] as const;

const annualOnly = new Set<string>([planFeatures[1], planFeatures[2]]);

export const plans = {
  annual: {
    name: 'Annual',
    badge: 'SAVE 40%',
    price: '$1.37',
    period: '/ day',
    oldPrice: '$828',
    total: '$499',
    cta: 'Go annual. Save $329',
    features: planFeatures.map((text) => ({ text, included: true })),
  },
  monthly: {
    name: 'Monthly',
    badge: 'BILLED MONTHLY',
    price: '$69',
    period: '/mo',
    note: 'Cancel anytime',
    cta: 'Start monthly',
    features: planFeatures.map((text) => ({
      text: annualOnly.has(text) ? `${text} (not included)` : text,
      included: !annualOnly.has(text),
    })),
  },
} as const;

export const addOns: AddOn[] = [
  {
    title: 'Specialist doctor',
    description: 'Gynecologist, Endocrinologist, Cardiologist and 50 more',
    price: '$399',
  },
  {
    title: 'MRI & Imaging Review',
    description: 'Written report by Radiologist on your MRI, CT, X-ray or Ultrasound',
    price: '$449',
  },
  {
    title: 'Oncologist',
    description: 'Best for follow-ups & double-checking your strategy',
    price: '$599',
  },
  {
    title: 'Complete Oncology Review',
    description: 'Top German oncologist matched to your case. Best for complex & late-stage cases.',
    price: '$1,790',
  },
];

export const specialties = [
  'Oncology',
  'Hematology',
  'Surgery',
  'Radiology',
  'Urology',
  'Mammology',
  'Genetics',
  'Gastroenterology',
  'Endocrinology',
  'Cardiology',
  'Neurology',
  'Pulmonology',
  'Nutrition',
  'Psychology',
];

export const press = ['Business Insider', 'Yahoo Finance', 'Tech News', 'HyperAI', 'Jingletree'];
