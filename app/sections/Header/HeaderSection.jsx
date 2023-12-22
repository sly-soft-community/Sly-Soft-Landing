"use client";

import styles from "@/sections/Header/HeaderSection.module.scss";
import NavBar from "@/components/NavBar/NavBar";

function HeaderSection() {
  return (
    <header className={styles.header}>
      <div className="container">
        <NavBar />
      </div>
    </header>
  );
}

export default HeaderSection;
