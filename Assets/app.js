import { getDateInfo, addZero, addClassList } from './functions/functions.js';

// let secDot = document.querySelector('.sec-dots[data-sec] .innerDots');
let minDot = document.querySelector('.min-dots[data-min] .innerDots');
let hourDot = document.querySelector('.hour-dots[data-hour] .innerDots');

const hourTime = document.querySelector('.time .hour');
const minTime = document.querySelector('.time .min');
const secTime = document.querySelector('.time .sec');

const hourTimeNeedle = document.querySelector('.needle.hour');
const minTimeNeedle = document.querySelector('.needle.min');
const secTimeNeedle = document.querySelector('.needle.sec');

// let hour;
// let min;
// let sec;

function initClockDots() {
    for (let i = 1; i < 61; i++) {
        // Minutes dot
        const mdot = document.createElement('span');
        addClassList(mdot, ['dot']);
        mdot.style.transform = `rotate(${i * 6}deg)`;
        minDot.appendChild(mdot);

        if (i % 5 === 0) {
            // hours dot
            const hdot = document.createElement('span');
            addClassList(hdot, ['dot', 'hour-dot']);
            hdot.style.transform = `rotate(${(i * 30) / 5}deg)`;
            hourDot.appendChild(hdot);
            mdot.setAttribute('hidden', '');
        }
    }
}


function clock() {
    const date = new Date();
    const hour = getDateInfo(date).hour;
    const min = getDateInfo(date).min;
    const sec = getDateInfo(date).sec;

    secTime.innerHTML = addZero(sec);
    minTime.innerHTML = addZero(min);
    hourTime.innerHTML = addZero(hour);

    document.querySelectorAll('.min-dots .dot').forEach((dot, i) => {
        dot.classList.toggle('active-dot', i < min);
    });

    document.querySelectorAll('.hour-dots .hour-dot').forEach((dot, i) => {
        dot.classList.toggle('active-dot', i < hour);
    });

    // const hourDeg = (hour * 30) + (min * 0.5);
    // const minDeg = (min * 6) + (sec * 0.1);
    const hourDeg = hour * 30;
    const minDeg = min * 6;
    const secDeg = sec * 6;

    hourTimeNeedle.style.transform = `rotate(${hourDeg}deg)`;
    minTimeNeedle.style.transform = `rotate(${minDeg}deg)`;
    secTimeNeedle.style.transform = `rotate(${secDeg}deg)`;
}

// Initialisation
initClockDots();
setInterval(clock, 1000);
clock();