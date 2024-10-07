// promise based 
function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        reject('Invalid input: Both arguments must be numbers');
        return;
      }
  
      switch (operation) {
        case '+':
          resolve(num1 + num2);
          break;
        case '-':
          resolve(num1 - num2);
          break;
        case '*':
          resolve(num1 * num2);
          break;
        case '/':
          if (num2 === 0) {
            reject('Division by zero is not allowed');
          } else {
            resolve(num1 / num2);
          }
          break;
        default:
          reject('Invalid operation');
      }
    });
  }
  
  
  calculate(10, 5, '+')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));
  
  calculate(10, 0, '/')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));
  
  calculate(10, 5, '%')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));
  

  
  
//   Iterator Based 
  
  
  class SquareIterator {
    constructor(array) {
      this.array = array;
      this.index = 0;
    }
  
    next() {
      if (this.index < this.array.length) {
        const value = this.array[this.index] ** 2;
        this.index++;
        return { value, done: false };
      }
      return { done: true };
    }
  
    [Symbol.iterator]() {
      return this;
    }
  }
  
  
  const numbers = [5 ,12,23, 26, 35];
  const squareIterator = new SquareIterator(numbers);
  
  for (const square of squareIterator) {
    console.log(square);
  }
  
  
//   Generator Based
  function* generatePrimes(limit) {
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
  
    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        yield num;
      }
    }
  }
  
  const primeLimit = 20;
  const primeGenerator = generatePrimes(primeLimit);
  
  for (const prime of primeGenerator) {
    console.log(prime);
  }
  