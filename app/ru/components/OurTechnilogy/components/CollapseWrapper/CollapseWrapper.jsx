'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from "./CollapseWrapper.module.scss"
import iconCross from './IconCross.png'
import Image from 'next/image';


const CollapseWrapper = ({ isOpen, ref, ...props }) => {
    // const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef()
    const [hight, setHeght] = useState()
    useEffect(() => {
        // console.log(contentRef)
        setHeght(contentRef?.current?.children[0].clientHeight)
    }, [])

    return (
        <div
            style={{ "--hightOpen": `${hight}px` }}
            className={styles.box} >
            <div
                // onClick={() => { setIsOpen((prev) => !prev) }}
                className={styles.title}>
                <span
                    ref={ref && ref}
                >{props.title}</span>
                <div className={styles.iconBox} >
                    <Image
                        src={iconCross}
                        width={130}
                        height={56}
                        priority={true}
                        className={isOpen ? `${styles.icon} ${styles.open}` : styles.icon}
                        alt="SlySoft"
                        loader={({ src }) => src}
                    />
                </div>
            </div>
            <div className={isOpen ? `${styles.content} ${styles.open}` : `${styles.content}`} ref={contentRef}>
                {props.children}
            </div>
        </div>
    )
}

export default CollapseWrapper