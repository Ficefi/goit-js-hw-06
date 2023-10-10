const btnMinus = document.querySelector("button[data-action=decrement]");
const btnPlus = document.querySelector("button[data-action=increment]")
const value = document.querySelector("#value");
let counterValue = 0;

btnMinus.addEventListener('click', () => {
    counterValue--
    value.textContent = counterValue;
});

btnPlus.addEventListener('click', () => {
    counterValue++
    value.textContent = counterValue;
});