"use client";
import Icons from "@/media/img";
import styles from "./ContactForm.module.scss";
import Checkbox from "../Checkbox/Checkbox";
import Send from "@/components/Ui/Send/Send";
import useMediaScreen from "@/hooks/useMediaScreen";
import SendSecond from "@/components/Ui/SendSecond/SendSecond";

const ContactForm = () => {
  const isMobileScreen = useMediaScreen(480);
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
            {isMobileScreen ? (
              <Icons.ContactStrokeSecond className={styles.emailStroke} />
            ) : (
              <Icons.ContactStrokeThree className={styles.emailStroke} />
            )}
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
            {isMobileScreen ? (
              <Icons.ContactStrokeSmall className={styles.emailStroke} />
            ) : (
              <Icons.ContactStrokeFourth className={styles.emailStroke} />
            )}
          </div>
        </div>
        <div className={styles.contactSend}>
          <Checkbox />
          {isMobileScreen ? (
            <SendSecond name={"send"} />
          ) : (
            <Send name={"send"} />
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
