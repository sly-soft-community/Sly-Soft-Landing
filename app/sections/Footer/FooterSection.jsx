"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Logo from "@/media/Logo.png";
import styles from "@/sections/Footer/FooterSection.module.scss";
import { useTranslations } from "next-intl";

const FooterSection = ({ dictionary }) => {
  const t = useTranslations("Footer");

  const item = useMemo(
    () => [
      {
        id: 1,
        title: t("services"),
      },
      {
        id: 2,
        title: t("projects"),
      },
      {
        id: 3,
        title: t("workflow"),
      },
      {
        id: 4,
        title: t("contacts"),
      },
      {
        id: 5,
        title: t("faq"),
      },
    ],
    [t]
  );
  return (
    <footer className={styles.footerContainer}>
      <div className="container">
        <ul className={styles.links}>
          {item.map((items) => (
            <li key={items.id} className={styles.item}>
              {items.title}
            </li>
          ))}
        </ul>
        <div className={styles.footerLine}></div>
        <div className={styles.footerBot}>
          <div className={styles.footerInsideMatters}>
            <Link href="/">
              <ExportedImage src={Logo} width={130} height={56} alt="SlySoft" />
            </Link>
            <span>{t("inside")}</span>
          </div>
          <div className={styles.policy}>
            <span>{t("privacy")}</span>
            <span>{t("Terms")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
