const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Take container ul from HTML 
const galleryContainer = document.querySelector('.gallery');

// create items of gallery 
const elements = images.map(({ url, alt }) =>
  `<li class="item"><img src="${url}" alt="${alt}" class="image"></img></li>`).join('');

// add elements of gallery to gallery-container 
galleryContainer.insertAdjacentHTML("afterbegin", elements);

// show result in console
console.log(galleryContainer);