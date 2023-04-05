class EmployeeCard {
    #parent = null;
    #el = null;

    constructor(parentSelector, firstName, lastName, ocupation) {
        //TODO: validation of input data
        this.firstName = firstName;
        this.lastName = lastName;
        this.ocupation = ocupation;

        this.#el = document.createElement('div');
        this.#parent = document.querySelector(parentSelector);
        this.#parent.appendChild(this.#el);
        this.render();
    }

    getContent() {
        return `<div class="card">
        <img src="img_avatar.png" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>${this.firstName} ${this.lastName}</b></h4>
          <p>${this.ocupation}</p>
        </div>
      </div>`
    }

    render() {
        //Warning XSS attack, using simple way for now 
        this.#el.innerHTML = this.getContent();
    }
}