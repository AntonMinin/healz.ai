import type { APIRoute } from 'astro';

import { absoluteUrl, withBase } from '@/lib/url';

const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
];

export const GET: APIRoute = ({ site }) => {
  const groups = ['*', ...aiCrawlers].map((agent) => `User-agent: ${agent}\nAllow: /`);
  const body = [...groups, `Sitemap: ${absoluteUrl(withBase('sitemap-index.xml'), site)}`].join(
    '\n\n',
  );
  return new Response(`${body}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
