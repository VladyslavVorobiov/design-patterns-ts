// The Factory Concept

interface IProduct {
  name: string;
}

class Product implements IProduct {
  name = "";
}

class ProductA extends Product {
  constructor() {
    super();
    this.name = "ProductA";
  }
}

class ProductB extends Product {
  constructor() {
    super();
    this.name = "ProductB";
  }
}

class ProductC extends Product {
  constructor() {
    super();
    this.name = "ProductC";
  }
}

class ProductCreator {
  static createObject(type: string): IProduct {
    if (type === "a") {
      return new ProductA();
    } else if (type === "b") {
      return new ProductB();
    } else {
      return new ProductC();
    }
  }
}

// The Client
const PRODUCT = ProductCreator.createObject("b");
