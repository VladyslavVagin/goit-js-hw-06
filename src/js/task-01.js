
// Searchimg number of categories 
const numbOfCategories = document.querySelector('#categories');
// Transform pseudo-array to array 
const arrayOfCat = Array.from(numbOfCategories.children);

console.log("Number of categories:", arrayOfCat.length);  /*receive number of categories 3 */
// ====================================================

// Searching for titles and numbers of elements of first category
const showInfoAboutCategories = arrayOfCat.forEach(category => console.log('Category:', category.firstElementChild.textContent, 'has', category.lastElementChild.children.length, 'Elements:)'));



