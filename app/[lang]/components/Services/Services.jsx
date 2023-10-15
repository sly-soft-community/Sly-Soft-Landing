"use client"
import React from "react";
import styles from "./Services.module.scss";
import ImageGetStarted from "../Ui/ImageGetStarted/ImageGetStarted";
import Icons from "@/media/img";
import { servicesItems } from "./servicesItem"
import useMediaScreen from "@/hooks/useMediaScreen";
 
const Services = () => {

  const smallScreen = useMediaScreen(1200)

  return (
    <div className={styles.services}>
      <div className={styles.servicesTitle}>
        <h3 className={styles.servicesText}>Наши услуги</h3>
        <ImageGetStarted name={"Get in touch"} />
      </div>
      <div className={styles.containerImg}>
      <div className={styles.customBgImg}>
        <div className={styles.backdrop}></div>
        <div className={styles.colon}>
          {servicesItems.map((item, index) => <div key={item.id} className={`${styles.colonBlock} ${index === 3 || index === 5 ? styles.margined : ""}`}>
            {smallScreen ? <item.mobileFillIcon className={`${styles.colorFill} ${item.ratated === "mobile" ? styles.ratated : ''}`} /> :<item.fillIcon className={`${styles.colorFill} ${item.ratated === "desctop" ? styles.ratated : ''}`} />}
            <div className={styles.content}>
              <h5 className={styles.title}>{item.title}</h5>
              <p className={styles.titleSub}>
                {item.subTitle}
              </p>
              <ImageGetStarted name="Explore"/>
            </div>
          </div>)}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
