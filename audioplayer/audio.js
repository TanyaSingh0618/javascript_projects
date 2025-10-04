const myArray = ["lion", "cougar", "bark"];
document.addEventListener("DOMContentLoaded", init);

function init() {
    myArray.forEach(function (item) {
        let div = document.createElement("div");
        div.setAttribute("class", "animal " + item);
        div.innerText = item.toUpperCase();
        div.addEventListener("click", function () {
            playit(item);
        })
        document.body.appendChild(div);
    })
}

function playit(name) {
    let activeEle = document.querySelector("." + name);
    let sound1 = new Audio("sound/" + name + ".mp3");
    sound1.play();
    activeEle.classList.add("active");
    setTimeout(function () {
        activeEle.classList.remove("active");
    }, 200)
}