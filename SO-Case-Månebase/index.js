let button1 = document.getElementById('btn1')
let button2 = document.getElementById('btn2')
let button3 = document.getElementById('btn3')
let button4 = document.getElementById('btn4')

let sovs1 = document.getElementById('sovs1')
let sovs2 = document.getElementById('sovs2')
let sovs3 = document.getElementById('sovs3')
let sovs4 = document.getElementById('sovs4')



function setup(){
    frameRate(60);
    createCanvas(windowWidth, 4000);
    
    button1.addEventListener("click", getOpacity1)
    button2.addEventListener("click", getOpacity2)
    button3.addEventListener("click", getOpacity3)
    button4.addEventListener("click", getOpacity4)
}

function draw(){
    fill(160, 160, 160, 255);
    circle(952, 1200, 2000);
    noStroke();
}

function getOpacity1() {
    select('#sovs1').style('opacity', 100)
    select('#btn1').style('opacity', 0)
}
function getOpacity2() {
    select('#sovs2').style('opacity', 100)
    select('#btn2').style('opacity', 0)
}
function getOpacity3() {
    select('#sovs3').style('opacity', 100);
    select('#btn3').style('opacity', 0)
}
function getOpacity4() {
    select('#sovs4').style('opacity', 100)
    select('#btn4').style('opacity', 0)
}
