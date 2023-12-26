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

function NavBar() {
  const t = useTranslations("Header");
  const [isActive, setIsActive] = useState(false);
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
    setIsActive(!isActive);
  };

  return (
    <div className={styles.containerNav}>
      <div>
        <Link
          className={styles.logo}
          to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ExportedImage src={Logo} width={130} height={56} alt="SlySoft" />
        </Link>
      </div>
      <nav className={`${styles.linksItem} ${isActive ? styles.active : ""}`}>
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
      <div className={`${styles.btn} ${isActive ? styles.active : ""}`}>
        <LanguageButton />
        <ChangeOfTopic />
        <Contact name={t("get-in-touch")} targetSectionId="contacts" />
      </div>
      <div className={styles.menu}>
        <div
          className={`${styles.menuIcon} ${isActive ? styles.active : ""}`}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
