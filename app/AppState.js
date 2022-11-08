import { Value } from "./Models/Value.js";
import { VMItem } from "./Models/VM.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", [Value]);

  money = 0;

  VMItems = [
    new VMItem({
      name: "candybar",
      emoji: "🍫",
      kcal: 480,
      price: 2,
    }),
    new VMItem({
      name: "cookie",
      emoji: "🍪",
      kcal: 240,
      price: 3,
    }),
    new VMItem({
      name: "bacon",
      emoji: "🥓",
      kcal: 1000,
      price: 10,
    }),
    new VMItem({
      name: "sushi",
      emoji: "🍣",
      kcal: 10000,
      price: 1,
    }),
    new VMItem({
      name: "carrot",
      emoji: "🥕",
      kcal: 5,
      price: 25,
    }),
  ];
  activeItem = null;
  money = 0;
  myVMItems = [];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
