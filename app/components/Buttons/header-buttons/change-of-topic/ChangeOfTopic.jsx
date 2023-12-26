import React from "react";
import styles from "@/components/Buttons/header-buttons/change-of-topic/ChangeOfTopic.module.scss";
import { useTheme } from "@/hooks/useTheme";
import Icons from "@/media/img";
import { Sun, Moon, En } from "@/media/img/index";
// import Moon from "@/media/img";

const ChangeOfTopic = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={styles.wrapperImg}>
      <button className={styles.button} onClick={handleThemeChange}>
        <div className={styles.sun}>
          {theme === "light" ? <Moon /> : <Sun />}
        </div>
      </button>
    </div>
  );
};

export default ChangeOfTopic;
