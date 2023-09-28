import styles from "./ImageLanguage.module.scss";

const ImageLanguage = () => {
  const handleClick = () => {
    alert("Кнопка нажата");
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <div className={styles.iconContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="40"
          viewBox="0 0 62 40"
          fill="none"
        >
          <path
            d="M14.8891 1.81802C15.733 0.974104 16.8776 0.5 18.0711 0.5H57C59.4853 0.5 61.5 2.51472 61.5 5V21.9289C61.5 23.1224 61.0259 24.267 60.182 25.1109L47.1109 38.182C46.267 39.0259 45.1224 39.5 43.9289 39.5H5C2.51472 39.5 0.5 37.4853 0.5 35V18.0711C0.5 16.8776 0.974106 15.733 1.81802 14.8891L14.8891 1.81802Z"
            stroke="url(#paint0_linear_1564_192)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1564_192"
              x1="31"
              y1="0"
              x2="31"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C2252C" />
              <stop offset="1" stopColor="#ED8127" />
            </linearGradient>
          </defs>
        </svg>
        <span className={styles.text}>EN</span>
      </div>
    </button>
  );
};

export default ImageLanguage;
