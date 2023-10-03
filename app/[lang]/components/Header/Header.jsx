"use client";
import React, { memo } from "react";
import styles from "./Header.module.scss";
import "../../globals.scss";
import NavBar from "../NavBar/NavBar";

function Header({ lang, dictionary }) {
  return (
    <header className="container">
      <NavBar />
    </header>
  );
}

export default memo(Header);
