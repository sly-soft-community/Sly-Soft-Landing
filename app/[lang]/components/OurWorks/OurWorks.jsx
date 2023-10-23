"use client";
import React from "react";
import styles from "./OurWorks.module.scss";
import Icons from "@/media/img";
import useWindowSize from "@/hooks/useWindowSize";
import { ourWorksItems } from "./ourWorksItems";
import Image from "next/image";

const OurWorks = () => {
  const windowSize = useWindowSize();
  const isSmallScreen = windowSize.width <= 433;

  return (
    <div>
      <div className={styles.ourWorks}>
        <h2 className={styles.text}>Наши работы</h2>
        <div className={styles.checkOut}>
          <p className={styles.checkOutDesc}>
            Ознакомьтесь с нашими проектами, которые воплощают инновации,
            мастерство и страсть к воплощению идей в реальность. Каждый проект
            рассказывает уникальную историю сотрудничества, опыта и преданности
            делу создания исключительных решений.
          </p>
        </div>
      </div>
      <div className={styles.containerBlock}>
        {ourWorksItems.map((item) => (
          <div key={item.id} className={styles.block}>
            <div className={styles.colonImg}>
              {item.fillIcon && <item.fillIcon className={styles.colorFill} />}
            </div>
            <div className={styles.content}>
              <h5 className={styles.title}>{item.title}</h5>
              <p className={styles.titleSub}>{item.subTitle}</p>
              <ul>
                <li className={styles.tag}>{item.tags}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* <div className={styles.sectionBlock}>
        <div className={styles.svgContainer}>
          <Icons.Frame className={styles.svgIcon} />
          <div className={styles.content}>
            <h6 className={styles.title}>SmartPro</h6>
            <p className={styles.description}>
              Погрузитесь в интернет-магазин SmartPro, цифровую сферу, где
              эффективно отслеживаются подписки и лицензии на программные
              продукты.
            </p>
            <ul className={styles.tag}>
              <li>Branding,</li>
              <li>Ux Design,</li>
              <li>Frontend,</li>
              <li>Backend,</li>
              <li>DevOps,</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default OurWorks;
