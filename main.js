const startbutton = document.getElementById("js--start");
const stopbutton = document.getElementById("js--stop");

let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let timer;

startbutton.onclick = function(){
    if(running === true){
        return;
    }
    running = true;
    timer = setInterval(function(){
        seconds = seconds + 1;
        if(seconds === 60){
            minutes = seconds + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds;
    }, 1000);
}

stopbutton.onclick = function stopButton(){
    clearInterval(timer);
    running = false;
}

const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");
slider.value = 2;
rangeValue.innerText = slider.value + "x";

slider.oninput = function (){
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
}

const paragraph = document.getElementById("js--text");
const image = document.getElementById("js--img");

let data = fetch("../data.json").then(
    function(binnenGekomenData){
        return binnenGekomenData.json();
    }).then(
        function(echteData){
            paragraph.innerText = echteData.text;
            image.src = echteData.img;
        }
    );
