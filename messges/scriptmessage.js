const button = document.querySelector("button");
const output = document.querySelector(".output");
button.addEventListener('click', showoutput);

function showoutput() {
    const date = new Date();
    const hours = date.getHours();
    let message;
    output.style.cssText = "margin:20px; padding:10px; border-radius:10px;";

    if (hours >= 18 && hours < 20) {
        message = "Good Evening";
        output.style.backgroundColor = "#d76920ff";
        output.style.color = "#000000";
    } else if (hours >= 12 && hours < 18) {
        message = "Good Afternoon";
        output.style.backgroundColor = "#f5d901ff";
        output.style.color = "#000000ff";
    } else if (hours >= 5 && hours < 12) {
        message = "Good Morning";
        output.style.backgroundColor = "#16ace3ff";
        output.style.color = "#000000";
    } else {
        message = "Good Night";
        output.style.backgroundColor = "#000000ff";
        output.style.color = "#ffffff";
    }

    output.innerHTML = "<h1>" + message + "</h1>";
}


//output.setAttribute("style","color:white;width: 200px;height: 100px;text-align: center;"); another way of setting the global style instead of adding into the style.css
// output.style.cssText ="color:white;width: 200px;height: 100px;text-align: center;"; this one as well
