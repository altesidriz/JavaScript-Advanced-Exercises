function search() {
   let listElements = document.querySelectorAll('ul#towns li');
   let resultElement = document.getElementById('result');
   let searchText = document.getElementById('searchText').value;
   let matches = 0;

   // for (let element of listElements){
   //    element.style.fontWeight = 'normal';
   //    element.style.textDecoration = '';
   // }

   for (let element of listElements) {

      element.style.fontWeight = 'normal';
      element.style.textDecoration = '';
      let text = element.textContent;

      if (text.match(searchText)) {
         matches++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }
   }
   resultElement.textContent = `${matches} matches found`
}

// let input = document.getElementById('searchText').value;
// let towns = Array.from(document.querySelectorAll('li'));
// let counter = 0;
// for (const town of towns) {
//    if(town == input){
//       towns[town] = town.style.font = 'bold';
//       towns[town] = town.style.font = 'underline';
//       counter++;
//    }
// }
// document.getElementById('result').value = `${counter} matches found!`;