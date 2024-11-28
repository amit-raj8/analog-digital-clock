const body = document.querySelector("body"),
hourHand = document.querySelector(".hour"),
minuteHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second"),
modeSwitch = document.querySelector(".mode-switch");

const updateTime = () => {
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360;
    secToDeg = (date.getMinutes() / 60) * 360;
    secToDeg = (date.getHours() / 60) * 360;

    secondHand.style.transform = `rotate($(secToDeg)deg)`;
    secondHand.style.transform = `rotate($(secToDeg)deg)`;
    secondHand.style.transform = `rotate($(secToDeg)deg)`;
};

setInterval(updateTime, 1000);

updateTime();