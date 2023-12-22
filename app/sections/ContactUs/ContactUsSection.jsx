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
} from "@/media/img";
import { useTranslations } from "next-intl";

const ContactUsSection = () => {
  const t = useTranslations("ContactUs");

  const contactUsItems = useMemo(
    () => [
      {
        id: 1,
        title: t("social-text.desc.title"),
        icons: [Vk, Inst, Tg],
      },
      {
        id: 2,
        title: t("social-text.desc.subtitle"),
        icons: [Facebook, Linkedin],
      },
      {
        id: 3,
        title: t("social-text.desc.cases"),
        icons: [Be, World],
      },
    ],
    [t]
  );

  const isMobileScreen = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <div className={styles.customBg}>
      <div className={styles.blur}></div>
      <div className={styles.contactSection}>
        <div className={styles.contact}>
          <div className={styles.contacts}>
            <h2 className={styles.contactText}>{t("contactText")}</h2>
            <p className={styles.contactDesc}>
            {t("contactDesc")}
            </p>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactTop}>
              <div className={styles.contactNumber}>
                <Number className={styles.number} />
                {t("dot")}
              </div>
              <div className={styles.contactWorld}>
                <Dot className={styles.dot} />
                {t("number")}
              </div>
            </div>
            <div className={styles.contactBot}>
              <h6 className={styles.socialText}>{t("social-text.title")}</h6>
              {contactUsItems.map((item) => (
                <div key={item.id} className={styles.socialLayout}>
                  <div className={styles.socialDesc}>{item.title}</div>
                  <div className={styles.socialIcon}>
                    {item.icons.map((Icon, index) => (
                      <Icon key={index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.contactBlur}>
          <div>
            {isMobileScreen ? (
              <div>
                <BlurSmall />
              </div>
            ) : (
              <Blur />
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
