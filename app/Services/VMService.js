import { appState } from "../AppState.js";

class VMService {
  setActive(name) {
    let item = appState.VMItems.find((i) => i.name == name);
    appState.activeItem = item;
    this.buyItem();
  }
  addMoney() {
    appState.money += 1;
  }
  buyItem() {
    let item = appState.activeItem;
    if (appState.money >= item.price) {
      appState.money -= item.price;
      appState.myVMItems = [...appState.myVMItems, item];
      console.log(appState.myVMItems);
    } else return window.alert("poor");
  }
}

export const vmService = new VMService();
