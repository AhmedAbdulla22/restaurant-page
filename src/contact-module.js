export function loadContact() {
    //content container
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";
    // new elements
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    
    const contactHeading = document.createElement("h1");
    const hrElement = document.createElement("hr");
    contactHeading.textContent = "Contact";
    const contact1Heading = document.createElement("h2");
    contact1Heading.textContent = "Contact-1";
    const contact1Paragraph = document.createElement("p");
    contact1Paragraph.textContent = " 0770-XXX-XXXX";
    
    const contact2Heading = document.createElement("h2");
    contact2Heading.textContent = "Contact-2";
    const contact2Paragraph = document.createElement("p");
    contact2Paragraph.textContent = " 0750-XXX-XXXX";





    contactContainer.appendChild(contactHeading);
    contactContainer.appendChild(hrElement);
    contactContainer.appendChild(contact1Heading);
    contactContainer.appendChild(contact1Paragraph);
    contactContainer.appendChild(contact2Heading);
    contactContainer.appendChild(contact2Paragraph);


    // add new elements to the container
    contentContainer.appendChild(contactContainer);
}