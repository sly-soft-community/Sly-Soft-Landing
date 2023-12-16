"use client"

import { advantagesItem } from "./advantagesItem";
import { useMediaQuery } from 'react-responsive'
import styles from "./Advantages.module.scss";

const Advantages = ({ }) => {
  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1204px)'
  });

  return (
    <div className={styles.advantages}>
      <h2 className={styles.advantagesTitle}>Наши преимущества</h2>
      <div className="container">
        <div className={styles.section}>
          {advantagesItem.map((item, index) => (
            <div key={item.id} className={`${styles.sectionBlock} ${index === 0 || index === 3 ? "" : styles.second}`}>
              {isSmallScreen ? (
                <item.strokeSmall className={styles.colorStroke} />
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
