interface ICalculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number | string;
}

class Calculator implements ICalculator {
  private validateNumbers(a: any, b: any): void {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Inputs must be numbers");
    }
  }

  public add(a: number, b: number): number {
    this.validateNumbers(a, b);
    return a + b;
  }

  public subtract(a: number, b: number): number {
    this.validateNumbers(a, b);
    return a - b;
  }

  public multiply(a: number, b: number): number {
    this.validateNumbers(a, b);
    return a * b;
  }

  public divide(a: number, b: number): number | string {
    this.validateNumbers(a, b);
    if (b === 0) {
      return "Division by zero is not allowed";
    }
    return a / b;
  }
}

// Testing the usage:
const calculator = new Calculator();
console.log(calculator.add(10, 5)); // 15
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(10, 5)); // 50
console.log(calculator.divide(10, 5)); // 2
console.log(calculator.divide(10, 0)); // "Division by zero is not allowed"
