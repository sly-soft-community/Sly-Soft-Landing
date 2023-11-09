"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./WorkProcess.module.scss";
import "../../globals.scss";
import { workProcessItems } from "./workProcessItems";

const WorkProcess = () => {
  const [hoverItem, SetHoverItem] = useState(null);
  const wrapperRef = useRef(null)
  const [elementRefs,SetElementRefs] = useState([])
  // const elementRef = workProcessItems.map(() => useRef(null))
  console.log(elementRefs);

useEffect(() => {
  SetElementRefs(workProcessItems.map(element => ({id:element.id, ref:React.createRef()})))
},[])

const handleWheel = (e) => {
  e.preventDefault()
}  
const scrollToElement = (id) => {
  const elementRef = elementRefs.find((ref) => ref.id === id);
  if (elementRef && elementRef.current) {
    wrapperRef.current.scrollTo({ left: elementRef.offsetLeft });
    console.log("Adawdadaw");
  }
};
  return (
    <div className={styles.workProcess}>
      <div className="container">
        <h1 className={styles.workProcessText}>Процесс работы</h1>
        <div className={styles.workProcessItmes}>
          {workProcessItems.map((item, index) => (
            <div
              onMouseMove={() => SetHoverItem(index)}
              onMouseLeave={() => SetHoverItem(null)}
              onClick={(e) => scrollToElement(item.id)}
              key={item.id}
              className={`${styles.items} ${
                hoverItem !== index && hoverItem !== null ? styles.hovered : ""
              }`}
            >
              <item.icon className={styles.icon} />
              <h4 className={styles.title}>{item.title}</h4>
            </div>
          ))}
        </div>
        <div ref={wrapperRef} style={{maxWidth:"1205px", overflowX:"auto"}}>
          <div className={styles.wrapper}>
            {workProcessItems.map((item, index) => (
              <ul ref={elementRefs.find((element) => element.id === item.id)?.ref}
                key={item.id}
                className={`${styles.list} ${
                  hoverItem !== index && hoverItem !== null
                    ? styles.hovered
                    : ""
                }`}
                style={item.styles}
              >
                {item.subTitle.map((subItem, index) => (
                  <li
                    key={index}
                    style={{
                      display: subItem.styles.display,
                      width: subItem.styles.width,
                      padding: subItem.styles.padding,
                      background: subItem.styles.background,
                      alignSelf: subItem.styles.alignSelf,
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
      </div>
    </div>
  );
};

export default WorkProcess;
