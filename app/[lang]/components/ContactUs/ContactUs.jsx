import React from "react";
import styles from "./ContactUs.module.scss";
import Icons from "@/media/img";
import Stroke from "../Ui/Stroke/Stroke";

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
        <div className={styles.contactForm}>
          <div>
            <Icons.Blur />
          </div>
          <form className={styles.contactForm}>
            <div>
              <label htmlFor="name">Ваше имя</label>
              <div>
                <Stroke className={styles.customStroke}>
                  <input type="text" className={styles.customInput}/>
                </Stroke>
                {/* <input type="text" placeholder="name" /> */}
                {/* <Icons.ContactStroke className={styles.ContactStroke}/> */}
              </div>
            </div>
            {/* <div>
              <label htmlFor="name">BUDGET</label>
              <input type="text" placeholder="$500" />
              <Icons.ContactStrokeSecond className={styles.budget}/>
            </div>
            <div>
              <label htmlFor="name">ваша почта</label>
              <input type="email" placeholder="name@mail.com" />
              <Icons.ContactStrokeThree className={styles.budget}/>
            </div>
            <div>
              <label htmlFor="name">YOUR MESSAGE</label>
              <textarea name="message" placeholder="Message"></textarea>
            </div>
            <div>
              <input type="checkbox" name="sendCopy" />
              <label htmlFor="sendCopy">Send me a copy</label>
              <button>Send</button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
