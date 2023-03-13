import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
// DATA

galleryItems.forEach((n) => {
  const image = `
  <a class="gallery__item" href="${n.original}">
    <img
      class="gallery__image"
      src="${n.preview}"
      alt="${n.description}"
      data-source="${n.original}"
  /></a>
`;
  gallery.insertAdjacentHTML("beforeend", image);
});

var lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
