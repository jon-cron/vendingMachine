import { Value } from "./Models/Value.js";
import { VMItem } from "./Models/VM.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", [Value]);

  VMItems = [
    new VMItem("candybar", "🍫", 480, 2),
    new VMItem("cookie", "🍪", 240, 3),
    new VMItem("bacon", "🥓", 1000, 10),
  ];
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
