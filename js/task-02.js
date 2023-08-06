const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ing = document.querySelector("#ingredients")
ingredients.map((list) => {
  const li = document.createElement("li");
  li.textContent = list;
  li.classList.add("item");

  ing.append(li);

});
console.log(ing)