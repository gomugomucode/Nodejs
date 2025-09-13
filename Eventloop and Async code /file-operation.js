

const fs = require('fs');

// First, let's create a sample file to read
const sampleContent = `This is a sample file for demonstrating
synchronous and asynchronous file operations.
Line 1 of the file.
Final line of content.`;

// Create the sample file
fs.writeFileSync('user-details.txt', sampleContent);

console.log('2. Start of script');

// Synchronous (blocking) operation
console.log('3. Reading file synchronously...');
const dataSyncFile = fs.readFileSync('user-details.txt', 'utf8');
console.log('4. Synchronous read complete');

console.log('Synchronous file content:');
console.log(dataSyncFile);
console.log('---');

// Asynchronous (non-blocking) operation
console.log('5. Reading file asynchronously...');
fs.readFile('user-details.txt', 'utf8', (err, dataAsync) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('6. Asynchronous read complete');
    console.log('Async file content:');
    console.log(dataAsync);
});

console.log('7. End of script');

// Clean up - delete the sample file after a delay
setTimeout(() => {
    fs.unlinkSync('user-details.txt');
    console.log('Sample file cleaned up');
}, 2000);




