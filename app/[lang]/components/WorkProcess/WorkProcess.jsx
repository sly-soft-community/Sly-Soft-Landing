import React from "react";
import styles from "./WorkProcess.module.scss";
import "../../globals.scss";
import { workProcessItems } from "./workProcessItems";

const WorkProcess = () => {
  return (
    <div className={styles.workProcess}>
      <div className="container">
        <h1 className={styles.workProcessText}>Процесс работы</h1>
        <div className={styles.workProcessItmes}>
          {workProcessItems.map((item) => (
            <div key={item.id} className={styles.items}>
              <item.icon className={styles.icon} />
              <h4 className={styles.title}>{item.title}</h4>
            </div>
          ))}
        </div>
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            <li className={styles.subTitle}>Анализ</li>
            <li className={styles.subTitleSecond}>Сост. требований</li>
          </ul>
          <ul className={styles.listSecond}>
            <li className={styles.subTitle}>Разработка брендинга</li>
            <li className={styles.subTitleSecond}>Разработка дизайна сайта</li>
          </ul>
        </div>
      </div>

      {/* <div className={styles.subItems}>
        {workProcessItems.map((item) => (
          <ul key={item.id} className={styles.list}>
            <div>
              {item.subTitle.map((subTitle, index) => (
                <li key={index} className={styles.subTitle}>
                  {subTitle}
                </li>
              ))}
            </div>
          </ul>
        ))}
      </div> */}
    </div>
  );
};

export default WorkProcess;
