import heroImage from "./asset/resource/hero.jpg";

export function loadHome() {
    const header = document.querySelector("header");
    
    if (!document.querySelector("figure")) {
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
        const navListItemNames = ["Home","Menu","Contact"];

        for (let i = 0; i < 3; i++) {
            const listItemElement = document.createElement("li");
            const buttonElement = document.createElement("button");
            buttonElement.id = "btn" + "-" + navListItemNames[i].toLowerCase();
            buttonElement.textContent = navListItemNames[i];

            listItemElement.appendChild(buttonElement);
            navListElement.appendChild(listItemElement);
        }

        navigationElement.appendChild(navListElement);
        header.appendChild(navigationElement);
    }
    
    

    //content container
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";
    // new elements
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");
    const descriptionHeading = document.createElement("h2");
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.classList.add("description");
    descriptionHeading.textContent = "Mam Qal Restaurant";
    descriptionParagraph.textContent = "Experience a cozy retreat where fresh, locally-sourced ingredients meet authentic, home-cooked flavors. Our warm atmosphere and artisanal dishes offer a perfect escape for food lovers seeking comfort in every bite.";

    descriptionContainer.appendChild(descriptionHeading);
    descriptionContainer.appendChild(descriptionParagraph);

    // add new elements to the container
    contentContainer.appendChild(descriptionContainer);
}