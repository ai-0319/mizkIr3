const start     = document.getElementById("start");
const stop      = document.getElementById("stop");
const easy      = document.getElementById("easy");
const nomal     = document.getElementById("nomal");
const hard      = document.getElementById("hard");
const reset      = document.getElementById("reset");

const score     = document.getElementById("score");
const time      = document.getElementById("time");
const result    = document.getElementById("resultPopUp");
const resultText= document.getElementById("resultText");
const retry     = document.getElementById("retry");

const moveText1 = document.getElementById("moveText1");
const moveText2 = document.getElementById("moveText2");
const moveText3 = document.getElementById("moveText3");

const mogura1   = document.getElementById("mogura1");
const mogura2   = document.getElementById("mogura2");
const mogura3   = document.getElementById("mogura3");
const mogura4   = document.getElementById("mogura4");
const mogura5   = document.getElementById("mogura5");
const mogura6   = document.getElementById("mogura6");
const mogura7   = document.getElementById("mogura7");

let moveGame;
let moveTimer;
let point = 0;
let dif = 2;
let moguraFlag = 1;
let timer = 10;

window.addEventListener("load",function(){
    let timeText = "残り時間" +timer+ "秒";
    time.textContent = `${timeText}`;
});

easy.addEventListener ("click",function(){
    dif = 2;
    $("#easy").css("background-color","#FFFF99");
    $("#nomal").css("background-color","#EEEEEE");
    $("#hard").css("background-color","#EEEEEE");
});
nomal.addEventListener("click",function(){
    dif = 1.5;
    $("#easy").css("background-color","#EEEEEE");
    $("#nomal").css("background-color","#FFFF99");
    $("#hard").css("background-color","#EEEEEE");
});
hard.addEventListener ("click",function(){
    dif = 1;
    $("#easy").css("background-color","#EEEEEE");
    $("#nomal").css("background-color","#EEEEEE");
    $("#hard").css("background-color","#FFFF99");
});

start.addEventListener("click",gameStart);
stop.addEventListener("click",gameStop);
reset.addEventListener("click",resetAll);
retry.addEventListener("click",resetAll);

function gameStart(){
    $("#start").css("background-color","#FFFF99");
    $("#stop").css("background-color","#EEEEEE");
    $("#startPopUp").css("display","none");
    moveGame = setInterval(moguraTataki,dif*1000);
    moveTimer = setInterval(timerUpdate,1000);
    moveText1.textContent = "MOVE";
    moveText2.textContent = "MOVE";
    moveText3.textContent = "MOVE";
    $("#slideAria").css("animation","slide 5s linear infinite");
}
function gameStop(){
    $("#start").css("background-color","#EEEEEE");
    $("#stop").css("background-color","#FFFF99");
    clearInterval(moveGame);
    clearInterval(moveTimer);
    moveText1.textContent = "STOP";
    moveText2.textContent = "STOP";
    moveText3.textContent = "STOP";
    $("#slideAria").css("animation-play-state","paused");
}

mogura1.addEventListener("click",moguraClick);
mogura2.addEventListener("click",moguraClick);
mogura3.addEventListener("click",moguraClick);
mogura4.addEventListener("click",moguraClick);
mogura5.addEventListener("click",moguraClick);
mogura6.addEventListener("click",moguraClick);
mogura7.addEventListener("click",moguraClick);
function moguraClick(){
    if(moguraFlag){
        if(timer != 0){
            point++;
            let scoreText = "スコア："+ point +"点";
            score.textContent = `${scoreText}`;
            moguraFlag = 0;
        }
    }
}

function moguraTataki(){
    const i = (Math.floor(Math.random()*7))+1;
    $("#mogura"+i).css("display", "block");
    $("#mogura"+i).css("animation", "moguraUpDown "+dif+ "s linear 1");
    $("#mogura"+i).one("animationend",function(){
        $("#mogura"+i).css("display", "none");
    });
    moguraFlag = 1;
}
function timerUpdate(){
    timer--;
    let timeText = "残り時間" +timer+ "秒";
    time.textContent = `${timeText}`;
    if(timer==0){
        gameStop();
        let scoreText = "今回のスコア："+ point +"点";
        $("#resultPopUp").css("display","block");
        $("#darkCover").css("display","block");
        resultText.textContent = `${scoreText}`
    }
}
function resetAll(){
    timer = 10;
    let timeText = "残り時間" +timer+ "秒";
    time.textContent = `${timeText}`;
    point = 0;
    let scoreText = "スコア："+ point +"点";
    score.textContent = `${scoreText}`;
    $("#resultPopUp").css("display","none");
    $("#darkCover").css("display","none");
    gameStop();
}