"use client";
import React, { useState } from "react";
import styles from "./OurWorksCard.module.scss";
import AnimatedCursor from "react-animated-cursor";
import ExportedImage from "next-image-export-optimizer";

const OurWorksCard = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
        <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <ExportedImage src={item.img} className={styles.img} alt="SlySoft" />
        <div className={styles.content}>
          <h5 className={styles.title}>{item.title}</h5>
          <p className={styles.titleSub}>{item.subtitle}</p>
          <ul>
            <li className={styles.tag}>{item.tags}</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurWorksCard;
