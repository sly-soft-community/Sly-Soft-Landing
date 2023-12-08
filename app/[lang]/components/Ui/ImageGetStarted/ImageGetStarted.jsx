// "use client";
import React from "react";
import styles from "./ImageGetStarted.module.scss";
import Icons from "@/media/img";

const ImageGetStarted = ({name}) => {
  const handleClick = () => {
    alert("Кнопка нажата");
  };
  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      <div className={styles.iconContainer}>
        <Icons.GetInTouch className={styles.bt}/>
        <span className={styles.text}>{name}</span>
      </div>
    </button>
  );
};

export default ImageGetStarted;
