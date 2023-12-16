import { useState, useEffect } from "react";
import styles from "./Slogan.module.scss";

const TYPING_SPEED = 100;
const WAIT_DURATION = 2500;

const Slogan = ({ taglineList }) => {
  const [{ sloganText, currentSloganIdx, currentTaglineIdx }, setAnimation] =
    useState({
      sloganText: "",
      currentSloganIdx: 0,
      currentTaglineIdx: 0,
    });

  useEffect(() => {
    const typewriterEffect = () => {
      if (currentSloganIdx - 3 === taglineList[currentTaglineIdx].length) {
        setTimeout(() => {
          setAnimation({
            sloganText: "",
            currentTaglineIdx:
              currentTaglineIdx === taglineList.length - 1
                ? 0
                : currentTaglineIdx + 1,
            currentSloganIdx: 0,
          });
        }, WAIT_DURATION);
      } else {
        setAnimation({
          currentSloganIdx: currentSloganIdx + 1,
          sloganText: taglineList[currentTaglineIdx].substring(
            0,
            currentSloganIdx
          ),
          currentTaglineIdx: currentTaglineIdx,
        });
      }
    };

    const timeout = setTimeout(typewriterEffect, TYPING_SPEED);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSloganIdx]);

  return (
    <p className={styles.slogan}>
      {sloganText}
    </p>
  );
};

export default Slogan;
