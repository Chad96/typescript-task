var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.validateNumbers = function (a, b) {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Inputs must be numbers");
        }
    };
    Calculator.prototype.add = function (a, b) {
        this.validateNumbers(a, b);
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        this.validateNumbers(a, b);
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        this.validateNumbers(a, b);
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        this.validateNumbers(a, b);
        if (b === 0) {
            return "Division by zero is not allowed";
        }
        return a / b;
    };
    return Calculator;
}());
// Example usage:
var calculator = new Calculator();
console.log(calculator.add(10, 5)); // 15
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(10, 5)); // 50
console.log(calculator.divide(10, 5)); // 2
console.log(calculator.divide(10, 0)); // "Division by zero is not allowed"
