function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');

  let senteces = input.split('.').filter(s=> s != 0)

  while(senteces.length > 0) {
    let textForParagraph = senteces.splice(0,3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = textForParagraph;
    output.appendChild(p);
  }
}