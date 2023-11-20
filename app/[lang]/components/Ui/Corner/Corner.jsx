import React from "react";
import styles from "./Corner.module.scss";

const Corner = ({
  borderWidth,
  edgeSize,
  padding,
  width,
  height,
  children,
}) => {
  const buttonStyles = {
    "--border-width": borderWidth,
    "--edge-size": edgeSize,
    "--padding": padding,
    "--width": width,
    "--height": height,
  };
  return (
    <div style={buttonStyles} className={styles.corner}>
      {children}
    </div>
  );
};

export default Corner;
