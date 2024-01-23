// Decorator Concept Sample Code

interface IComponent {
  method(): string;
}

class Component implements IComponent {
  method(): string {
    return "Component Method";
  }
}

class Decorator implements IComponent {
  #object: IComponent;

  constructor(object: IComponent) {
    this.#object = object;
  }

  method(): string {
    return `Decorator Method(${this.#object.method()})`;
  }
}

// The Client
const COMPONENT = new Component();

// The component can be decorated
const Decorated = new Decorator(COMPONENT);

// The decorated component can be decorated again
const Decorated2 = new Decorator(Decorated);
