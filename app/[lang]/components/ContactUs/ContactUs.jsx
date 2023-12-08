import React from "react";
import styles from "./ContactUs.module.scss";
import Icons from "@/media/img";
import Stroke from "../Ui/Stroke/Stroke";
import Corner from "../Ui/Corner/Corner";
import ContactForm from "./components/ContactForm/ContactForm";

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
            <div className={styles.contactNumber}>
              <Icons.Number className={styles.number} />
              +996 990 003 990
            </div>
            <div className={styles.contactWorld}>
              <Icons.Dot className={styles.dot} />
              Работаем по всему миру Worldwide
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
    </div>
  );
};

export default ContactUs;
