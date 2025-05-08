const button = document.getElementById("btn");
const text = document.getElementById("text");
const input = document.getElementById("input");
const text2 = document.getElementById("text_nou");
let count = 0;
button.addEventListener("click", changetext);

function changetext() {
    count++;
    text2.textContent = count;
    text.textContent = input.value;
}
