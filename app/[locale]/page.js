import styles from "./page.module.scss";
// import { getDictionary } from "../../../get-dictionary";
// import { i18n } from "../../../i18n-config";
import HeroSection from "@/sections/Hero/HeroSection";
import Advantages from "@/sections/Advantages/AdvantagesSection";
import Services from "@/sections/Services/Services";
import OurWorksSection from "@/sections/OurWorks/OurWorksSection";
import OurTechnilogySection from "@/sections/OurTechnilogy/OurTechnilogySection";
import WorkProcessSection from "@/sections/WorkProcess/WorkProcessSection";
import ContactUsSection from "@/sections/ContactUs/ContactUsSection";
import AnswersSection from "@/sections/AnswersOnQuestions/AnswersSection";


export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <Advantages />
      <div className="container">
        <Services />
        <OurWorksSection />
      </div>
      <OurTechnilogySection />
      <div className="container">
        <WorkProcessSection />
      </div>
      <ContactUsSection />
      <div className="container">
        <AnswersSection />
      </div>
    </main>
  );
}
