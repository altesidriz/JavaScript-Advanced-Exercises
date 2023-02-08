function lockedProfile() {
    let unlocked = Array.from(document.querySelectorAll('input[value=unlock]'));
    let locked = Array.from(document.querySelectorAll('input[value=lock]'));

    for(let radio of unlocked){
            radio.addEventListener('click', radioSelect);
    }

    function radioSelect(ev){
        ev.target.parentNode.querySelector('button').addEventListener('click', moreInfo);
    }

    // for(let radio of locked){
    //     if(radio.checked == true){
    //         radio.parentNode.querySelector('button').textContent = 'youOk';
    //     }
    // }


    
    // let buttons = Array.from(document.querySelectorAll('button'));
    // buttons.forEach(b => {
    //     b.addEventListener('click', moreInfo)
    // });

    function moreInfo(ev) {
        let show = ev.target.parentNode.querySelector('div');
        let userInfo = document.getElementById(show.id);
        userInfo.style.display = 'block';
        
    }
}