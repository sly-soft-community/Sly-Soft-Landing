import React from "react";
import styles from "./Services.module.scss";
import ImageGetStarted from "../Ui/ImageGetStarted/ImageGetStarted";
import Icons from "@/media/img";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.servicesTitle}>
        <h3 className={styles.servicesText}>Наши услуги</h3>
        <ImageGetStarted name={"Get in touch"} />
      </div>
      <div className={styles.containerImg}>
      <div className={styles.customBgImg}>
        <div className={styles.colon}>
          <div className={styles.colonBlock}>
            <Icons.ServicesBg className={styles.colorFill} />
            <div className={styles.content}>
              <h5 className={styles.title}>Разработка сайтов</h5>
              <p className={styles.titleSub}>
                Увеличьте свое присутствие в Интернете с помощью профессионально
                созданных веб-сайтов, включающие: сайты-визитки, корпоративные
                сайты, лендинги, интернет-магазины и промо-сайты.
              </p>
              <ImageGetStarted name="Explore"/>
            </div>
          </div>
          {/* <div className={styles.colonBlock}>
            <Icons.ServicesBgSecond className={styles.colorFill} />
            <div className={styles.content}>
              <h5 className={styles.title}>Разработка сайтов</h5>
              <p className={styles.titleSub}>
                Увеличьте свое присутствие в Интернете с помощью профессионально
                созданных веб-сайтов, включающие: сайты-визитки, корпоративные
                сайты, лендинги, интернет-магазины и промо-сайты.
              </p>
              <ImageGetStarted name="Explore"/>
            </div>
          </div> */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
