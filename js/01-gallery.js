import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
// DATA

// const ul = document.createElement("ul");
// gallery.append(ul);

galleryItems.forEach((n) => {
  const image = `<div class="gallery__item">
  <a href="${n.original}">
    <img
      class="gallery__image"
      src="${n.preview}"
      alt="${n.description}"
      data-original="${n.original}"
  /></a>
</div>`;
  gallery.insertAdjacentHTML("beforeend", image);
});
console.log(galleryItems);
