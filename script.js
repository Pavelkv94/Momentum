//DOM Eelements
let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
let name = document.getElementById("name");
let focus = document.getElementById("focus");
//Data Arrays
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let bgArray = [];
let bgArrayMor = [];
let bgArrayDay = [];
let bgArrayEvn = [];
let bgArrayNig = [];
const photoBgArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];
//Options
const showAmPm = true;

//TODO-functions Show time
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  const todayDay = document.querySelector(".date");
  let day = dayNames[today.getDay()];
  let date = today.getDate();
  let month = months[today.getMonth()];
  //set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  hour = hour % 12 || 12;

  //Output time
  time.innerHTML = `${hour}<span>:</span> 
  ${addZeros(min)}<span>:</span> 
  ${addZeros(sec)} ${showAmPm ? amPm : ""}`;
  todayDay.innerHTML = `${day}<span>,</span> ${date} ${month}`;
  setTimeout(showTime, 1000);
}
//TODO-functions Zeros
function addZeros(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
//TODO-functions RandomImg
function fillBgArray() {
  let randomImg;
  for (let i = 0; i < 6; i++) {
      randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      while (bgArrayMor.includes(randomImg)) {
          randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      }
      bgArrayMor.push(randomImg);
      bgArray.push(randomImg);
  }

  for (let i = 6; i < 12; i++) {
      randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      while (bgArrayDay.includes(randomImg)) {
          randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      }
      bgArrayDay.push(randomImg);
      bgArray.push(randomImg);
  }

  for (let i = 12; i < 18; i++) {
      randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      while (bgArrayEvn.includes(randomImg)) {
          randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      }
      bgArrayEvn.push(randomImg);
      bgArray.push(randomImg);
  }

  for (let i = 18; i < 24; i++) {
      randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      while (bgArrayNig.includes(randomImg)) {
          randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      }
      bgArrayNig.push(randomImg);
      bgArray.push(randomImg);
  }
  console.log(bgArray);
}
//TODO-functions Background and Greeting
function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();
  if (hour < 6) {
      document.body.style.backgroundImage = `url('assets/images/night/${photoBgArray[bgArray[hour]]}')`;
      greeting.textContent = 'Good Night, ';
  } else if (hour < 12) {
      document.body.style.backgroundImage = `url('assets/images/morning/${photoBgArray[bgArray[hour]]}')`;
      greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
      document.body.style.backgroundImage = `url('assets/images/day/${photoBgArray[bgArray[hour]]}')`;
      greeting.textContent = 'Good Afternoon, ';
  } else if (hour < 24) {
      document.body.style.backgroundImage = `url('assets/images/evening/${photoBgArray[bgArray[hour]]}')`;
      greeting.textContent = 'Good Evening, ';
  }
}
  
//TODO-functions Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}
//TODO-functions Set Name
function setName(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
//TODO-functions Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
//TODO-functions Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

//TODO WEATHER
const API_KEY = "3edd4a0c231e044b4555cb02b03a955d";
const icon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".weather-humidity");
const wind = document.querySelector(".weather-wind");
const city = document.querySelector(".city");

async function getWeather() {
  const apiUrl = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=${API_KEY}&units=metric`
  );
  const data = await apiUrl.json();

  if (data.cod === "404") {
    city.textContent = localStorage.removeItem("cityLS");
    city.textContent = "Incorrect Name";
  } else {
    icon.className = "weather-icon owf";
    icon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity} %`;
    wind.textContent = `Wind: ${data.wind.speed} km/h`;
  }
}

function getCity() {
  if (!localStorage.getItem("cityLS")) {
    city.textContent = "Minsk";
  } else {
    city.textContent = localStorage.getItem("cityLS");
  }
}

function setCity(event) {
  if (event.type === "click") {
    city.textContent = "";
  }
  if (event.type === "keypress") {
    if (event.which === 13 || event.keyCode === 13) {
      getWeather();
      city.blur();
    }
  }
  if (event.type === "blur") {
    city.textContent = city.textContent.trim();
    if (city.textContent === "") {
      city.textContent = localStorage.getItem("cityLS");
      if (city.textContent === "") {
        city.textContent = "Minsk";
      }
    } else {
      localStorage.setItem("cityLS", city.textContent);
      getWeather();
    }
  }
}




name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//!Run
fillBgArray()
showTime();
setBgGreet();
getName();
getFocus();

document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("keypress", setCity);
city.addEventListener("blur", setCity);
city.addEventListener("click", setCity);
