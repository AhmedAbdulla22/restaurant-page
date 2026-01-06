export function loadMenu() {
    //content container
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";
    // new elements
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    
    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Menu";
    const menuBeveragesHeading = document.createElement("h2");
    menuBeveragesHeading.textContent = "Beverages";
    const menuBeveragesUList = document.createElement("ul");
    const beverages = [{name:"Soda Drink",price: 500,},{name:"Milk",price: 500,},{name:"Malt Drink",price: 1000,}];
    beverages.forEach((beverage) => {
        const beverageListItem = document.createElement("li");
        beverageListItem.textContent = `${beverage.name} --- ${beverage.price} iqd`;
        menuBeveragesUList.appendChild(beverageListItem);
    })


    const menuFoodsHeading = document.createElement("h2");
    menuFoodsHeading.textContent = "Foods";
    const menuFoodsUList = document.createElement("ul");
    const foods = [{name:"Kebab",price: 5000,},{name:"Ramen Bowl",price: 5000,},{name:"Burger Beef",price: 4000,},{name:"Zinger",price: 2000,}];
    foods.forEach((foods) => {
        const foodsListItem = document.createElement("li");
        foodsListItem.textContent = `${foods.name} --- ${foods.price} iqd`;
        menuFoodsUList.appendChild(foodsListItem);
    })

    







    menuContainer.appendChild(menuHeading);
    menuContainer.appendChild(menuBeveragesHeading);
    menuContainer.appendChild(menuBeveragesUList);
    menuContainer.appendChild(menuFoodsHeading);
    menuContainer.appendChild(menuFoodsUList);

    // add new elements to the container
    contentContainer.appendChild(menuContainer);
}