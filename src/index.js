import "./index.css";
import {loadHome} from "./home-module.js";
import {loadMenu} from "./menu-module.js";
import {loadContact} from "./contact-module.js";

//initial load
loadHome();

const navBar = document.querySelector(".nav-bar");

// listen to the nav click
navBar.addEventListener("click",(e) => {
    const target = e.target;

    if (target.tagName === "BUTTON") {
        switch (target.id) {
            case "btn-home":
                loadHome();
                break;
            case "btn-menu":
                loadMenu();
                break;
            case "btn-contact":
                loadContact();
                break;
            default:
                break;
        }
    }
})



console.log('Hello, Restaurant Page!');