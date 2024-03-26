import fibs from './Assigment1/fibs.js';
import fibsRec from './Assigment1/fibsRec.js';
import mergeSort from './Assigment2/mergeSort.js';

const num = 10; // Change this number for test it
const myArray = [3, 2, 1, 13, 8, 5, 0, 1]; // Change this array for test it

const fibsIterationResult = fibs(num);
const fibsRecursionResult = fibsRec(num);
const mergeSortResult = mergeSort(myArray);

console.log('\n');
console.log('# Assigment 1:');
console.log('==============\n');

console.log(
  `(With iteration): Limit: ${num}, Sequence: ${JSON.stringify(
    fibsIterationResult
  )}\n`
);

console.log( `(With recursion): Limit: ${num}, Sequence: ${JSON.stringify(
  fibsRecursionResult
)}\n`);


console.log('# Assigment 2:');
console.log('==============\n');

console.log(`The unordered array 'BEFORE' the function call is: ${JSON.stringify(myArray)}\n`);

console.log(`The ordered array 'AFTER' the function call is: ${JSON.stringify(mergeSortResult)}\n`);