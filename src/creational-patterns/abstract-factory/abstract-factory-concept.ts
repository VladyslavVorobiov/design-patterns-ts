// Abstract Factory Concept Sample Code
import { FactoryA } from "./factory-a";
import { FactoryB } from "./factory-b";

export interface IProduct {
  name: string;
}

class AbstractFactory {
  // The Abstract Factory Concrete Class

  static createFactory(type: string): typeof FactoryA | typeof FactoryB {
    try {
      if (["aa", "ab", "ac"].includes(type)) {
        return FactoryA;
      }
      if (["ba", "bb", "bc"].includes(type)) {
        return FactoryB;
      }
      throw new Error("No Factory Found");
    } catch (e) {
      console.log(e);
    }

    return FactoryA;
  }
}

// The Client
let PRODUCT_ab = AbstractFactory.createFactory("ab").getObject("b");

let PRODUCT_bc = AbstractFactory.createFactory("bc").getObject("c");
