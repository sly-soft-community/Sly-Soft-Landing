"use client";

import React, { useMemo } from "react";
import styles from "./ContactUsSection.module.scss";
import ContactForm from "@/sections/ContactUs/components/ContactForm/Contact";
import { useMediaQuery } from "react-responsive";
import {
  Blur,
  BlurSmall,
  Dot,
  Number,
  Be,
  Facebook,
  Inst,
  Linkedin,
  Tg,
  Vk,
  World,
  BlurAverage,
  BlurSmallSmall,
} from "@/media/img";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ContactUsSection = () => {
  const t = useTranslations("ContactUs");
  const socialIconsItems = useMemo(
    () => [
      {
        id: 1,
        title: t("social-text.desc.title"),
        icons: [
          {
            id: 1,
            icon: Vk,
            link: "https://vk.com/slysoftdev",
          },
          {
            id: 2,
            icon: Inst,
            link: "https://www.instagram.com/slysoft.dev/",
          },
          {
            id: 3,
            icon: Tg,
            link: "https://t.me/slysoft",
          },
        ],
      },
      {
        id: 2,
        title: t("social-text.desc.subtitle"),
        icons: [
          {
            id: 4,
            icon: Facebook,
            link: "https://www.facebook.com/slysoftdev",
          },
          {
            id: 5,
            icon: Linkedin,
            link: "https://www.linkedin.com/company/slysoftdev/",
          },
        ],
      },
      {
        id: 3,
        title: t("social-text.desc.cases"),
        icons: [
          {
            id: 6,
            icon: Be,
            link: "https://www.behance.net/slysoftdev",
          },
          {
            id: 7,
            icon: World,
            link: "https://dribbble.com/slysoftdev",
          },
        ],
      },
    ],
    [t]
  );

  const isMobileScreen = useMediaQuery({
    query: "(max-width: 1025px)",
  });
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 625px)",
  });
  const isExtraSmallScreen = useMediaQuery({
    query: "(max-width: 425px)",
  });

  return (
    <div className={styles.customBg} id={"contacts"}>
      <div className={styles.blur}></div>
      <div className={styles.contactSection}>
        <div className={styles.contact}>
          <div className={styles.contacts}>
            <h2 className={styles.contactText}>{t("contactText")}</h2>
            <p className={styles.contactDesc}>{t("contactDesc")}</p>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactTop}>
              <div className={styles.contactWorld}>
                <Dot className={styles.dot} />
                {t("number")}
              </div>
              <div className={styles.contactNumber}>
                <Number className={styles.number} />
                {t("dot")}
              </div>
            </div>
            <div className={styles.contactBot}>
              <h6 className={styles.socialText}>{t("social-text.title")}</h6>
              {socialIconsItems.map((item) => (
                <div key={item.id} className={styles.socialLayout}>
                  <div className={styles.socialDesc}>{item.title}</div>
                  <div className={styles.socialIcon}>
                    {item.icons.map((icon) => (
                      <Link
                        key={icon.id}
                        href={icon.link}
                        target="_blank"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        <icon.icon />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.contactBlur}>
          <div className={styles.bgBlur}>
            {isExtraSmallScreen ? (
              <div>
                <BlurSmallSmall />
              </div>
            ) : isSmallScreen ? (
              <div>
                <BlurAverage />
              </div>
            ) : isMobileScreen ? (
              <div>
                <BlurSmall />
              </div>
            ) : (
              <div>
                <Blur />
              </div>
            )}
          </div>
          <ContactForm />
        </div>
      </div>
      <div className={styles.blurT}></div>
    </div>
  );
};

export default ContactUsSection;
