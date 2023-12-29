"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./OurTechnilogySection.module.scss";
import SlyLogo from "@/media/img/ourTechnilogy/Slylogo.png";
// import SynergyImg from "@/media/img/ourWorks/Synergy.png"
import { Stars } from "./components/Stars";
import CollapseWrapper from "./components/CollapseWrapper/CollapseWrapper";
import ExportedImage from "next-image-export-optimizer";
import { Adobe, Android, Angular, ConfluenceIcon, Discord, Docker, Figma, Flutter, GitIcon, Github, Golang, Java, Javascript, JiraIcon, Laravel, Mongodb, MySql, NextJs, NodeJs, NotionIcon, Php, PostgreSQL, Pyton, ReactIcon, Sql, Symphony, TypeScript, Vue, } from "@/media/img";
import { useTranslations } from "next-intl";
// import TechnilogyItem from '../../sections/OurTechnilogy/components/TechnilogyItem/TechnilogyItem';
// import Line from '../../sections/OurTechnilogy/components/Line/Line';

const OurTechnilogySection = () => {
  const t = useTranslations("OurTechnilogy");
  const collapseRef1 = useRef();
  const [state, setState] = useState([  
    {
      id: 0,
      title: t("stack.management"),
      isOpen: false,
      data: [
        { title: "Confluence", icon: () => <ConfluenceIcon /> },
        { title: "Git", icon: () => <GitIcon /> },
        { title: "Jira", icon: () => <JiraIcon /> },
        { title: "Discord", icon: () => <Discord /> },
        { title: "Notion", icon: () => <NotionIcon /> },
      ],
    },
    {
      id: 1,
      title: t("stack.development"),
      isOpen: false,
      data: [
        { title: "Angular", icon: () => <Angular /> },
        { title: "Vue", icon: () => <Vue /> },
        { title: "React", icon: () => <ReactIcon /> },
        { title: "Next.js", icon: () => <NextJs /> },
        { title: "JavaScript", icon: () => <Javascript /> },
        { title: "TypeScript", icon: () => <TypeScript /> },
        { title: false, icon: () => <NotionIcon /> },
      ],
    },
    {
      id: 2,
      title: t("stack.mobile"),
      isOpen: false,
      data: [
        { title: "React Native", icon: () => <ReactIcon /> },
        { title: "Android", icon: () => <Android /> },
        { title: "Flutter", icon: () => <Flutter /> },
        { title: false, icon: () => <NotionIcon /> },
      ],
    },
    {
      id: 3,
      title: t("stack.design"),
      isOpen: false,
      ref: collapseRef1,
      data: [
        { title: "Figma", icon: () => <Figma /> },
        { title: "Adobe", icon: () => <Adobe /> },
        { title: "Notion", icon: () => <NotionIcon /> },
      ],
    },
    {
      id: 4,
      title: t("stack.backend"),
      isOpen: false,
      data: [
        { title: "Symphony", icon: () => <Symphony /> },
        { title: "PHP", icon: () => <Php /> },
        { title: "GitHub", icon: () => <Github /> },
        { title: "Node.js", icon: () => <NodeJs /> },
        { title: "JavaScript", icon: () => <Javascript /> },
        { title: "Java", icon: () => <Java /> },
        { title: "GoLang", icon: () => <Golang /> },
        { title: "Phyton", icon: () => <Pyton /> },
        { title: "Laravel", icon: () => <Laravel /> },
        { title: "Next.js", icon: () => <NextJs /> },
      ],
    },
    {
      id: 5,
      title: t("stack.data-base"),
      isOpen: false,
      data: [
        { title: "PostgreSQL", icon: () => <PostgreSQL /> },
        { title: "MongoDB", icon: () => <Mongodb /> },
        { title: "MySQL", icon: () => <MySql /> },
        { title: "SQL", icon: () => <Sql /> },
      ],
    },
    {
      id: 6,
      title: t("stack.dev-ops"),
      isOpen: false,
      data: [
        { title: "GoLang", icon: () => <Golang /> },
        { title: "Docker", icon: () => <Docker /> },
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
              <h2 className={styles.title}>{t("title-text")}</h2>
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
                  <CollapseWrapper title={t("title-test")}>
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
