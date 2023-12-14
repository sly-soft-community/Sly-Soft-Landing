/*
 * @param min number
 * @param max number
 * @return number
 * @description returns random number between min and max
 * */
export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
