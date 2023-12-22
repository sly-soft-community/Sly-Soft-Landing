"use client";

import styles from "./Contact.module.scss";
import Checkbox from "@/sections/ContactUs/components/CheckboxForm/Checkbox";
import Send from "@/components/Ui/Send/Send";
import SendSecond from "@/components/Ui/SendSecond/SendSecond";
import { useMediaQuery } from "react-responsive";
import {
  ContactStroke,
  ContactStrokeFourth,
  ContactStrokeSecond,
  ContactStrokeSmall,
  ContactStrokeThree,
} from "@/media/img";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("ContactForm");

  const isMobileScreen = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <div>
      <form className={styles.contactForm}>
        <div className={styles.filling}>
          <div className={styles.firstName}>
            <label htmlFor="name" className={styles.labelText}>
              {t("name")}
            </label>
            <div className={styles.inputName}>
              <input
                type="text"
                placeholder={t("placeholder-name")}
                className={styles.customInput}
              />
              <ContactStroke className={styles.nameStroke} />
            </div>
          </div>
          <div className={styles.number}>
            <label htmlFor="name" className={styles.labelText}>
            {t("number")}
            </label>
            <div className={styles.inputNumber}>
              <input
                type="text"
                placeholder={t("placeholder-number")}
                className={styles.customInput}
              />
              <ContactStrokeSecond className={styles.numberStroke} />
            </div>
          </div>
        </div>
        <div className={styles.email}>
          <label htmlFor="name" className={styles.labelText}>
          {t("email")}
          </label>
          <div className={styles.inputEmail}>
            <input
              type="email"
              placeholder="name@mail.com"
              className={styles.customInput}
            />
            {isMobileScreen ? (
              <ContactStrokeSecond className={styles.emailStroke} />
            ) : (
              <ContactStrokeThree className={styles.emailStroke} />
            )}
          </div>
        </div>
        <div className={styles.message}>
          <label htmlFor="name" className={styles.labelText}>
          {t("message")}
          </label>
          <div className={styles.textMessage}>
            <textarea
              name="message"
              placeholder={t("placeholder-message")}
              className={styles.customText}
            ></textarea>
            {isMobileScreen ? (
              <ContactStrokeSmall className={styles.emailStroke} />
            ) : (
              <ContactStrokeFourth className={styles.emailStroke} />
            )}
          </div>
        </div>
        <div className={styles.contactSend}>
          <Checkbox />
          {isMobileScreen ? (
            <SendSecond name={t("Send")} />
          ) : (
            <Send name={t("Send")} />
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
