console.log("New language learning has started!");

const fs = require('fs');

const a = 2;
const b = 22;

const sum = a + b;
const product = a * b;

// Use template literals correctly (backticks + ${variable})
const data = `Sum: ${sum} and Product: ${product}`;

// Correct the file name string and error handling
fs.writeFile('first_file.txt', data, (err) => {
  if (err) throw new Error('Error while writing to the file');
  console.log('File written successfully!');
});
