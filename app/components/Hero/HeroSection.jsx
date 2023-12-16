"use client";

import React, { useMemo } from "react";
import styles from "./HeroSection.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "./Swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useMediaQuery } from 'react-responsive'
import Slogan from "@/components/Slogan/Slogan";
import { useTranslations } from "next-intl";

const item = [
  {
    id: 1,
    title: "Web Development",
    subTitle: "By using latest technologies we shape digital products",
  },
  {
    id: 2,
    title: "UX/UI Design",
    subTitle: "We produce an engaging, cutting-edge, and useful design",
  },
  {
    id: 3,
    title: "Database",
    subTitle: "Empower Your Business with Robust Databases",
  },
  {
    id: 4,
    title: "Infrastructure",
    subTitle: "Building the Backbone of Digital Product",
  },
];

const HeroSection = () => {
  const t = useTranslations('Hero')
  const slogans = useMemo(() => [
    t('slogan-1'),
    t('slogan-2'),
    t('slogan-3'),
    t('slogan-4')
  ], [t]);
  const isSmallScreen = useMediaQuery({
    query: '(max-width: 820px)'
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
                {item.map((item) => (
                  <SwiperSlide key={item.id} className={styles.item}>
                    <ul className={styles.links}>
                      <li key={item.id} className={styles.item}>
                        <div className={styles.itemTitle}>{item.title}</div>
                        <div className={styles.itemSub}>{item.subTitle}</div>
                      </li>
                    </ul>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <ul className={styles.links}>
                {item.map((items) => (
                  <li key={items.id} className={styles.item}>
                    <div className={styles.itemTitle}>{items.title}</div>
                    <div className={styles.itemSub}>{items.subTitle}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* <div className={styles.advantages}>Наши преимущества</div> */}
    </div>
  );
};

export default HeroSection;
