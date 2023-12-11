"use client";
import Icons from "@/media/img";
import styles from "./ContactForm.module.scss";
import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import ImageGetStarted from "@/components/Ui/ImageGetStarted/ImageGetStarted";
import Send from "@/components/Ui/Send/Send";

const ContactForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <form className={styles.contactForm}>
        <div className={styles.filling}>
          <div className={styles.firstName}>
            <label htmlFor="name" className={styles.labelText}>
              Ваше имя
            </label>
            <div className={styles.inputName}>
              <input
                type="text"
                placeholder="First name"
                className={styles.customInput}
              />
              <Icons.ContactStroke className={styles.nameStroke} />
            </div>
          </div>
          <div className={styles.number}>
            <label htmlFor="name" className={styles.labelText}>
              Номер телефона
            </label>
            <div className={styles.inputNumber}>
              <input
                type="text"
                placeholder="+996 ххх ххх ххх"
                className={styles.customInput}
              />
              <Icons.ContactStrokeSecond className={styles.numberStroke} />
            </div>
          </div>
        </div>
        <div className={styles.email}>
          <label htmlFor="name" className={styles.labelText}>
            ваша почта
          </label>
          <div className={styles.inputEmail}>
            <input
              type="email"
              placeholder="name@mail.com"
              className={styles.customInput}
            />
            <Icons.ContactStrokeThree className={styles.emailStroke} />
          </div>
        </div>
        <div className={styles.message}>
          <label htmlFor="name" className={styles.labelText}>
            Ваше сообщение
          </label>
          <div className={styles.textMessage}>
            <textarea
              name="message"
              placeholder="Текст"
              className={styles.customText}
            ></textarea>
            <Icons.ContactStrokeFourth className={styles.messageStroke} />
          </div>
        </div>
        <div className={styles.contactSend}>
          <Checkbox />
          <Send name={"send"} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
