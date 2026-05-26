const moveButton1 = document.getElementById("moveButton1");
const moveButton2 = document.getElementById("moveButton2");
const stopButton  = document.getElementById("stopButton");
let posiX = 50;
let posiY = 50;
let randommove;
let moveFlag = true;

moveButton1.addEventListener("click", function(){
    $("#upa1").css("display","block")
    if(moveFlag){
        randommove = setInterval(randomMove,400);
        moveFlag = false;
    }
});

stopButton.addEventListener("click", function(){
    clearInterval(randommove);
    moveFlag = true;
});

function randomMove(){
    let i = (Math.floor(Math.random()*8));
    $("#upa1").css("--movexOld",posiX+"%");
    $("#upa1").css("--moveyOld",posiY+"%");
    switch (i) {
        case 0:
            if(posiY != 10){ posiY -= 10; }
            else{ posiY += 10; }
            break;
        case 1:
            if(posiX != 90){ posiX += 10; }
            else{ posiX -= 10; }
            if(posiY != 10){ posiY -= 10; }
            else{ posiY += 10; }
            break;
        case 2:
            if(posiX != 90){ posiX += 10; }
            else{ posiX -= 10; }
            break;
        case 3:
            if(posiX != 90){ posiX += 10; }
            else{ posiX -= 10; }
            if(posiY != 90){ posiY += 10; }
            else{ posiY -= 10; }
            break;
        case 4:
            if(posiY != 90){ posiY += 10; }
            else{ posiY -= 10; }
            break;
        case 5:
            if(posiX != 10){ posiX -= 10; }
            else{ posiX += 10; }
            if(posiY != 90){ posiY += 10; }
            else{ posiY -= 10; }
            break;
        case 6:
            if(posiX != 10){ posiX -= 10; }
            else{ posiX += 10; }
            break;
        case 7:
            if(posiX != 10){ posiX -= 10; }
            else{ posiX += 10; }
            if(posiY != 10){ posiY -= 10; }
            else{ posiY += 10; }
            break;
    }    
    $("#upa1").css("--movexNew",posiX+"%");
    $("#upa1").css("--moveyNew",posiY+"%");

    $("#upa1").css("animation","none");
    $("#upa1")[0].offsetHeight;
    $("#upa1").css("animation","slide 0.4s linear 1");

    $("#upa1").css("top",posiY + "%");
    $("#upa1").css("left",posiX + "%");
}
    