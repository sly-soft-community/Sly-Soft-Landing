"use client"
import React, { useEffect, useState } from "react";
import { advantagesItem } from "./advantagesItem";
import styles from "./Advantages.module.scss";
import Icons from "@/media/img";
import useWindowSize from "@/hooks/useWindowSize";

const Advantages = ({}) => {

  const windowSize = useWindowSize();
  const isSmallScreen = windowSize.width <= 1204;

  return (
    <div>
      <h2 className={styles.advantagesTitle}>Наши преимущества</h2>
      <div className="container">
        <div className={styles.section}>
          {advantagesItem.map((item, index) => (
            <div key={item.id} className={`${styles.sectionBlock} ${index === 0 || index === 3 ? "" : styles.second}` }>
              {isSmallScreen ? (
            <Icons.Stroke className={styles.colorStroke} />
          ) : (
            <item.stroke key={item.id} className={styles.colorStroke} />
          )}
              <div className={styles.content}>
                <div className={styles.mini}>
                  <div><item.icon className={styles.smallIcon} /></div>
                  <h4 className={styles.title}>
                    {item.title}
                  </h4>
                </div>
                <p className={styles.titleSub}>
                  {item.subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
