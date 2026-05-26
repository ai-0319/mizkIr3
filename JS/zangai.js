// const btn = document.getElementById("btn");
// btn.addEventListener("click",()->{
//     alert("こんにちは");
// });

document.getElementById("btn").onclick = function () {
    alert("こんにちは");
}

document.getElementById("redButton").onclick = function () {
    document.getElementById("changeText").style.color = "RED";
}

document.getElementById("blueButton").onclick = function () {
    document.getElementById("changeText").style.color = "blue";
}

document.getElementById("changeButton").onclick = function () {
    document.getElementById("changeText").textContent = "テキスト変更";
}

document.getElementById("addButton").onclick = function () {
    const text = document.getElementById("inputText").value;
    const list = document.getElementById("outputList");
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
}