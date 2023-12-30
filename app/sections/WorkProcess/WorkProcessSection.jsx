"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./WorkProcessSection.module.scss";
import "../../globals.scss";
import { Design, Planning, Script, Support, Testing } from "@/media/img";
import { useTranslations } from "next-intl";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const WorkProcessSection = () => {
  // const [workProcessItems, setWorkProcessItems] = useState([]);
  const [hoverItem, setHoverItem] = useState(null);

  const t = useTranslations("WorkProcess");

  const wrapperRef = useRef(null);
  const elementRefs = useRef([]);

  const workProcessItems = useMemo(
    () => [
      {
        id: 1,
        icon: Planning,
        title: t("planning.title"),
        styles: {
          width: 300,
        },
        subTitle: [
          {
            title: t("planning.subTitle.title"),
            styles: {
              display: "inline-flex",
              padding: "4px 43px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) 0%, rgba(237, 129, 39, 0.80) 1360%)",
            },
          },
          {
            title: t("planning.subTitle.subtitle"),
            styles: {
              display: "flex",
              padding: "4px 8px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -180%, rgba(237, 129, 39, 0.80) 1180%)",
            },
          },
        ],
      },
      {
        id: 2,
        icon: Design,
        title: t("design.title"),
        styles: {
          width: 573,
          display: "flex",
          flexDirection: "column",
          left: "17%",
          top: "29%",
        },
        subTitle: [
          {
            title: t("design.subTitle.title"),
            styles: {
              display: "flex",
              width: 370,
              padding: "4px 55px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -360%, rgba(237, 129, 39, 0.80) 1000%)",
            },
          },
          {
            title: t("design.subTitle.subtitle"),
            styles: {
              display: "flex",
              width: 470,
              padding: "4px 82px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -540%, rgba(237, 129, 39, 0.80) 820%)",
              alignSelf: "flex-end",
            },
          },
        ],
      },
      {
        id: 3,
        icon: Script,
        title: t("development.title"),
        styles: {
          width: 870,
          display: "flex",
          flexDirection: "column",
          right: "16%",
          bottom: "23%",
        },
        subTitle: [
          {
            title: t("development.subTitle.title"),
            styles: {
              display: "inline-flex",
              width: 670,
              padding: "4px 289px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -720%, rgba(237, 129, 39, 0.80) 640%)",
              alignSelf: "flex-end",
            },
          },
          {
            title: t("development.subTitle.subtitle"),
            styles: {
              display: "flex",
              padding: "4px 368px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -898.75%, rgba(237, 129, 39, 0.80) 460%)",
            },
          },
        ],
      },
      {
        id: 4,
        icon: Testing,
        title: t("testing.title"),
        styles: {
          width: 870,
          right: "16%",
          bottom: "11%",
        },
        subTitle: [
          {
            title: t("testing.subTitle.title"),
            styles: {
              display: "flex",
              padding: "4px 354px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -1080%, rgba(237, 129, 39, 0.80) 280%)",
            },
          },
        ],
      },
      {
        id: 5,
        icon: Support,
        title: t("launch-support.title"),
        styles: {
          width: 370,
          right: "0%",
          bottom: "0%",
        },
        subTitle: [
          {
            title: t("launch-support.subTitle.title"),
            styles: {
              display: "flex",
              padding: "4px 76px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -1260%, rgba(237, 129, 39, 0.80) 100%)",
            },
          },
        ],
      },
    ],
    [t]
  );

  useEffect(() => {
    if (workProcessItems && workProcessItems.length > 0) {
      elementRefs.current = workProcessItems.map(() => React.createRef());
    }
  }, [workProcessItems]);

  const handleMouseEnter = (index) => {
    gsap.to(elementRefs.current[index].current, {
      duration: 0.3,
      ease: "power1.inOut",
    });
    setHoverItem(index);

    if (wrapperRef.current && elementRefs.current[index].current) {
      wrapperRef.current.scrollTo({
        left: elementRefs.current[index].current.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(elementRefs.current[0].current, {
      duration: 0.3,
      ease: "power1.inOut",
    });
    setHoverItem(null);

    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const animateElements = async () => {
      for (let index = 0; index < workProcessItems.length; index++) {
        const item = workProcessItems[index];
        const element = document.getElementById(item.id);

        await gsap.to(element, {
          duration: 0.2,
          ease: "power1.inOut",
          onStart: () => setHoverItem(index),
        });

        setHoverItem(null);
      }
    };

    animateElements();

    return () => {
      workProcessItems.forEach((item) => {
        const element = document.getElementById(item.id);
        gsap.killTweensOf(element);
      });
    };
  }, [workProcessItems]);

  return (
    <div className={styles.workProcess} id={"workflow"}>
      <div className="container">
        <h1 className={styles.workProcessText}>{t("work-flow")}</h1>
        <div className={styles.wrapperItems}>
          <div className={styles.workProcessItmes}>
            {workProcessItems.map((item, index) => (
              <div
                key={item.id}
                id={item.id}
                className={`${styles.items} ${
                  hoverItem !== index && hoverItem !== null
                    ? styles.hovered
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <item.icon className={styles.icon} />
                <h4 className={styles.title}>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.blur}>
          <div
            ref={wrapperRef}
            style={{
              maxWidth: "1205px",
              overflowX: "auto",
              overflow: "hidden",
            }}
          >
            <div className={styles.wrapper}>
              {workProcessItems.map((item, index) => (
                <ul
                  ref={elementRefs.current[index]}
                  key={item.id}
                  className={`${styles.list} ${
                    hoverItem !== index && hoverItem !== null
                      ? styles.hovered
                      : ""
                  }`}
                  style={item.styles}
                >
                  {item.subTitle.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
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
    </div>
  );
};

export default WorkProcessSection;
