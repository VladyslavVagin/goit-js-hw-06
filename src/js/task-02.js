const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Choose element from HTML document (element 'ul')
const mainList = document.querySelector('#ingredients');

// Make function for creation list items 
const createListItems = ingredients => {
  return ingredients.map(ingredient => {
    const createItem = document.createElement('li');
    createItem.textContent = ingredient;
    createItem.classList.add('item');
    return createItem;
  })
}
// add new items to html document (using spread)
mainList.append(...createListItems(ingredients));

console.log(mainList);