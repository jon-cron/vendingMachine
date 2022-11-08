import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

export class VMController {
  constructor() {
    this.drawVMItems();
  }
  drawVMItems() {
    let template = "";
    let items = appState.VMItems;
    items.forEach((i) => (template += i.ListTemplate));
    setHTML("items", template);
    console.log(items);
  }
}
