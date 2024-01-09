import { GoogleAnalytics } from "@/analytics/GoogleAnalytics";
import FooterSection from "@/sections/Footer/FooterSection";
import HeaderSection from "@/sections/Header/HeaderSection";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales } from "@/navigation";

export const metadata = {
  title: 'SlySoft Community',
  description: 'Hello World',
  alternates: {
    languages: {
      "x-default": "/",
      ru: "/ru",
      en: "/en",
    },
  },
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);

  const messages = useMessages()

  return (
      <html lang={locale}>
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <body>
        <NextIntlClientProvider messages={messages}>
          <HeaderSection />
          {children}
          <FooterSection />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
