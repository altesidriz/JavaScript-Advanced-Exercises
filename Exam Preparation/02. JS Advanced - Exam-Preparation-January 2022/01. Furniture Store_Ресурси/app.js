window.addEventListener('load', solve);

function solve() {
    const addButtonElement = document.getElementById('add');
    const modelInputElement = document.getElementById('model');
    const yearInputElement = document.getElementById('year');
    const descriptionInputElement = document.getElementById('description');
    const priceInputElement = document.getElementById('price');
    const furnitureListElement = document.getElementById('furniture-list');
    const totalPriceElement = document.querySelector('.total-price');

    addButtonElement.addEventListener('click', addClickHandler);

    function addClickHandler(e) {
        e.preventDefault();
        let year = Number(yearInputElement.value);
        let price = Number(priceInputElement.value);
        let model = modelInputElement.value;
        let descripion = descriptionInputElement.value;


        if (!model || !descriptionInputElement.value) {
            return;
        }
        if (year <= 0 && price <= 0) {
            return;
        }

        let rowElement = document.createElement('tr');
        let modelCellElement = document.createElement('td');
        let priceCellElement = document.createElement('td');
        let actionsCellElement = document.createElement('td');
        let moreInfoBtn = document.createElement('button');
        let buyBtn = document.createElement('button');
        let contentsRowElement = document.createElement('tr');
        let yearContentElement = document.createElement('td');
        let descripionContentElement = document.createElement('td');


        modelCellElement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);
        moreInfoBtn.textContent = 'More Info';
        moreInfoBtn.classList.add('moreBtn')

        moreInfoBtn.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') {
                e.currentTarget.textContent = 'Less Info';
                contentsRowElement.style.display = 'contents';
            } else {
                e.currentTarget.textContent = 'More Info';
                contentsRowElement.style.display = 'none';
            }
        })

        buyBtn.textContent = 'Buy it';
        buyBtn.classList.add('buyBtn');
        buyBtn.addEventListener('click', (e) => {
            rowElement.remove();
            contentsRowElement.remove();
            let current = Number(totalPriceElement.textContent);
            let totalPrice = current + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        })

        actionsCellElement.appendChild(moreInfoBtn);
        actionsCellElement.appendChild(buyBtn);

        rowElement.classList.add('info')

        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionsCellElement);

        yearContentElement.textContent = `Year: ${year}`;
        descripionContentElement.setAttribute('colspan', 3);
        descripionContentElement.textContent = `Description: ${descripion}`;

        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';

        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descripionContentElement);

        furnitureListElement.appendChild(rowElement);
        furnitureListElement.appendChild(contentsRowElement);

        yearInputElement.value = '';
        priceInputElement.value = '';
        modelInputElement.value = '';
        descriptionInputElement.value = '';
    }


}
