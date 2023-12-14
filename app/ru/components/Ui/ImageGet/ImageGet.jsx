"use client";
import React from "react";
import styles from "./ImageGet.module.scss";

const ImageGet = ({ name }) => {
  const handleClick = () => {
    alert("Кнопка нажата");
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <div className={styles.iconContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="182"
          height="40"
          viewBox="0 0 182 40"
          fill="none"
        >
          <path
            d="M28 0H177C179.761 0 182 2.23858 182 5V21.9289C182 23.255 181.473 24.5268 180.536 25.4645L167.464 38.5355C166.527 39.4732 165.255 40 163.929 40H0L10.5355 29.4645C11.4732 28.5268 12 27.255 12 25.9289V5C12 2.23858 14.2386 0 17 0H28Z"
            fill="url(#paint0_linear_1564_208)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1564_208"
              x1="91"
              y1="0"
              x2="91"
              y2="40"
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

export default ImageGet;
