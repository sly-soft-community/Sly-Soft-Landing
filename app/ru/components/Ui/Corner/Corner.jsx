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
    
  //   <Corner borderWidth="2px" edgeSize="17px" padding="13px 129px 11px 24px" height="48px" width="240px" >
  //   <input type="text" placeholder="First name" className={styles.customInput} />
  // </Corner>
  );
};

export default Corner;
