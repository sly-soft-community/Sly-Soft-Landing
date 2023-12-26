import React from "react";
import styles from "@/components/Buttons/header-buttons/contact-us/Contact.module.scss";
import { Get } from "@/media/img";
import { Link } from "react-scroll";

const Contact = ({ name }) => {
  // const handleClick = () => {
  //   alert("Кнопка нажата");
  // };
  return (
    <Link to={"contacts"} spy={true} smooth={true} offset={-70} duration={500}>
      <button type="button" className={styles.button}>
        <div className={styles.iconContainer}>
          <Get className={styles.bt} />
          <span className={styles.text}>{name}</span>
        </div>
      </button>
    </Link>
  );
};

export default Contact;
