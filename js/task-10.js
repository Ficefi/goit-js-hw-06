function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDelete = document.querySelector("[data-destroy]")
const boxes = document.querySelector("#boxes");
const output = document.querySelector("input");

btnCreate.addEventListener("click", () => {
  const list = [];
  if (boxes.innerHTML !== '') {
    boxes.innerHTML = '';
  }
  for (let i = 0; i < output.value; i++) {
    const div = document.createElement("div");
    div.style.width = `${40 + 10 * i}px`;
    div.style.height = `${40 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    list.push(div);
  }
  boxes.append(...list);
});

btnDelete.addEventListener("click", () => {
  boxes.innerHTML = '';
});