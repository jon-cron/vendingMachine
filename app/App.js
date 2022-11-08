import { ValuesController } from "./Controllers/ValuesController.js";
import { VMController } from "./Controllers/VMController.js";

class App {
  // valuesController = new ValuesController();
  vmController = new VMController();
}

window["app"] = new App();
