import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(galleryItems){
    return galleryItems.map(({preview, description})=>{
        return `<a class='gallery__link' href='#'>
        <img  class='gallery__image' src ='${preview}' alt ='${description}'>
        </a>`;}).join('');
}



