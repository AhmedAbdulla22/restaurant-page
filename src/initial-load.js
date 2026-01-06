import heroImage from "./asset/resource/hero.jpg";

export function loadHome() {
    const header = document.querySelector("header");
    // clear header
    header.innerHTML = '';

    // create new elements
    const figureElement = document.createElement("figure");
    const heroImageElement = document.createElement("img");
    const figCaptionElement = document.createElement("figcaption");
    const figCaptionParagraphElement = document.createElement("p");
    const restaurantNameParagraphElement = document.createElement("p");
    const navigationElement = document.createElement("nav");


    // figure
    figureElement.classList.add("hero-figure");
    heroImageElement.src = heroImage;
    heroImageElement.alt = "restaurant image";

    figureElement.appendChild(heroImageElement);
    header.appendChild(figureElement);

    // figcaption
    figCaptionParagraphElement.textContent = "Photo by ";

    restaurantNameParagraphElement.classList.add("restaurant-name");
    restaurantNameParagraphElement.textContent = "Mam Qal";

    header.appendChild(figCaptionElement);
    header.appendChild(restaurantNameParagraphElement);

    // nav
    navigationElement.classList.add("nav-bar");
    const navListElement = document.createElement("ul");
    const navListItemNames = ["Home","Menu","About"];

    for (let i = 0; i < 3; i++) {
        const listItemElement = document.createElement("li");
        const buttonElement = document.createElement("button");
        buttonElement.textContent = navListItemNames[i];

        listItemElement.appendChild(buttonElement);
        navListElement.appendChild(listItemElement);
    }

    navigationElement.appendChild(navListElement);
    header.appendChild(navigationElement);
}