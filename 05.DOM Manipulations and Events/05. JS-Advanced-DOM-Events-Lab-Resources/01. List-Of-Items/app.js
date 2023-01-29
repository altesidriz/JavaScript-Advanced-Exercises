function addItem() {
    // slect input field an read it's value
    const input = document.getElementById('newItemText');

    // create <li> element and assignt input value to element text content
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    // select <ul> and append new element
    document.getElementById('items').appendChild(liElement);
    
    // slelect input field and clear content
    input.value = '';
}