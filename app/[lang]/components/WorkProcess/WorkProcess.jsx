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
            {workProcessItems.map((item) => (
              <ul key={item.id} className={styles.list} style={{
                width: item.width,
              }}>
                {item.subTitle.map((subItem, index) => (
                  <li
                    key={index}
                    style={{
                      display: subItem.styles.display,
                      width: subItem.styles.width,
                      padding: subItem.styles.padding,
                    }}
                    className={styles.subTitle}
                  >
                    {subItem.title}
                  </li>
                ))}
              </ul>
            ))}
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
