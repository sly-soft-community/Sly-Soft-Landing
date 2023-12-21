"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./OurTechnilogySection.module.scss";
import SlyLogo from "@/media/img/ourTechnilogy/Slylogo.png";
// import SynergyImg from "@/media/img/ourWorks/Synergy.png"
import { Stars } from "./components/Stars";
import CollapseWrapper from "./components/CollapseWrapper/CollapseWrapper";
import ExportedImage from "next-image-export-optimizer";
import { ConfluenceIcon, GitIcon, JiraIcon, NotionIcon, } from "@/media/img";
// import TechnilogyItem from '../../sections/OurTechnilogy/components/TechnilogyItem/TechnilogyItem';
// import Line from '../../sections/OurTechnilogy/components/Line/Line';

const OurTechnilogySection = () => {
  const collapseRef1 = useRef();
  const [state, setState] = useState([
    {
      id: 0,
      title: "Управление проектом",
      isOpen: false,
      data: [
        { title: "Confluence", icon: () => <ConfluenceIcon /> },
        { title: "Git", icon: () => <GitIcon /> },
        { title: "Jira", icon: () => <JiraIcon /> },
        { title: "Discord", icon: () => <ConfluenceIcon /> },
        { title: "Notion", icon: () => <NotionIcon /> },
      ],
    },
    {
      id: 1,
      title: "Разработка интерфейса",
      isOpen: false,
      data: [
        { title: "Angular", icon: () => <ConfluenceIcon /> },
        { title: "Vue", icon: () => <GitIcon /> },
        { title: "React", icon: () => <JiraIcon /> },
        { title: "Next.js", icon: () => <ConfluenceIcon /> },
        { title: "JavaScript", icon: () => <NotionIcon /> },
        { title: "TypeScript", icon: () => <NotionIcon /> },
        { title: false, icon: () => <NotionIcon /> },
      ],
    },
    {
      id: 2,
      title: "Разработка мобильных приложений",
      isOpen: false,
      data: [
        { title: "React Native", icon: () => <ConfluenceIcon /> },
        { title: "Android", icon: () => <GitIcon /> },
        { title: "Flutter", icon: () => <JiraIcon /> },
        { title: false, icon: () => <NotionIcon /> },
      ],
    },
    {
      id: 3,
      title: "Дизайн",
      isOpen: false,
      ref: collapseRef1,
      data: [
        { title: "Figma", icon: () => <ConfluenceIcon /> },
        { title: "Adobe", icon: () => <GitIcon /> },
        { title: "Notion", icon: () => <JiraIcon /> },
      ],
    },
    {
      id: 4,
      title: "Разработка серверной части",
      isOpen: false,
      data: [
        { title: "Symphony", icon: () => <ConfluenceIcon /> },
        { title: "PHP", icon: () => <GitIcon /> },
        { title: "GitHub", icon: () => <JiraIcon /> },
        { title: "Node.js", icon: () => <ConfluenceIcon /> },
        { title: "JavaScript", icon: () => <NotionIcon /> },
        { title: "Java", icon: () => <NotionIcon /> },
        { title: "GoLang", icon: () => <NotionIcon /> },
        { title: "Phyton", icon: () => <NotionIcon /> },
        { title: "Laravel", icon: () => <NotionIcon /> },
        { title: "Next.js", icon: () => <NotionIcon /> },
      ],
    },
    {
      id: 5,
      title: "Базы даннных",
      isOpen: false,
      data: [
        { title: "PostgreSQL", icon: () => <ConfluenceIcon /> },
        { title: "MongoDB", icon: () => <GitIcon /> },
        { title: "MySQL", icon: () => <JiraIcon /> },
        { title: "SQL", icon: () => <ConfluenceIcon /> },
      ],
    },
    {
      id: 6,
      title: "DevOps",
      isOpen: false,
      data: [
        { title: "GoLang", icon: () => <ConfluenceIcon /> },
        { title: "Docker", icon: () => <GitIcon /> },
      ],
    },
  ]);

  const openItem = (id) => {
    let newState = [...state];
    state[id].isOpen = true;
    setState(newState);
  };

  const openItems = (idArray = []) => {
    let newState = [...state];
    idArray.forEach((id) => (state[id].isOpen = true));
    setState(newState);
  };

  const closeItem = (id) => {
    let newState = [...state];
    state[id].isOpen = false;
    setState(newState);
  };

  const closeItems = (idArray = []) => {
    let newState = [...state];
    idArray.forEach((id) => (state[id].isOpen = false));
    setState(newState);
  };
  // useEffect(() => {
  //     console.log('collapseRef1', collapseRef1)
  // }, [collapseRef1])

  return (
    <div className={styles.block}>
      <div className={styles.desctop}>
        <Stars starsCount={240} FALLING_STARS_COUNT={5}>
          <div className={styles.backgroundWrapper}>
            <div className="container">
              <h2 className={styles.title}>Стек технологий</h2>
              <div className={styles.contantBox}>
                <div className={styles.col}>
                  {[...state].splice(0, 3).map((item, hkey) => (
                    <div
                      key={`hkey${hkey}`}
                      onMouseOver={() => openItem(item.id)}
                      onMouseLeave={() => closeItem(item.id)}
                      className={
                        item.isOpen || state[item.id + 1].isOpen
                          ? `${styles.row} ${styles.open}`
                          : styles.row
                      }
                    >
                      <CollapseWrapper isOpen={item.isOpen} title={item.title}>
                        <div className={styles.itemBox}>
                          {item.data.map((item, key) =>
                            item.title ? (
                              <div key={`th1${key}`} className={styles.item}>
                                {item.icon()}
                                <span> {item.title}</span>
                              </div>
                            ) : (
                              <div
                                key={`th1${key}`}
                                className={styles.itemEmpty}
                              >
                                {item.icon()}
                              </div>
                            )
                          )}
                        </div>
                      </CollapseWrapper>
                    </div>
                  ))}
                </div>

                <div className={styles.col}>
                  <CollapseWrapper title="Тестирование">
                    <div className=""></div>
                  </CollapseWrapper>

                  <div className={styles.imgBox}>
                    {/* <Line
                                            // style ={{}} 
                                            className={styles.line} /> */}
                    <ExportedImage
                      src={SlyLogo}
                      className={styles.img}
                      onMouseOver={() => openItems([0, 1, 2, 3, 4, 5, 6])}
                      onMouseLeave={() => closeItems([0, 1, 2, 3, 4, 5, 6])}
                      alt="SlySoft"
                    />
                  </div>

                  {[...state].splice(6, 1).map((item, hkey) => (
                    <div
                      key={`hkey${hkey}`}
                      onMouseOver={() => openItem(item.id)}
                      onMouseLeave={() => closeItem(item.id)}
                      className={
                        item.isOpen
                          ? `${styles.row} ${styles.open}`
                          : styles.row
                      }
                    >
                      <CollapseWrapper isOpen={item.isOpen} title={item.title}>
                        <div className={styles.itemBox}>
                          {item.data.map((item, key) => (
                            <div key={`th1${key}`} className={styles.item}>
                              {item.icon()}
                              <span> {item.title}</span>
                            </div>
                          ))}
                        </div>
                      </CollapseWrapper>
                    </div>
                  ))}
                </div>
                <div className={styles.col}>
                  {[...state].splice(3, 3).map((item, hkey) => (
                    <div
                      key={`hkey${hkey}`}
                      ref={item.ref ? item.ref : null}
                      onMouseOver={() => openItem(item.id)}
                      onMouseLeave={() => closeItem(item.id)}
                      className={
                        item.isOpen || state[item.id + 1].isOpen
                          ? `${styles.row} ${styles.open}`
                          : styles.row
                      }
                    >
                      <CollapseWrapper isOpen={item.isOpen} title={item.title}>
                        <div className={styles.itemBox}>
                          {item.data.map((item, key) => (
                            <div key={`th1${key}`} className={styles.item}>
                              {item.icon()}
                              <span> {item.title}</span>
                            </div>
                          ))}
                        </div>
                      </CollapseWrapper>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Stars>
      </div>
      <div className={styles.mobile}>
        <h2 className={styles.title}>Стек технологий</h2>
        {state.map((item, key) => (
          <div
            key={`mkey${key}`}
            onClick={() =>
              item.isOpen ? closeItem(item.id) : openItem(item.id)
            }
            className={styles.mobileItem}
          >
            <CollapseWrapper isOpen={item.isOpen} title={item.title}>
              <div className={styles.itemBox}>
                {item.data.map((item, key) =>
                  item.title ? (
                    <div key={`th1${key}`} className={styles.item}>
                      {item.icon()}
                      <span> {item.title}</span>
                    </div>
                  ) : (
                    <div key={`th1${key}`} className={styles.itemEmpty}>
                      {item.icon()}
                    </div>
                  )
                )}
              </div>
            </CollapseWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTechnilogySection;
