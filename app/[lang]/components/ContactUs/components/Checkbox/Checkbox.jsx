import React from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <input type="checkbox" id="check" className={styles.checkbox} />
        <label htmlFor="check">
          Даю согласие на обработку моих персональных данных, согласно
          <span className={styles.underline}>политике конфиденциальности</span>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
