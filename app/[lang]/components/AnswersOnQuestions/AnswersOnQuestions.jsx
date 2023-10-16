import React from "react";
import styles from "./AnswersOnQuestions.module.scss";
import { answersItems } from "./answersItem";

const AnswersOnQuestions = () => {
  return (
    <div className={styles.answers}>
      <h3 className={styles.answersText}>Ответы на ваши вопросы</h3>
      <div className={styles.answersSection}>
        {answersItems.map((item) => (
          <div className={styles.answersBlock} key={item.id}>
            <h6 className={styles.title}>{item.title}</h6>
            <p className={styles.subTitle}>{item.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswersOnQuestions;
