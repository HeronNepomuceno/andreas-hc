import { getRelativeLocaleUrl } from 'astro:i18n';

export const locales = ['en', 'pt-br'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function getOppositeLocale(locale: Locale): Locale {
  return locale === 'en' ? 'pt-br' : 'en';
}

export function getLocalizedPath(locale: Locale, path = ''): string {
  const normalizedPath = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return getRelativeLocaleUrl(locale, normalizedPath);
}

export function getLocaleLanguageTag(locale: Locale): string {
  return locale === 'pt-br' ? 'pt-BR' : 'en-US';
}

