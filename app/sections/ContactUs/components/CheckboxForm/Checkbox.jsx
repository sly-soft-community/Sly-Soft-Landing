import React from "react";
import styles from "./Checkbox.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Checkbox = () => {
  const t = useTranslations("Checkbox");
  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <input type="checkbox" id="check" className={styles.checkbox} />
        <label htmlFor="check">
          {t("label-text")}{' '}
          <Link href="#" className={styles.underline}>{t("link-text")}</Link >
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
