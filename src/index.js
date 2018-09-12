module.exports = function check(str, bracketsConfig) {
  // your solution
  const slicedStr = str.split('');
  const stack = new Stack();
  slicedStr.forEach((char) => {
    isCharDependsToOpenOrClose(char, bracketsConfig);
  });

  if (stack.getLength() > 0) {
    return false;
  }
  return true;





  function isCharDependsToOpenOrClose(char, bracketsConfig) {
    bracketsConfig.forEach((config) => {
      if (config[0] === config[1]) {
        // handling special cases
        if (char === config[0]) {
          if (stack.getTopElement() === config[0]) {
            // if closing bracket has closing pair
            stack.pop();
            return;
          } else {
            stack.push(char);
            return;
          }
        }
      }
      if (char === config[0]) {
        // if char depends to open brackets
        stack.push(char);
        return;
      } else if (char === config[1]) {
        // if char depends to close brackets
        if (stack.getTopElement() === config[0]) {
          // if closing bracket has closing pair
          stack.pop();
          return;
        } else {
          stack.push(char);
          return;
        }
      }
    });
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop(element) {
    this.stack.pop();
  }

  getTopElement() {
    if (this.stack.length === 0) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }

  getLength() {
    return this.stack.length;
  }

  printStack() {
    console.log(this.stack);
  }
}
