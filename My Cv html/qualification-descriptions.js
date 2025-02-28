function showDescription(element, description) {
    // Remove any existing descriptions
    let existingDescription = element.querySelector(".description");
    if (existingDescription) {
        existingDescription.remove();
        return;
    }

    // Create a new description element
    let desc = document.createElement("p");
    desc.classList.add("description");
    desc.style.color = "#666"; // Text color
    desc.style.marginTop = "5px";
    desc.innerText = description;

    // Append it below the clicked item
    element.appendChild(desc);
}
