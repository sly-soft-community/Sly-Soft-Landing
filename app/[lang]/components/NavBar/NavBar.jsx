import React from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import Logo from "../../media/Logo.png";
import Image from "next/image";
import ImageSun from "../Ui/ImageSun/ImageSun";
import ImageGet from "../Ui/ImageGet/ImageGet";
import ImageLanguage from "../Ui/ImageLanguage/ImageLanguage";

const item = [
  {
    id: 1,
    title: "Услуги",
  },
  {
    id: 2,
    title: "Проекты",
  },
  {
    id: 3,
    title: "Этапы разработки",
  },
  {
    id: 4,
    title: "Контакты",
  },
  {
    id: 5,
    title: "FAQ",
  },
];

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src={Logo}
          width={130}
          height={56}
          priority={true}
          alt="SlySoft"
        />
      </Link>
      <div>
        <ul className={styles.links}>
          {item.map((items) => (
            <li key={items.id} className={styles.item}>
              {items.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.btn}>
        <ImageLanguage name={"EN"} />
        <ImageSun />
        <ImageGet name={"Get in touch"} />
      </div>
    </div>
  );
};

export default NavBar;
