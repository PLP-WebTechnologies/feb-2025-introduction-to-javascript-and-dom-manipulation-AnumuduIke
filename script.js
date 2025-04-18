// Change text content dynamically
const changeTextButton = document.getElementById('changeTextBtn');
const dynamicText = document.getElementById('dynamicText');

changeTextButton.addEventListener('click', () => {
    dynamicText.textContent = "The text has been updated dynamically!";
    dynamicText.classList.add('highlight');
});

// Modify CSS styles dynamically
const addElementButton = document.getElementById('addElementBtn');
const dynamicContent = document.getElementById('dynamicContent');

addElementButton.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = "This is a new paragraph added dynamically!";
    dynamicContent.appendChild(newElement);
});

// Remove an element dynamically
const removeElementButton = document.getElementById('removeElementBtn');

removeElementButton.addEventListener('click', () => {
    if (dynamicContent.lastChild) {
        dynamicContent.lastChild.classList.add('removed');
        setTimeout(() => {
            dynamicContent.removeChild(dynamicContent.lastChild);
        }, 500); // Add a slight delay for the effect
    }
});
