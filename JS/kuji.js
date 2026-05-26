const omikuji = document.getElementById("omikujiImage");
const death1 = document.getElementById("death1");
const death2 = document.getElementById("death2");
const death3 = document.getElementById("death3");
const kakapo = document.getElementById("kakapo");
const kujiAria = document.getElementById("kujiAria");

omikuji.addEventListener("click", function(){
    const i = Math.floor(Math.random()*4)
    death1.style.display = "none";
    death2.style.display = "none";
    death3.style.display = "none";
    kakapo.style.display = "none";
    kujiAria.style.opacity = "1.0"
    switch (i) {
        case 0:
            document.getElementById("resultText").textContent = "大吉";
            kakapo.style.display = "block";
            break;
        case 1:
            document.getElementById("resultText").textContent = "吉";
            break;
        case 2:
            document.getElementById("resultText").textContent = "凶";
            kujiAria.style.opacity = "0.9"
            break;
        case 3:
            document.getElementById("resultText").textContent = "大凶";
            death1.style.display = "block";
            death2.style.display = "block";
            death3.style.display = "block";
            break;
        default:
            break;
    }
});
omikuji.addEventListener("mouseover",function(){
    omikuji.style.transform="scale(1.2)";
});
omikuji.addEventListener("mouseout",function(){
    omikuji.style.transform="scale(1.0)";
});