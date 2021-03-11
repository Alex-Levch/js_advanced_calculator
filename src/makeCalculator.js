'use strict';

/**
 * Another calculator. Now the task is more difficult.
 * Create a `makeCalculator` function that returns an object that
 * has the following fields:
 *  - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 *  - The `result` property is initially 0.
 *
 * How the calculator will work:
 * - Each `operate` call takes a callback and a number and sets the
 *   appropriate value to the `result` property.
 * - The `reset` method resets `result` value to 0.
 * - `add`, `subtract`, `multiply`, `divide` are passed as callbacks to
 *   `operate` method
 * - The `operate` and `reset` methods can be called in a chain.
 *
 * Example:
 * const calculator = makeCalculator();
 *
 * calculator.operate(calculator.add, 21)
 * calculator.result === 21

 * calculator.reset()
 * calculator.result === 0

 * calculator
 *  .operate(calculator.add, 10)
 *  .reset()
 *  .operate(calculator.subtract, 20)
 *  .operate(calculator.divide, 5)
 *  .operate(calculator.multiply, 7)
 *
 * calculator.result === -28
 *
 *
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      calculator.result = 0;

      return this;
    },

    operate(method, value) {
      method(value);

      return this;
    },

    add(value) {
      return (calculator.result += value);
    },

    subtract(value) {
      return (calculator.result -= value);
    },

    multiply(value) {
      return (calculator.result *= value);
    },

    divide(value) {
      return (calculator.result /= value);
    },
  };

  return calculator;
}

module.exports = makeCalculator;

// const calculator = {
//   result: 0,

//   reset() {
//     this.result = 0;

//     return this;
//   },

//   operate(method, value) {
//     this.result = method.bind(this, value)();

//     return this;
//   },

//   add(num) {
//     return (this.result + num);
//   },

//   subtract(num) {
//     return (this.result - num);
//   },

//   multiply(num) {
//     return (this.result * num);
//   },

//   divide(num) {
//     return (this.result / num);
//   },
// };

// return calculator;
