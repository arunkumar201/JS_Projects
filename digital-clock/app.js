const dd = document.querySelector(".DD");

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const milliseconds = document.querySelector(".milliseconds");
const ampm = document.querySelector(".ampm");
const formatDD = document.querySelector(".formatDD");

// We get the days of the week and the months. (First day of the week Sunday)
let daysWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
let months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

function updateClock() {
	const date = new Date();

	const DAY = date.toLocaleDateString();

	let dayWeek = date.getDay();
	let month = date.getMonth();
	let dayValue = date.getDate();
	let year=date.getFullYear();
	
	const formatDate = `${daysWeek[dayWeek]} ${dayValue} ${months[month]} ${year}`;

	let HH = date.getHours();
	let MM = date.getMinutes();
	let SS = date.getSeconds();
	const MMS = date.getMilliseconds();
	let ap = "AM";

	if (HH == 0) {
		HH = 12;
	}
	if (HH > 12) {
		HH = HH - 12;
		ap = "PM";
	}
	if (HH < 10) {
		HH = "0" + HH;
	}
	if (MM < 10) {
		MM = "0" + MM;
	}
	if (SS < 10) {
		SS = "0" + SS;
	}

	dd.innerHTML = DAY;
	formatDD.innerHTML = hours.innerHTML = HH;
	minutes.innerHTML = MM;
	seconds.innerHTML = SS;
	milliseconds.innerHTML = MMS;
	if (HH >= 12) {
		ap = "PM";
	}
	ampm.innerHTML=ap;
	formatDD.innerHTML=formatDate;
}

setInterval(() => {
	updateClock();
}, 1000);
