import fibs from "./Assigment1/fibs.js";
import fibsRec from "./Assigment1/fibsRec.js";

const num = 10; // Change this number for test it

const fibsIterationResult = fibs(num);
const fibsRecursionResult = fibsRec(num);

console.log(
  `(With iteration): Limit: ${num}, Sequence: ${JSON.stringify(
    fibsIterationResult
  )}`
);

console.log( `(With recursion): Limit: ${num}, Sequence: ${JSON.stringify(
  fibsRecursionResult
)}`);
