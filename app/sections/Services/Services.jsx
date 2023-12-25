"use client";

import React, { useMemo } from "react";
import styles from "./Services.module.scss";
import { useMediaQuery } from "react-responsive";
import { servicesItems } from "./servicesItem";
import ExploreButton from "@/components/Ui/ui-buttons/explore-button/ExploreButton";
import { useTranslations } from "next-intl";
import { ServicesBg, ServicesBgThree, ServicesBgFourth } from "@/media/img";

const Services = () => {
  const t = useTranslations("Services");

  const items = useMemo(
    () => [
      {
        id: 1,
        fillIcon: ServicesBg,
        mobileFillIcon: ServicesBgThree,
        ratated: "",
        title: t("website.title"),
        subtitle: t("website.subtitle"),
        button: <ExploreButton name={t("explore")} />,
      },
      {
        id: 2,
        fillIcon: ServicesBg,
        mobileFillIcon: ServicesBgThree,
        ratated: "desctop",
        title: t("complex.title"),
        subtitle: t("complex.subtitle"),
        button: <ExploreButton name={t("explore")} />,
      },
      {
        id: 3,
        fillIcon: ServicesBgThree,
        mobileFillIcon: ServicesBgThree,
        ratated: "",
        title: t("web.title"),
        subtitle: t("web.subtitle"),
        button: <ExploreButton name={t("explore")} />,
      },
      {
        id: 4,
        fillIcon: ServicesBgFourth,
        mobileFillIcon: ServicesBgThree,
        ratated: "",
        title: t("branding.title"),
        subtitle: t("branding.subtitle"),
        button: <ExploreButton name={t("explore")} />,
      },
      {
        id: 5,
        fillIcon: ServicesBgThree,
        mobileFillIcon: ServicesBgThree,
        ratated: "",
        title: t("mobile.title"),
        subtitle: t("mobile.subtitle"),
        button: <ExploreButton name={t("explore")} />,
      },
      {
        id: 6,
        fillIcon: ServicesBgFourth,
        mobileFillIcon: ServicesBgThree,
        ratated: "",
        title: t("quality.title"),
        subtitle: t("quality.subtitle"),
        button: <ExploreButton name={t("explore")} />,
      },
    ],
    [t]
  );
  const smallScreen = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  return (
    <div className={styles.services} id={"services"}>
      <div className={styles.servicesTitle}>
        <h3 className={styles.servicesText}>{t("services")}</h3>
      </div>
      <div className={styles.containerImg}>
        <div className={styles.customBgImg}>
          <div className={styles.backdrop}></div>
          <div className={styles.colon}>
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.colonBlock} ${
                  index === 3 || index === 5 ? styles.margined : ""
                }`}
              >
                {smallScreen ? (
                  <item.mobileFillIcon
                    className={`${styles.colorFill} ${
                      item.ratated === "mobile" ? styles.ratated : ""
                    }`}
                  />
                ) : (
                  <item.fillIcon
                    className={`${styles.colorFill} ${
                      item.ratated === "desctop" ? styles.ratated : ""
                    }`}
                  />
                )}
                <div className={styles.content}>
                  <h5 className={styles.title}>{item.title}</h5>
                  <p className={styles.titleSub}>{item.subtitle}</p>
                  <div>{item.button}</div>
                  {/* <ExploreButton name="Explore" /> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
