"use client";

import React, { useMemo } from "react";
import ExportedImage from "next-image-export-optimizer";
import Logo from "@/media/Logo.png";
import styles from "@/sections/Footer/FooterSection.module.scss";
import { useTranslations } from "next-intl";
import { Link } from "react-scroll";

const FooterSection = ({ dictionary }) => {
  const t = useTranslations("Footer");

  const item = useMemo(
    () => [
      {
        id: 1,
        title: t("advantages"),
        sectionId: "faq",
      },
      {
        id: 2,
        title: t("services"),
        sectionId: "services",
      },
      {
        id: 3,
        title: t("projects"),
        sectionId: "projects",
      },
      {
        id: 4,
        title: t("work-process"),
        sectionId: "faq",
      },
      {
        id: 5,
        title: t("workflow"),
        sectionId: "workflow",
      },
      {
        id: 6,
        title: t("contacts"),
        sectionId: "contacts",
      },
      {
        id: 7,
        title: t("faq"),
        sectionId: "faq",
      },
    ],
    [t]
  );
  return (
    <footer className={styles.footerContainer}>
      <div className="container">
        <div className={styles.footerSection}>
          <div className={styles.footerTop}>
            <ul className={styles.links}>
              {item.map((items) => (
                <li key={items.id} className={styles.item}>
                  <Link
                    to={items.sectionId}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {items.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.policy}>
              <span>{t("privacy")}</span>
            </div>
          </div>
          <div className={styles.footerLine}></div>
          <div className={styles.footerBot}>
            <div className={styles.footerInsideMatters}>
              <Link
                className={styles.logo}
                to={"home"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <ExportedImage
                  src={Logo}
                  width={130}
                  height={56}
                  alt="SlySoft"
                />
              </Link>
              <span>{t("inside")}</span>
            </div>
            <div className={styles.rights}>
              <span className={styles.community}>{t("community")}</span>
              <span>{t("rights")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
