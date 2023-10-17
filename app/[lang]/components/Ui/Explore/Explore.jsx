import Icons from "@/media/img";
import React from "react";
import styles from "./Explore.module.scss";

const Explore = ({ name }) => {
  const handleClick = () => {
    alert("Кнопка нажата");
  };

  return (
    <div>
      <button className={styles.button} onClick={handleClick}>
        <div className={styles.iconContainer}>
          <Icons.Explore className={styles.bt} />
          <span className={styles.text}>{name}</span>
        </div>
      </button>
    </div>
  );
};

export default Explore;
