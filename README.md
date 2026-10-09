# Healz landing

Лендинг healz.ai по структуре ro.co/weight-loss со смыслами healz.ai/welcome. Дизайн: `_design/Healz Landing.dc.html`.

**Стек:** Astro 7 (SSG) · React 19 (только острова) · Tailwind CSS 4 · TypeScript (strictest) · pnpm · ESLint + Prettier · GitHub Pages.

## Запуск

Требуется Node.js ≥ 22 и pnpm (версия зафиксирована в `packageManager`, проще всего через `corepack enable`).

```bash
pnpm install
pnpm dev            # http://localhost:4321
```

## Проверка и сборка

```bash
pnpm lint           # ESLint (TS strict, astro, jsx-a11y strict, react-hooks)
pnpm format:check   # Prettier (+ сортировка классов Tailwind)
pnpm build          # astro check (типы) + статическая сборка в dist/
pnpm preview        # отдать dist/ локально, http://localhost:4321
```

Сборка под путь GitHub Pages (как в CI):

```bash
SITE_URL=https://<user>.github.io BASE_PATH=/<repo> pnpm build
```

## Деплой

`.github/workflows/deploy.yml` запускается при пуше в `main`: lint → format check → build → деплой на Pages.
`SITE_URL` и `BASE_PATH` берутся из `actions/configure-pages`, поэтому подходят и `<user>.github.io/<repo>`, и свой домен.

Один раз в репозитории: **Settings → Pages → Source: GitHub Actions**.

## Структура

```
src/
  components/
    ui/          ui-kit: Button, Tag, Heading, Photo, ChatBubble, CheckItem, Disclosure, ChipToggle, ...
    sections/    секции страницы (.astro, статичные), подпапки для составных секций
    islands/     React-острова: Carousel, StageSelector, StepsAccordion, FaqAccordion
  data/          весь контент (тексты, тарифы, FAQ, врачи) в одном месте, типизирован
  config/site.ts название, описание, внешние ссылки (CTA, логин, legal)
  lib/           JSON-LD (schema.org) и url-хелперы под base path
  pages/         index.astro, robots.txt, llms.txt (генерируются из data/)
  styles/        токены дизайна (@theme) и утилиты Tailwind
```

- JS грузится только для React-островов (`client:visible`) и ленивого видео, остальное чистый HTML.
- Изображения: `astro:assets` → AVIF/WebP + `srcset`, lazy везде кроме первого экрана.
- Шрифт DM Sans самохостится через Astro Fonts: preload и fallback с подогнанными метриками (без CLS).
- SEO/GEO: canonical, Open Graph/Twitter, JSON-LD (Organization, WebSite, MedicalWebPage, Service + Offers + Physicians, FAQPage), sitemap, robots.txt с явным разрешением AI-краулеров, `llms.txt`.
