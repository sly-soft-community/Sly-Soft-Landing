"use client";
import Image from "next/image";
import styles from "./ImageSun.module.scss";
import { Icons } from "@/media/img";

const ImageSun = () => {
  const handleClick = () => {
    alert("Кнопка нажата");
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <div className={styles.iconContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="40"
          viewBox="0 0 74 40"
          fill="none"
        >
          <path
            d="M12.5 5C12.5 2.51472 14.5147 0.5 17 0.5H69C71.4853 0.5 73.5 2.51472 73.5 5V21.9289C73.5 23.1224 73.0259 24.267 72.182 25.1109L59.1109 38.182C58.267 39.0259 57.1224 39.5 55.9289 39.5H1.20711L10.8891 29.818C11.9205 28.7866 12.5 27.3876 12.5 25.9289V5Z"
            stroke="url(#paint0_linear_1564_195)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1564_195"
              x1="37"
              y1="0"
              x2="37"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C2252C" />
              <stop offset="1" stopColor="#ED8127" />
            </linearGradient>
          </defs>
        </svg>
        <div className={styles.sun}>
          <Image src={Icons.Sun} width={24} height={24} alt="" />
        </div>
      </div>
    </button>
  );
};

export default ImageSun;
