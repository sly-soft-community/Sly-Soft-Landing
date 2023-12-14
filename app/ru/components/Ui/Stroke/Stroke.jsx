import React from "react";
import styles from "./Stroke.module.scss";

const Stroke = ({ children, className }) => {
  return (
    <div>
      <div className={`${styles.wrapper} ${className}`}>
        <div className={styles.item}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Stroke;
