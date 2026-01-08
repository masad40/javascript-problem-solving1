
// Problem 7: Find Even Numbers

function findEvenNumbers(arr) {
  let even = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  return even;
}

console.log(findEvenNumbers([1,2,3,4,5,6]));