const button = document.querySelector("button");
const output = document.querySelector(".output");
button.addEventListener("click", function () {
    const cost = document.querySelector("input");
    const tip = (cost.value * 0.15).toFixed(3);
    let temp = `<h1>You should tip $${tip} on $${cost.value}</h1>`;
    console.log(cost.value * 0.15);
    output.innerHTML = temp;
})