import { appState } from "../AppState.js";

class VMService {
  addMoney() {
    appState.money += 1;
  }
}

export const vmService = new VMService();
