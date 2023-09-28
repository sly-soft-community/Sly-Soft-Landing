"use client";
import React, { memo } from "react";
import styles from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";

function Header({ lang, dictionary }) {
  return (
    <header>
      <NavBar />
    </header>
  );
}

export default memo(Header);
