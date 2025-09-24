const syntaxErrorExample = require('./syntaxError');
const logicalErrorExample = require('./logicalError');
const runtimeErrorExample = require('./runtimeError');
const addProduct = require('./product');

// Run error examples
// syntaxErrorExample(); // Uncomment to test syntax error
logicalErrorExample();
runtimeErrorExample();

// Add a product
const product = addProduct("Keyboard", 49.99);
console.log("Product Added:", product);
