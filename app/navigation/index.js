import {
  createLocalizedPathnamesNavigation,
} from 'next-intl/navigation';

export const locales = ['ru', 'en'];
export const defaultLocale = 'ru';
export const localePrefix = 'always'; // Default

export const pathnames = {
  '/': '/',
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
