export class VMItem {
  constructor(data) {
    this.name = data.name;
    this.emoji = data.emoji;
    this.kcal = data.kcal;
    this.price = data.price;
  }

  get ListTemplate() {
    return `<div class="col-3 col-md-2 text-center btn m-1" onclick="app.vmController.setActive('${this.name}')">
    <h1>${this.emoji}</h1>
    <h2>${this.name}</h2>
    <h6>Kcal: ${this.kcal}</h6>
    <h2>$${this.price}</h2>
  </div>`;
  }
  get MyItemsTemplate() {
    return `<div class="col-3 col-md-2 text-center btn m-1">
    <h1>${this.emoji}</h1>
    <h2>${this.name}</h2>
    <h6>Kcal: ${this.kcal}</h6>
  </div>`;
  }
}
