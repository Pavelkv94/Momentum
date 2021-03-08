//DOM Eelements
let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
let name = document.getElementById("name");
let focus = document.getElementById("focus");

//Options
const showAmPm = true;

//TODO-functions Show time
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  //set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  hour = hour % 12 || 12;

  //Output time
  time.innerHTML = `${hour}<span>:</span> 
  ${addZeros(min)}<span>:</span> 
  ${addZeros(sec)} ${showAmPm ? amPm : ""}`;
  setTimeout(showTime, 1000);
}
//TODO-functions Zeros
function addZeros(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
//TODO-functions Background and Greeting
function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url(./assets/images/morning/02.jpg)";
    greeting.textContent = "Good Morning";
    document.body.style.color = "white";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url(./assets/images/morning/01.jpg)";
    greeting.textContent = "Good Afternoon";
    document.body.style.color = "white";
  } else {
    //Evening
    document.body.style.backgroundImage = "url(./assets/images/morning/08.jpg)";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
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

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//!Run
showTime();
setBgGreet();
getName();
getFocus();
