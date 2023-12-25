"use client";

import React, { useMemo } from "react";
import OurWorksCard from "@/sections/OurWorks/components/OurWorksCard/OurWorksCard";
import styles from "./OurWorksSection.module.scss";
import { useTranslations } from "next-intl";
import { ServicesBgThree } from "@/media/img";
import SmartProImg from "@/media/img/ourWorks/SmartPro.png";
import CampImg from "@/media/img/ourWorks/Camp.png";
import KSTUImg from "@/media/img/ourWorks/KSTU.png";
import SynergyImg from "@/media/img/ourWorks/Synergy.png";

const OurWorksSection = () => {
  const t = useTranslations("OurWorks");

  const ourWorksItems = useMemo(
    () => [
      {
        id: 1,
        img: SmartProImg,
        mobileFillIcon: ServicesBgThree,
        title: t("smart-pro.title"),
        subtitle: t("smart-pro.subtitle"),
        tags: t("smart-pro.tags").split(", "),
      },
      {
        id: 2,
        img: CampImg,
        mobileFillIcon: ServicesBgThree,
        title: t("aplicant-kstu.title"),
        subtitle: t("aplicant-kstu.subtitle"),
        tags: t("aplicant-kstu.tags").split(", "),
      },
      {
        id: 3,
        img: KSTUImg,
        mobileFillIcon: ServicesBgThree,
        title: t("aplicant-kstu.title"),
        subtitle: t("aplicant-kstu.subtitle"),
        tags: t("aplicant-kstu.tags").split(", "),
      },
      {
        id: 4,
        img: SynergyImg,
        mobileFillIcon: ServicesBgThree,
        title: t("synergy-group.title"),
        subtitle: t("synergy-group.subtitle"),
        tags: t("synergy-group.tags"),
      },
    ],
    [t]
  );
  return (
    <div className={styles.section} id={"projects"}>
      <div className={styles.ourWorksTop}>
        <h2 className={styles.text}>{t("our-works")}</h2>
        <div className={styles.checkOut}>
          <p className={styles.checkOutDesc}>
           {t("description")}
          </p>
        </div>
      </div>
      <div className={styles.containerBlock}>
        {ourWorksItems.map((item, i) => (
          <OurWorksCard item={item} key={`our${i}`} />
        ))}
      </div>
      <div className={styles.sectionBlock}></div>
    </div>
  );
};

export default OurWorksSection;
