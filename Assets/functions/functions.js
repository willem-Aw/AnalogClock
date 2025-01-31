/**
 * Given a Date object, returns an object with the current hour, minute, and
 * second as properties.
 *
 * @param {Date} date
 * @returns {{hour: number, min: number, sec: number}}
 */
export function getDateInfo(date) {
    const hour = date.getHours() % 12 || 12;
    const min = date.getMinutes();
    const sec = date.getSeconds();
    return {hour, min, sec};    
}

/**
 * Given a Date object, returns a string representing the day of the week.
 *
 * @param {Date} date
 * @returns {string} - The day of the week, as a string.
 */
export function getDay(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

/**
 * Adds a leading zero to a single-digit number and returns it as a string.
 *
 * @param {number} i - The number to be padded with a leading zero if it is less than 10.
 * @returns {string|number} - The original number with a leading zero if it was a single-digit, otherwise the original number.
 */

export function addZero(i) {
    return i < 10 ? `0${i}` : i;
}

/**
 * Adds the given class name to the given element.
 *
 * @param {HTMLDivElement} el - The element to add the class name to.
 * @param {Array<String>} className - The class name to add.
 */

export function addClassList(el, className) {
    el.classList.add(...className);
}