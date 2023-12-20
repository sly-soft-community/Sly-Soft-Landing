import React from 'react'
import styles from '@/components/Buttons/header-buttons/contact-us/Contact.module.scss'
import { Get } from '@/media/img';

const Contact = ({ name }) => {
    const handleClick = () => {
      alert("Кнопка нажата");
    };
    return (
      <button type="button" className={styles.button} onClick={handleClick}>
        <div className={styles.iconContainer}>
          <Get className={styles.bt} />
          <span className={styles.text}>{name}</span>
        </div>
      </button>
    );
  };

export default Contact