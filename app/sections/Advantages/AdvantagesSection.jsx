"use client";

import { useMediaQuery } from "react-responsive";
import styles from "./AdvantagesSection.module.scss";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import {
  Computer,
  Key,
  People,
  Persone,
  Script,
  Stroke,
  StrokeForth,
  StrokeSecond,
  StrokeSmallFifth,
  StrokeSmallForth,
  StrokeSmallSecond,
  StrokeSmallSixth,
  StrokeSmallThird,
  StrokeT,
  StrokeThree,
  StrokeTwo,
  Time,
} from "@/media/img";

const Advantages = ({}) => {
  const t = useTranslations("Advantages");

  const items = useMemo(
    () => [
      {
        id: 1,
        stroke: Stroke,
        strokeSmall: Stroke,
        icon: Key,
        title: t("project-development.title"),
        subtitle: t("project-development.subtitle"),
      },
      {
        id: 2,
        stroke: StrokeT,
        strokeSmall: StrokeSmallSecond,
        icon: Persone,
        title: t("optimal-solutions.title"),
        subtitle: t("optimal-solutions.subtitle"),
      },
      {
        id: 3,
        stroke: StrokeSecond,
        strokeSmall: StrokeSmallThird,
        icon: Computer,
        title: t("future-proof-solutions.title"),
        subtitle: t("future-proof-solutions.subtitle"),
      },
      {
        id: 4,
        stroke: StrokeTwo,
        strokeSmall: StrokeSmallForth,
        icon: People,
        title: t("bundled.title"),
        subtitle: t("bundled.subtitle"),
      },
      {
        id: 5,
        stroke: StrokeThree,
        strokeSmall: StrokeSmallFifth,
        icon: Script,
        title: t("demo-subdomains.title"),
        subtitle: t("demo-subdomains.subtitle"),
      },
      {
        id: 6,
        stroke: StrokeForth,
        strokeSmall: StrokeSmallSixth,
        icon: Time,
        title: t("project-manager.title"),
        subtitle: t("project-manager.subtitle"),
      },
    ],
    [t]
  );

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1204px)",
  });

  return (
    <div className={styles.advantages}>
      <h2 className={styles.advantagesTitle}>{t("advantages")}</h2>
      <div className="container">
        <div className={styles.section}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.sectionBlock} ${
                index === 0 || index === 3 ? "" : styles.second
              }`}
            >
              {isSmallScreen ? (
                <item.strokeSmall className={styles.colorStroke} />
              ) : (
                <item.stroke key={item.id} className={styles.colorStroke} />
              )}
              <div className={styles.content}>
                <div className={styles.mini}>
                  <div>
                    <item.icon className={styles.smallIcon} />
                  </div>
                  <h4 className={styles.title}>{item.title}</h4>
                </div>
                <p className={styles.titleSub}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
