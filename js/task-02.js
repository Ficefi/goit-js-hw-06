const list = document.querySelector("#ingredients");
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const lis = [];

ingredients.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  li.className = "item";
  lis.push(li);
});

list.append(...lis);