"use client";
import React from "react";
import styles from "./ImageGetStarted.module.scss";

const ImageGetStarted = ({name}) => {
  const handleClick = () => {
    alert("Кнопка нажата");
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      <div className={styles.iconContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="170"
          height="56"
          viewBox="0 0 170 56"
          fill="none"
        >
          <path
            d="M23.2426 2.17157C23.9928 1.42143 25.0102 1 26.0711 1H165C167.209 1 169 2.79086 169 5V29.9289C169 30.9898 168.579 32.0072 167.828 32.7574L146.757 53.8284C146.007 54.5786 144.99 55 143.929 55H5C2.79086 55 1 53.2091 1 51V26.0711C1 25.0102 1.42143 23.9928 2.17157 23.2426L23.2426 2.17157Z"
            stroke="url(#paint0_linear_1206_186)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1206_186"
              x1="85"
              y1="0"
              x2="85"
              y2="56"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C2252C" />
              <stop offset="1" stopColor="#ED8127" />
            </linearGradient>
          </defs>
        </svg>
        <span className={styles.text}>{name}</span>
      </div>
    </button>
  );
};

export default ImageGetStarted;
