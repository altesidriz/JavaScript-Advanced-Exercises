function toggle() {
    let text = document.getElementById('extra');
    let buttonElement = document.getElementsByClassName('button')[0]; //getElementByTagNames;

    if(buttonElement.textContent == 'More'){
        buttonElement.textContent = 'Less';
        text.style.display = 'block';
    }else{
        buttonElement.textContent = 'More';
        text.style.display = 'none';
    }
}