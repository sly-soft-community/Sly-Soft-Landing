"use client";

import styles from "@/sections/Header/HeaderSection.module.scss";
import NavBar from "@/components/NavBar/NavBar";
import { useEffect, useRef, useState } from "react";

function HeaderSection() {
  let [lastScroll, setLastScroll] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll > lastScroll) {
        headerRef.current.style.top = `-${headerRef.current.offsetHeight}px`;
      } else {
        headerRef.current.style.top = "0";
      }
      setLastScroll(currentScroll <= 0 ? 0 : currentScroll);
      // lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    });
    // console.log("wdawdawwa");
  }, [lastScroll]);
  useEffect(() => {
    document.body.style.paddingTop = `${headerRef.current.offsetHeight}px`;
  }, []);
  return (
    <header ref={headerRef} className={styles.header}>
      <div className="container">
        <NavBar />
      </div>
    </header>
  );
}

export default HeaderSection;
