// My math module

//initializing integers
const integers = [1, 2, 3, 4, 5];

//Squares the value of each element
squared = x => x**x 
const integerSquared  = integers.map(squared);
console.log("The squared values for the integers are: ");
console.table(integerSquared);

//Gets the sum of squared values
const sumOfSquares = integerSquared.reduce((previous, current) => previous+ current, 0);
console.log(`The sum of squares are: ${sumOfSquares}`);

//Returns the squareroot of the values
const rootedSumOfSquares = Math.sqrt(sumOfSquares);
console.log(`Square rooted sum of squares: ${rootedSumOfSquares}`)
