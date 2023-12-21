"use client";

import React, { useMemo } from "react";
import styles from "./HeroSection.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "./Swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import Slogan from "@/components/Slogan/Slogan";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("Hero");
  const slogans = useMemo(
    () => [t("slogan-1"), t("slogan-2"), t("slogan-3"), t("slogan-4")],
    [t]
  );

  const items = useMemo(
    () => [
      {
        id: 1,
        title: t("web-development.title"),
        subtitle: t("web-development.subtitle"),
      },
      {
        id: 2,
        title: t("ux-ui-design.title"),
        subtitle: t("ux-ui-design.subtitle"),
      },
      {
        id: 3,
        title: t("database.title"),
        subtitle: t("database.subtitle"),
      },
      {
        id: 4,
        title: t("infrastructure.title"),
        subtitle: t("infrastructure.subtitle"),
      },
    ],
    [t]
  );

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 820px)",
  });

  return (
    <div className={styles.customBg}>
      <div className="container">
        <div className={styles.overlay}>
          <div className={styles.overlayB}>
            <h1 className={styles.heroText}>
              <Slogan taglineList={slogans} />
            </h1>
          </div>
          <div style={{ flexGrow: 1 }} />
          <div className={styles.item}>
            {isSmallScreen ? (
              <Swiper
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                {items.map((item) => (
                  <SwiperSlide key={item.id} className={styles.item}>
                    <ul className={styles.links}>
                      <li key={item.id} className={styles.item}>
                        <div className={styles.itemTitle}>{item.title}</div>
                        <div className={styles.itemSub}>{item.subtitle}</div>
                      </li>
                    </ul>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <ul className={styles.links}>
                {items.map((singleItem) => (
                  <li key={singleItem.id} className={styles.item}>
                    <div className={styles.itemTitle}>{singleItem.title}</div>
                    <div className={styles.itemSub}>{singleItem.subtitle}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
