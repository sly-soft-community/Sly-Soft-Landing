import React from 'react'
import styles from '@/components/Buttons/header-buttons/language-button/Language.module.scss'
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { useRouter, usePathname } from "@/navigation";

const LanguageButton = () => {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    let locale = currentLocale;
    if (currentLocale === 'ru') {
      locale = 'en'
    }
    if (currentLocale === 'en') {
      locale = 'ru'
    }
    startTransition(() => {
      router.replace(pathname, { locale: locale });
    });
  };
  return (
    <div className={styles.wrapperImg}>
      <button className={styles.button} onClick={handleClick} disabled={isPending}>
        <span className={styles.text}>{currentLocale.toUpperCase()}</span>
      </button>
    </div>
  )
}

export default LanguageButton