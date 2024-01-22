// FactoryA Sample Code

import { IProduct } from "./abstract-factory-concept";

class ConcreteProduct implements IProduct {
  name = "";
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = "FactoryA:ConcreteProductA";
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = "FactoryA:ConcreteProductB";
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = "FactoryA:ConcreteProductC";
  }
}

export class FactoryA {
  static getObject(some_property: string): IProduct {
    try {
      if (some_property === "a") {
        return new ConcreteProductA();
      } else if (some_property === "b") {
        return new ConcreteProductB();
      } else if (some_property === "c") {
        return new ConcreteProductC();
      } else {
        throw new Error("Class Not Found");
      }
    } catch (e) {
      console.log(e);
    }
    return new ConcreteProduct();
  }
}
