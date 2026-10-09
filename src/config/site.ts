export const site = {
  name: 'Healz',
  legalName: 'HealzAI Inc',
  title: 'Healz: AI cancer guide with top oncologists in one chat',
  description:
    'Healz guides cancer patients and caregivers through every step. AI trained on 40M+ cancer studies plus board-certified oncologists in one chat: personal plan, report checks, trials and second opinions.',
  locale: 'en_US',
  homepage: 'https://healz.ai',
  address: {
    streetAddress: '1111B S Governors Ave #92123',
    addressLocality: 'Dover',
    addressRegion: 'DE',
    postalCode: '19904',
    addressCountry: 'US',
  },
  links: {
    app: 'https://healz.ai/welcome',
    login: 'https://healz.ai',
    contact: 'https://healz.ai',
    blog: 'https://healz.ai/blog',
    sms: 'https://healz.ai/sms',
    terms: 'https://healz.ai/legal/terms',
    privacy: 'https://healz.ai/legal/privacy',
    pressStory:
      'https://www.businessinsider.com/ai-healthcare-cancer-startup-doctor-wife-diagnosis-treatment-invested-2026-9',
  },
} as const;

export const sectionNav = [
  { href: '#how', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#faq', label: 'FAQ' },
] as const;
