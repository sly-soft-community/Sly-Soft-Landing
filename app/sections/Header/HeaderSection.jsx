"use client";

import styles from "@/sections/Header/HeaderSection.module.scss";
import NavBar from "@/components/NavBar/NavBar";
import { useEffect, useRef, useState } from "react";

function HeaderSection() {
  let [lastScroll, setLastScroll] = useState(0);
  const headerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    if (!isActive) {
      const handleScroll = () => {
        const currentScroll = document.documentElement.scrollTop;
        if (headerRef.current && currentScroll > lastScroll) {
          headerRef.current.style.top = `-${headerRef.current.offsetHeight}px`;
        } else {
          headerRef.current.style.top = "0";
        }
        setLastScroll(currentScroll <= 0 ? 0 : currentScroll);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScroll, isActive]);

  useEffect(() => {
    if (headerRef.current) {
      document.body.style.paddingTop = `${headerRef.current.offsetHeight}px`;
    }
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className="container">
        <NavBar isActive={isActive} setIsActive={setIsActive} />
      </div>
    </header>
  );
}

export default HeaderSection;
