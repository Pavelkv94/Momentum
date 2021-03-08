//DOM Eelements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

//Show time
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  //set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  //hour = hour % 12 || 12;

  //Output time
  time.innerHTML = `${hour}<span>:</span> ${addZeros(
    min
  )}<span>:</span> ${addZeros(sec)}`;
  setTimeout(showTime, 1000);
}
//Add Zeros
function addZeros(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
//Set Background and Greeting
function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    //Morning
document.body.style.backgroundImage='url(./assets/images/morning/02.jpg)'
greeting.textContent = "Good Morning"
document.body.style.color = "white"
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage='url(./assets/images/morning/01.jpg)'
    greeting.textContent = "Good Afternoon"
    document.body.style.color = "white"
  } else {
    //Evening
    document.body.style.backgroundImage='url(./assets/images/morning/03.jpg)'
    greeting.textContent = "Good Evening"
    document.body.style.color = "white"
  }
}

//Run
showTime();
setBgGreet();
