import React from 'react'
import styles from "./SendSecond.module.scss"
import Icons from '../../../media/img'

const SendSecond = ({name}) => {
    const handleClick = () => {
        alert("Ок нажми да!");
      };
  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      <div className={styles.iconContainer}>
        <Icons.SendStrokeSecond className={styles.bt}/>
        <span className={styles.text}>{name}</span>
      </div>
    </button>
  )
}

export default SendSecond