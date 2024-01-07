"use client";

import styles from "./Contact.module.scss";
import Checkbox from "@/sections/ContactUs/components/CheckboxForm/Checkbox";
import Send from "@/components/Ui/Send/Send";
import SendSecond from "@/components/Ui/SendSecond/SendSecond";
import { useMediaQuery } from "react-responsive";
import {
  ContactStroke,
  ContactStrokeAverage,
  ContactStrokeExtraSmall,
  ContactStrokeFourth,
  ContactStrokeFourthExtraSmall,
  ContactStrokeFourthSmall,
  ContactStrokeMobile,
  ContactStrokeSecond,
  ContactStrokeSmall,
  ContactStrokeThree,
} from "@/media/img";
import { useTranslations } from "next-intl";
import { useMask } from "@react-input/mask";

const ContactForm = () => {
  const t = useTranslations("ContactForm");
  const inputRef = useMask({
    mask: "+996 ___ ___ ___",
    replacement: { _: /\d/ },
  });
  const emailInputRef = useMask({
    mask: "____@__.__",
    replacement: { _: /[a-zA-Z0-9]/ },
  });

  const isMobileScreen = useMediaQuery({
    query: "(max-width: 1025px)",
  });
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 625px)",
  });
  const isExtraSmallScreen = useMediaQuery({
    query: "(max-width: 425px)",
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
              {isExtraSmallScreen ? (
                <ContactStrokeExtraSmall className={styles.nameStroke} />
              ) : isSmallScreen ? (
                <ContactStrokeAverage className={styles.nameStroke} />
              ) : isMobileScreen ? (
                <ContactStrokeMobile className={styles.nameStroke} />
              ) : (
                <ContactStroke className={styles.nameStroke} />
              )}
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
                ref={inputRef}
                // onChange={handleInputChange}
                className={styles.customInput}
              />
              {isExtraSmallScreen ? (
                <ContactStrokeExtraSmall className={styles.numberStroke} />
              ) : isSmallScreen ? (
                <ContactStrokeAverage className={styles.numberStroke} />
              ) : isMobileScreen ? (
                <ContactStrokeMobile className={styles.numberStroke} />
              ) : (
                <ContactStroke className={styles.numberStroke} />
              )}
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
              ref={emailInputRef}
              className={styles.customInput}
            />
            {isExtraSmallScreen ? (
              <ContactStrokeExtraSmall className={styles.emailStroke} />
            ) : isSmallScreen ? (
              <ContactStrokeAverage className={styles.emailStroke} />
            ) : isMobileScreen ? (
              <ContactStrokeMobile className={styles.emailStroke} />
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
            {isExtraSmallScreen ? (
              <ContactStrokeFourthExtraSmall className={styles.emailStroke} />
            ) : isSmallScreen ? (
              <ContactStrokeFourthSmall className={styles.emailStroke} />
            ) : isMobileScreen ? (
              <ContactStrokeSmall className={styles.emailStroke} />
            ) : (
              <ContactStrokeFourth className={styles.emailStroke} />
            )}
          </div>
        </div>
        <div className={styles.contactSend}>
          <Checkbox />
          <div>
            {isMobileScreen ? (
              <SendSecond name={t("Send")} />
            ) : (
              <Send name={t("Send")} />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
