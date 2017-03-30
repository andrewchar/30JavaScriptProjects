const secHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

function setTime() {
	const d = new Date();
	const s = d.getSeconds();
	const m = d.getMinutes();
	const h = d.getHours();
	secHand.style.transform = `rotate(${(s / 60) * 360 + 90}deg)`;
	minHand.style.transform = `rotate(${(m / 60) * 360 + 90}deg)`;
	hourHand.style.transform = `rotate(${(h / 12) * 360 + 90}deg)`;
}

setInterval(setTime, 1000);