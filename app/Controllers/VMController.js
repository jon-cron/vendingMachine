import { appState } from "../AppState.js";
import { vmService } from "../Services/VMService.js";
import { setHTML, setText } from "../Utils/Writer.js";

export class VMController {
  constructor() {
    this.drawVMItems();
    this.drawWallet();
    this.drawMyItems();
    appState.on("money", this.drawWallet);
    appState.on("myVMItems", this.drawMyItems);
  }
  drawVMItems() {
    let template = "";
    let items = appState.VMItems;
    items.forEach((i) => (template += i.ListTemplate));
    setHTML("items", template);
  }
  drawMyItems() {
    console.log("drawing my list");
    let myItems = appState.myVMItems;
    let template = "";
    myItems.forEach((i) => (template += i.MyItemsTemplate));
    setHTML("myItems", template);
  }
  setActive(name) {
    vmService.setActive(name);
  }
  drawWallet() {
    setText("wallet", appState.money);
  }
  moneyController() {
    vmService.addMoney();
    this.drawWallet();
  }
}
