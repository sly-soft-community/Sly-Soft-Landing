"use client";
import Icons from "@/media/img";
import styles from "./ContactForm.module.scss";
import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import ImageGetStarted from "@/components/Ui/ImageGetStarted/ImageGetStarted";

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
          <div className={styles.budget}>
            <label htmlFor="name" className={styles.labelText}>
              BUDGET
            </label>
            <div className={styles.inputBudget}>
              <div className={styles.arrowBudget}>
                <input
                  type="text"
                  placeholder="$500"
                  className={styles.customInput}
                />
                <Icons.Arrow className={styles.arrow} />
              </div>
              <Icons.ContactStrokeSecond className={styles.budgetStroke} />
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
            your message
          </label>
          <div className={styles.textMessage}>
            <textarea
              name="message"
              placeholder="Message"
              className={styles.customText}
            ></textarea>
            <Icons.ContactStrokeFourth className={styles.messageStroke} />
          </div>
        </div>
        <div className={styles.contactSend}>
          <Checkbox />
          <ImageGetStarted name={"send"}/>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
