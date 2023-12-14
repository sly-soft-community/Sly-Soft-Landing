'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from "./OurTechnilogy.module.scss"
import CollapseWrapper from './components/CollapseWrapper/CollapseWrapper';
import Image from 'next/image';
import SlyLogo from "@/media/img/Technology/Slylogo.png"
import SynergyImg from "@/media/img/ourWorks/Synergy.png"
import Icons from "../../media/img";
import TechnilogyItem from './components/TechnilogyItem/TechnilogyItem';
import { Stars } from './components/Stars';
import Line from './components/Line/Line';

const OurTechnilogy = () => {
    // ,
    // JiraIcon,
    // NotionIcon,
    // СonfluenceIcon,
    const collapseRef1 = useRef()
    const [state, setState] = useState([
        {
            id: 0,
            title: 'Управление проектом',
            isOpen: false,
            data: [
                { title: 'Confluence', icon: () => <Icons.СonfluenceIcon /> },
                { title: 'Git', icon: () => <Icons.GitIcon /> },
                { title: 'Jira', icon: () => <Icons.JiraIcon /> },
                { title: 'Discord', icon: () => <Icons.СonfluenceIcon /> },
                { title: 'Notion', icon: () => <Icons.NotionIcon /> },
            ]
        },
        {
            id: 1,
            title: 'Разработка интерфейса',
            isOpen: false,
            data: [
                { title: 'Angular', icon: () => <Icons.СonfluenceIcon /> },
                { title: 'Vue', icon: () => <Icons.GitIcon /> },
                { title: 'React', icon: () => <Icons.JiraIcon /> },
                { title: 'Next.js', icon: () => <Icons.СonfluenceIcon /> },
                { title: 'JavaScript', icon: () => <Icons.NotionIcon /> },
                { title: 'TypeScript', icon: () => <Icons.NotionIcon /> },
                { title: false, icon: () => <Icons.NotionIcon /> },
            ]
        },
        {
            id: 2,
            title: 'Разработка мобильных приложений',
            isOpen: false,
            data: [
                { title: 'React Native', icon: () => <Icons.СonfluenceIcon /> },
                { title: 'Android', icon: () => <Icons.GitIcon /> },
                { title: 'Flutter', icon: () => <Icons.JiraIcon /> },
                { title: false, icon: () => <Icons.NotionIcon /> },

            ]
        },
        {
            id: 3,
            title: 'Дизайн',
            isOpen: false,
            ref: collapseRef1,
            data: [
                { title: 'Figma', icon: () => <Icons.СonfluenceIcon /> },
                { title: 'Adobe', icon: () => <Icons.GitIcon /> },
                { title: 'Notion', icon: () => <Icons.JiraIcon /> },
            ]
        },
        {
            id: 4,
            title: 'Разработка серверной части',
            isOpen: false,
            data: [
                { title: 'Symphony', icon: () => <Icons.СonfluenceIcon /> },
                { title: 'PHP', icon: () => <Icons.GitIcon /> },
                { title: 'GitHub', icon: () => <Icons.JiraIcon /> },
                { title: 'Node.js', icon: () => <Icons.СonfluenceIcon /> },
                { title: 'JavaScript', icon: () => <Icons.NotionIcon /> },
                { title: 'Java', icon: () => <Icons.NotionIcon /> },
                { title: 'GoLang', icon: () => <Icons.NotionIcon /> },
                { title: 'Phyton', icon: () => <Icons.NotionIcon /> },
                { title: 'Laravel', icon: () => <Icons.NotionIcon /> },
                { title: 'Next.js', icon: () => <Icons.NotionIcon /> },
            ]
        },
        {
            id: 5,
            title: 'Базы даннных',
            isOpen: false,
            data: [
                { title: 'PostgreSQL', icon: () => <Icons.СonfluenceIcon /> },
                { title: 'MongoDB', icon: () => <Icons.GitIcon /> },
                { title: 'MySQL', icon: () => <Icons.JiraIcon /> },
                { title: 'SQL', icon: () => <Icons.СonfluenceIcon /> },
            ]
        },
        {
            id: 6,
            title: 'DevOps',
            isOpen: false,
            data: [
                { title: 'GoLang', icon: () => <Icons.СonfluenceIcon /> },
                { title: 'Docker', icon: () => <Icons.GitIcon /> },
            ]
        },
    ])



    const openItem = (id) => {
        let newState = [...state]
        state[id].isOpen = true
        setState(newState)
    }

    const openItems = (idArray = []) => {
        let newState = [...state]
        idArray.forEach((id) => state[id].isOpen = true)
        setState(newState)
    }

    const closeItem = (id) => {
        let newState = [...state]
        state[id].isOpen = false
        setState(newState)
    }

    const closeItems = (idArray = []) => {
        let newState = [...state]
        idArray.forEach((id) => state[id].isOpen = false)
        setState(newState)
    }
    // useEffect(() => {
    //     console.log('collapseRef1', collapseRef1)
    // }, [collapseRef1])

    return (
        <div className={styles.block}>

            <div className={styles.desctop}>
                <Stars starsCount={240} FALLING_STARS_COUNT={5}>
                    <div className={styles.backgroundWrapper}>
                        <div className="container">
                            <h2 className={styles.title}>Стек технологий</h2>
                            <div className={styles.contantBox}>
                                <div className={styles.col}>
                                    {[...state].splice(0, 3).map((item, hkey) =>
                                        <div
                                            key={`hkey${hkey}`}
                                            onMouseOver={() => openItem(item.id)}
                                            onMouseLeave={() => closeItem(item.id)}
                                            className={item.isOpen || state[item.id + 1].isOpen ? `${styles.row} ${styles.open}` : styles.row}>
                                            <CollapseWrapper isOpen={item.isOpen} title={item.title} >
                                                <div className={styles.itemBox}>
                                                    {item.data.map((item, key) => item.title ?
                                                        <div key={`th1${key}`} className={styles.item}>
                                                            {item.icon()}
                                                            <span> {item.title}</span>
                                                        </div> : <div key={`th1${key}`} className={styles.itemEmpty}>
                                                            {item.icon()}
                                                        </div>)}
                                                </div>
                                            </CollapseWrapper>
                                        </div>
                                    )}
                                </div>


                                <div className={styles.col}>
                                    <CollapseWrapper title="Тестирование" >
                                        <div className=""></div>
                                    </CollapseWrapper>

                                    <div className={styles.imgBox}>
                                        {/* <Line
                                            // style ={{}} 
                                            className={styles.line} /> */}
                                        <Image
                                            src={SlyLogo}
                                            className={styles.img}
                                            priority={true}
                                            onMouseOver={() => openItems([0, 1, 2, 3, 4, 5, 6])}
                                            onMouseLeave={() => closeItems([0, 1, 2, 3, 4, 5, 6])}
                                            alt="SlySoft"
                                            loader={({ src }) => src}
                                        />
                                    </div>

                                    {[...state].splice(6, 1).map((item, hkey) =>
                                        <div
                                            key={`hkey${hkey}`}
                                            onMouseOver={() => openItem(item.id)}
                                            onMouseLeave={() => closeItem(item.id)}
                                            className={item.isOpen ? `${styles.row} ${styles.open}` : styles.row}>
                                            <CollapseWrapper isOpen={item.isOpen} title={item.title} >
                                                <div className={styles.itemBox}>
                                                    {item.data.map((item, key) =>
                                                        <div key={`th1${key}`} className={styles.item}>
                                                            {item.icon()}
                                                            <span> {item.title}</span>
                                                        </div>)}
                                                </div>
                                            </CollapseWrapper>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.col}>
                                    {[...state].splice(3, 3).map((item, hkey) =>
                                        <div
                                            key={`hkey${hkey}`}
                                            ref={item.ref ? item.ref : null}
                                            onMouseOver={() => openItem(item.id)}
                                            onMouseLeave={() => closeItem(item.id)}
                                            className={item.isOpen || state[item.id + 1].isOpen ? `${styles.row} ${styles.open}` : styles.row}>
                                            <CollapseWrapper isOpen={item.isOpen} title={item.title} >
                                                <div className={styles.itemBox}>
                                                    {item.data.map((item, key) =>
                                                        <div key={`th1${key}`} className={styles.item}>
                                                            {item.icon()}
                                                            <span> {item.title}</span>
                                                        </div>)}
                                                </div>
                                            </CollapseWrapper>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </Stars>
            </div>
            <div className={styles.mobile}>
                <h2 className={styles.title}>Стек технологий</h2>
                {state.map((item, key) =>
                    <div key={`mkey${key}`}
                        onClick={() => item.isOpen ?
                            closeItem(item.id) : openItem(item.id)}
                        className={styles.mobileItem}>
                        <CollapseWrapper isOpen={item.isOpen} title={item.title} >
                            <div className={styles.itemBox}>
                                {item.data.map((item, key) => item.title ?
                                    <div key={`th1${key}`} className={styles.item}>
                                        {item.icon()}
                                        <span> {item.title}</span>
                                    </div> : <div key={`th1${key}`} className={styles.itemEmpty}>
                                        {item.icon()}
                                    </div>)}
                            </div>
                        </CollapseWrapper>
                    </div>
                )}

            </div>




        </div>
    );
};

export default OurTechnilogy;