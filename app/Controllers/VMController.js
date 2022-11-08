import { appState } from "../AppState.js";
import { vmService } from "../Services/VMService.js";
import { setHTML, setText } from "../Utils/Writer.js";

export class VMController {
  constructor() {
    this.drawVMItems();
    this.drawWallet();
  }
  drawVMItems() {
    let template = "";
    let items = appState.VMItems;
    items.forEach((i) => (template += i.ListTemplate));
    setHTML("items", template);
    console.log(items);
  }
  drawWallet() {
    setText("wallet", appState.money);
  }
  moneyController() {
    vmService.addMoney();
    this.drawWallet();
  }
}
