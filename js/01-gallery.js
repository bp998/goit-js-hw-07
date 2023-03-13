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
      data-source="${n.original}"
  /></a>
</div>`;
  gallery.insertAdjacentHTML("beforeend", image);
});

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  } else {
    const source = e.target.dataset.source;
    console.log(source);
    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`);

    instance.show();
  }
});

const close = (e) => {
  const visible = basicLightbox.visible();
  if (visible === true && e.key === "Escape") {
    basicLightbox.close();
  }
  gallery.addEventListener("keydown", close);
};

document.addEventListener("keydown", (event) => {
  console.log(event.key);
});
