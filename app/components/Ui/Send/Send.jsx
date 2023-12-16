import React from 'react'
import styles from "./Send.module.scss"
import Icons from '../../../media/img'

const Send = ({name}) => {
    const handleClick = () => {
        alert("Ок нажми да!");
      };
  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      <div className={styles.iconContainer}>
        <Icons.SendStroke className={styles.bt}/>
        <span className={styles.text}>{name}</span>
      </div>
    </button>
  )
}

export default Send