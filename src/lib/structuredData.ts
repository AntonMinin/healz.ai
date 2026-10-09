import { site } from '@/config/site';
import { faqs, plans } from '@/data/content';
import { doctors } from '@/data/doctors';

interface Urls {
  page: string;
  logo: string;
  image: string;
}

const toPrice = (value: string) => value.replace(/[^0-9.]/g, '');

export function buildStructuredData({ page, logo, image }: Urls) {
  const orgId = `${site.homepage}/#organization`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: site.name,
        legalName: site.legalName,
        url: site.homepage,
        logo,
        address: { '@type': 'PostalAddress', ...site.address },
        sameAs: [site.links.pressStory],
      },
      {
        '@type': 'WebSite',
        '@id': `${page}#website`,
        url: page,
        name: site.name,
        publisher: { '@id': orgId },
        inLanguage: 'en',
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${page}#webpage`,
        url: page,
        name: site.title,
        description: site.description,
        primaryImageOfPage: image,
        inLanguage: 'en',
        isPartOf: { '@id': `${page}#website` },
        about: { '@type': 'MedicalCondition', name: 'Cancer' },
        audience: [
          { '@type': 'MedicalAudience', audienceType: 'Patient' },
          { '@type': 'PeopleAudience', audienceType: 'Caregivers' },
        ],
        medicalDisclaimer:
          'Healz.ai is an educational service, not a medical provider. Always discuss every decision with your doctor.',
      },
      {
        '@type': 'Service',
        '@id': `${page}#service`,
        name: 'Healz cancer guidance',
        serviceType: 'AI cancer navigation with oncologist second opinions',
        description: site.description,
        provider: { '@id': orgId },
        areaServed: 'Worldwide',
        offers: [
          {
            '@type': 'Offer',
            name: `${plans.annual.name} plan`,
            price: toPrice(plans.annual.total),
            priceCurrency: 'USD',
            url: site.links.app,
          },
          {
            '@type': 'Offer',
            name: `${plans.monthly.name} plan`,
            price: toPrice(plans.monthly.price),
            priceCurrency: 'USD',
            url: site.links.app,
          },
        ],
        employee: doctors.map((doctor) => ({
          '@type': 'Physician',
          name: doctor.name,
          description: `${doctor.role}. ${doctor.credentials}`,
          address: doctor.city,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${page}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };
}
