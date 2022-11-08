export class VMItem {
  constructor(name, emoji, kcal, price) {
    this.name = name;
    this.emoji = emoji;
    this.kcal = kcal;
    this.price = price;
  }

  get ListTemplate() {
    return `<div class="col-6 col-md-2 text-center btn m-1">
    <h1>${this.emoji}</h1>
    <h2>${this.name}</h2>
    <h6>Kcal: ${this.kcal}</h6>
    <h2>$${this.price}</h2>
  </div>`;
  }
}
