import React from "react";
import styles from "./Checkbox.module.scss";
import ImageGetStarted from "@/components/Ui/ImageGetStarted/ImageGetStarted";

const Checkbox = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <input type="checkbox" id="check" className={styles.checkbox} />
        <label htmlFor="check">Send me a copy</label>
      </div>
      <div>
        <ImageGetStarted name={"send"}/>
      </div>
    </div>
  );
};

export default Checkbox;
