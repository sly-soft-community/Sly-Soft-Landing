import styles from "./page.module.scss";
import { getDictionary } from "../../../get-dictionary";
import { i18n } from "../../../i18n-config";
import HeroSection from "@/components/Hero/HeroSection";
import Advantages from "@/components/Advantages/Advantages";
import "../globals.scss";
import Services from "@/components/Services/Services";
import AnswersOnQuestions from "@/components/AnswersOnQuestions/AnswersOnQuestions";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params: { lang } }) {
  const dictionary = getDictionary(lang);
  return {
    title: dictionary["meta-data"]["title"],
    description: dictionary["meta-data"]["description"],
    alternates: {
      languages: {
        "x-default": "/",
        ru: "/ru",
        en: "/en",
      },
    },
  };
}

export default function Home({ params: { lang } }) {
  const dictionary = getDictionary(lang);

  return (
    <main className={styles.main}>
      <HeroSection />
      <Advantages />
      <div className="container">
        <Services />
        <AnswersOnQuestions />
      </div>
    </main>
  );
}
