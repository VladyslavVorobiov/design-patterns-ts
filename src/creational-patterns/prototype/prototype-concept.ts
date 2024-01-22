interface IProtoType {
  clone(): this;
  // The clone is deep or shallow.
  // It is up to you how you want to implement
}

class MyClass implements IProtoType {
  // A Concrete Class
  field: number[];

  constructor(field: number[]) {
    this.field = field;
  }

  clone() {
    const clone = structuredClone(this);

    Object.setPrototypeOf(clone, Object.getPrototypeOf(this));

    return clone;
    // ! consider [[prototype]] if it is needed
  }
}

// The Client
const OBJECT1 = new MyClass([1, 2, 3, 4]);

const OBJECT2 = OBJECT1.clone(); // Clone
// Change the value of one of the array elements in OBJECT2
// Depending on your clone method, either a shallow or deep copy was performed
OBJECT2.field[1] = 101;

// Comparing OBJECT1 and OBJECT2
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`);
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`);
