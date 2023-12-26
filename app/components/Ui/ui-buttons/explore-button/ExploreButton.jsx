import React from "react";
import styles from "./ExploreButton.module.scss";
import { Explore } from "@/media/img";

const ExploreButton = ({ name }) => {
  const handleClick = () => {
    alert("Кнопка нажата");
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      <div className={styles.iconContainer}>
        <Explore className={styles.bt} />
        <span className={styles.text}>{name}</span>
      </div>
    </button>
  );
};

export default ExploreButton;
