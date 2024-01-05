import React, { useMemo, useState } from "react";
// import Link from "next/link";
import { Link } from "react-scroll";
import Logo from "@/media/Logo.png";
import ExportedImage from "next-image-export-optimizer";
import styles from "./NavBar.module.scss";
import { useTranslations } from "next-intl";
import LanguageButton from "@/components/Buttons/header-buttons/language-button/Language";
import ChangeOfTopic from "@/components/Buttons/header-buttons/change-of-topic/ChangeOfTopic";
import Contact from "@/components/Buttons/header-buttons/contact-us/Contact";

function NavBar({ isActive, setIsActive }) {
  const t = useTranslations("Header");
  const items = useMemo(
    () => [
      {
        id: 1,
        title: t("services"),
        sectionId: "services",
      },
      {
        id: 2,
        title: t("projects"),
        sectionId: "projects",
      },
      {
        id: 3,
        title: t("workflow"),
        sectionId: "workflow",
      },
      {
        id: 4,
        title: t("contacts"),
        sectionId: "contacts",
      },
      {
        id: 5,
        title: t("faq"),
        sectionId: "faq",
      },
    ],
    [t]
  );

  const handleToggle = () => {
    let bodyElem = document.querySelector('body')
    if (isActive) bodyElem.style.overflowY = ''
    else bodyElem.style.overflowY = 'hidden'

    setIsActive(!isActive);
  };

  return (
    <div className={styles.containerNav}>
      <div className={`${styles.logo} ${styles.mobile}`}>
        <Link
          className={`${styles.logo} ${styles.mobile}`}
          to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ExportedImage src={Logo} width={130} height={56} alt="SlySoft" />
        </Link>
      </div>
      <div className={isActive ? `${styles.menuBox} ${styles.active}` : styles.menuBox}>
        <Link
          className={`${styles.logo} ${styles.desctop}`}
          to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ExportedImage src={Logo} width={130} height={56} alt="SlySoft" />
        </Link>
        <nav className={`${styles.linksItem}`}>
          <ul className={styles.links}>
            {items.map((item) => (
              <li key={item.id} className={styles.item}>
                <Link
                  to={item.sectionId}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`${styles.btn}`}>
          <LanguageButton />
          <ChangeOfTopic />
          <Contact name={t("get-in-touch")} targetSectionId="contacts" />
          <button className={styles.button} >{t("get-in-touch")}</button>
        </div>
      </div>

      <div
        onClick={handleToggle}
        className={styles.menu}>
        <div
          className={`${styles.menuIcon} ${isActive ? styles.active : ""}`}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
