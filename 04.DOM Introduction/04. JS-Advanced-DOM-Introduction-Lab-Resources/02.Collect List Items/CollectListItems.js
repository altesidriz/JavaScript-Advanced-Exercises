function extractText() {
    const items = [...(document.querySelectorAll('li'))]; //Array.from(document.querySelectAll('li'));
    const result = items.map(e => e.textContent).join('\n');

    document.getElementById('result').value = result;
}   