function create(words) {
   words.forEach(e => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.innerText = e;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', visible);
      document.getElementById('content').appendChild(div);
   });
   //p.addEventListener('click', no);


   function visible(event) {
      if (event.target.nodeName == 'P') {
         return;
      }
      let p = event.target.children[0];
      p.style.display = 'block'
   }
}