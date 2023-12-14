'use client'
import React, { useState } from 'react';
import styles from "./OurWorksCard.module.scss"
import AnimatedCursor from "react-animated-cursor"
import Image from 'next/image';

const OurWorksCard = ({ item }) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div
            // onMouseEnter={() => setIsVisible(true)}
            // onMouseLeave={() => setIsVisible(false)}
            className={styles.card}
        >
            <div className={styles.cardWrapper}>
                {/* {isVisible && <AnimatedCursor
                color="#fff"
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={1.7}
                outerAlpha={0}
                outerStyle={{
                    mixBlendMode: 'exclusion'
                }}
            />} */}
                {/* {isVisible && <AnimatedCursor
                showSystemCursor={true}
                // innerSize={0}
                // outerSize={0}
                // innerScale={0}
                // outerScale={0}
            //    color = ''
            />} */}
                <Image
                    src={item.img}
                    className={styles.img}
                    priority={true}
                    alt="SlySoft"
                    loader={({ src }) => src}
                />
                <div className={styles.content}>
                    <h5 className={styles.title}>{item.title}</h5>
                    <p className={styles.titleSub}>{item.subTitle}</p>
                    <ul>
                        <li className={styles.tag}>{item.tags}</li>
                    </ul>
                </div>
                {/* {isVisible && <div style={{
                'top': ypos + 'px',
                'left': xpos + 'px'
            }} className={styles.cursor} />} */}
            </div>
        </div>
    );
};

export default OurWorksCard;