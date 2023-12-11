import React from "react";
import styles from "./ContactUs.module.scss";
import Icons from "@/media/img";
import Stroke from "../Ui/Stroke/Stroke";
import Corner from "../Ui/Corner/Corner";
import ContactForm from "./components/ContactForm/ContactForm";
import { contactUsItems } from "./сontactUsItems";

const ContactUs = () => {
  return (
    <div className={styles.customBg}>
      <div className={styles.blur}></div>
      <div className={styles.contactSection}>
        <div className={styles.contact}>
          <h2 className={styles.contactText}>Свяжитесь с нами</h2>
          <p className={styles.contactDesc}>
            Напишите нам! И мы воплотим ваши цифровые желания в реальность!
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactTop}>
              <div className={styles.contactNumber}>
                <Icons.Number className={styles.number} />
                +996 990 003 990
              </div>
              <div className={styles.contactWorld}>
                <Icons.Dot className={styles.dot} />
                Работаем по всему миру
              </div>
            </div>
            <div className={styles.contactBot}>
              <h6 className={styles.socialText}>Мы в социальных сетях:</h6>
              {contactUsItems.map((item) => (
                <div key={item.id}   className={styles.socialLayout}>
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
            <Icons.Blur />
          </div>
          <ContactForm />
        </div>
      </div>
      <div className={styles.blurT}></div>
    </div>
  );
};

export default ContactUs;
