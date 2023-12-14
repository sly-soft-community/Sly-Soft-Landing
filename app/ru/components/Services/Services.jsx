"use client"
import React from "react";
import styles from "./Services.module.scss";
import ImageGetStarted from "../Ui/ImageGetStarted/ImageGetStarted";
import { servicesItems } from "./servicesItem"
import Explore from "../Ui/Explore/Explore";
import { useMediaQuery } from 'react-responsive'

const Services = () => {
  const smallScreen = useMediaQuery({
    query: '(max-width: 1200px)'
  });
  return (
    <div className={styles.services}>
      <div className={styles.servicesTitle}>
        <h3 className={styles.servicesText}>Наши услуги</h3>
        <div className={styles.getInTouch}>
          <ImageGetStarted name={"Get in touch"} />
        </div>
      </div>
      <div className={styles.containerImg}>
        <div className={styles.customBgImg}>
          <div className={styles.backdrop}></div>
          <div className={styles.colon}>
            {servicesItems.map((item, index) => <div key={item.id} className={`${styles.colonBlock} ${index === 3 || index === 5 ? styles.margined : ""}`}>
              {smallScreen ? <item.mobileFillIcon className={`${styles.colorFill} ${item.ratated === "mobile" ? styles.ratated : ''}`} /> : <item.fillIcon className={`${styles.colorFill} ${item.ratated === "desctop" ? styles.ratated : ''}`} />}
              <div className={styles.content}>
                <h5 className={styles.title}>{item.title}</h5>
                <p className={styles.titleSub}>
                  {item.subTitle}
                </p>
                <Explore name="Explore" />
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
