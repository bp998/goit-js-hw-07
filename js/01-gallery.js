import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
// DATA

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

gallery.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  } else {
    const original = e.target.dataset.original;
    console.log(original);
    const instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
`);

    instance.show();
  }
});
