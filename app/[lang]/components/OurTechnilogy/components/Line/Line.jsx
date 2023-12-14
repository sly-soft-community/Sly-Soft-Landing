import React from 'react';
import { getArrow } from "curved-arrows"
import styles from './Line.module.scss'

const Line = ({className}) => {
    const ref = React.useRef(null)
    const [p1, setP1] = React.useState({ x: 0, y: 150 })
    const [p2, setP2] = React.useState({ x: 249, y: 61 })

    const [bow, setBow] = React.useState(0)
    const [stretch, setStretch] = React.useState(0.5)
    const [padStart, setPadStart] = React.useState(0)
    const [padEnd, setPadEnd] = React.useState(20)
    const [stretchMin, setStretchMin] = React.useState(0)
    const [stretchMax, setStretchMax] = React.useState(360)
    const [flip, setFlip] = React.useState(false)
    const [straights, setStraights] = React.useState(true)
    const [showDecorations, setShowDecorations] = React.useState(true)

    const [sx, sy, cx, cy, ex, ey, ae, as, ac] = getArrow(
        p1.x,
        p1.y,
        p2.x,
        p2.y,
        {
            padStart,
            padEnd,
            bow,
            straights,
            stretch,
            stretchMax,
            stretchMin,
            flip,
        }
    )

    return (
        <div className={`${styles.box} ${className}`} ref={ref}>
            <svg
                strokeWidth={1}
            >
                <line x1={sx} y1={sy} x2={ex} y2={ey} stroke="rgba(255, 255, 255, 0.9)" />
            </svg>
        </div>
    )
};

export default Line;