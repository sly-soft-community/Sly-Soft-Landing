"use client";

import styles from "./Header.module.scss";
import NavBar from "@/components/NavBar/NavBar";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
