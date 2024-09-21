//importing the 'fs' module (like a library in Python)
const fs = require('fs');

//defining what the function will do
function FileProcessing(inputFilePath, outputFilePath) {
    //utf8 translates the string into text (not into an integer/number but so that a human can rad it)
    let readFile = fs.readFileSync(inputFilePath, 'utf8');

    // Splitting the file contents,so the machine can read it as an array/set
    let lines = readFile.split('\n');

    // Creating the Set to store unique integers,using a set makes sure thers no duplicates
    let uniqueIntegers = new Set();

    // This makes sure that the file is read line by line, trimming spaces, and skipping blank lines
    for (let line of lines) {
        line = line.trim();  // Removing any extra spaces before or after the line
        if (line === '') continue;   
       
        let number = parseInt(line);

        // Checking if the line is a valid number; if yes, add it to the set
        if (!isNaN(number)) {
            uniqueIntegers.add(number);
        }
    }

    // Sorting the numbers in ascending order
    let finalUniqueIntegers = Array.from(uniqueIntegers).sort((a, b) => a - b);

    // Joining the sorted numbers with a newline between them for the output file
    let finalProduct = finalUniqueIntegers.join('\n');

    // Writing the final result to the output file
    fs.writeFileSync(outputFilePath, finalProduct, 'utf8');
    console.log('process completed');
}
