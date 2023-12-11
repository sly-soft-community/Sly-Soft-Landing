import React from "react";
import styles from "./Checkbox.module.scss";
import Link from "next/link";

const Checkbox = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <input type="checkbox" id="check" className={styles.checkbox} />
        <label htmlFor="check">
          Даю согласие на обработку моих персональных данных, согласно{' '}
          <Link href="#" className={styles.underline}>политике конфиденциальности</Link >
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
