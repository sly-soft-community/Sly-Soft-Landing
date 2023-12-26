import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { STAR_SIZES } from './consts'
import { randomNumber } from './randomNum'

const Stars = ({ children, starsCount = 75, FALLING_STARS_COUNT = 0 }) => {
    const [starState, setStarState] = useState({})
    useEffect(() => {
        {
            /* generating array with length = STARS_COUNT */
        }
        let stars = [...Array(starsCount)].map(() => {
            let size = STAR_SIZES[Math.round(Math.random() * STAR_SIZES.length)]
            return {
                top: `${randomNumber(1, 100)}%`,
                left: `${randomNumber(1, 100)}%`,
                height: `${size}px`,
                width: `${size}px`,
                animationDuration: `${randomNumber(5, 15)}s`
            }
        })
        {
            /* generating array with length = FALLING_STARS_COUNT */
        }
        let fallingStars = [...Array(FALLING_STARS_COUNT)].map(() => ({
            top: `${randomNumber(0, 30)}%`,
            left: `${randomNumber(0, 70)}%`,
            animationDelay: `${randomNumber(0, 5)}s`,
            animationDuration: `${randomNumber(10, 20)}s`,
        }))
        setStarState({ stars, fallingStars })
    }, [])
    return (
        <div className={styles.starsContainer}>
            {starState.stars
                ? starState.stars.map((star, i) => {
                      return (
                          <div
                              key={i}
                              className={styles.star}
                              style={{ ...star }}
                          />
                      )
                  })
                : null}

            {/* {starState.fallingStars
                ? starState.fallingStars.map((star, i) => (
                      <div
                          key={i}
                          className={styles.fallingStar}
                          style={{ ...star }}
                      />
                  ))
                : null} */}
            {children}
        </div>
    )
}

export default Stars
