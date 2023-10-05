"use client";
import React, { memo } from "react";
import styles from "./Header.module.scss";
import "../../globals.scss";
import NavBar from "../NavBar/NavBar";

function Header({ lang, dictionary }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <NavBar />
      </div>
    </header>
  );
}

export default memo(Header);
