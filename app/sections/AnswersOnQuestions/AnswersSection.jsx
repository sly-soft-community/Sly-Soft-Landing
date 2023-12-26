"use client";

import React, { useMemo } from "react";
import styles from "./AnswersSection.module.scss";
import { useTranslations } from "next-intl";

const AnswersSection = () => {
  const t = useTranslations("Answers");

  const answersItems = useMemo(
    () => [
      {
        id: 1,
        title: t("id-1.title"),
        subtitle: t("id-1.subtitle"),
      },
      {
        id: 2,
        title: t("id-2.title"),
        subtitle: t("id-2.subtitle"),
      },
      {
        id: 3,
        title: t("id-3.title"),
        subtitle: t("id-3.subtitle"),
      },
      {
        id: 4,
        title: t("id-4.title"),
        subtitle: t("id-4.subtitle"),
      },
      {
        id: 5,
        title: t("id-5.title"),
        subtitle: t("id-5.subtitle"),
      },
      {
        id: 6,
        title: t("id-6.title"),
        subtitle: t("id-6.subtitle"),
      },
    ],
    [t]
  );
  return (
    <div className={styles.answers} id={"faq"}>
      <h3 className={styles.answersText}>{t("answers-text")}</h3>
      <div className={styles.answersSection}>
        {answersItems.map((item) => (
          <div className={styles.answersBlock} key={item.id}>
            <h6 className={styles.title}>{item.title}</h6>
            <p className={styles.subTitle}>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswersSection;
