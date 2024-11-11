import './style.css'

/*
Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.
In the newly returned array, every object must have a val key and the input array's number as a value.
For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].
 */

function transformToObjects(numberArray) {
    return numberArray.map((item)=> {
      return {
            val: item
          };
        }
    )
}

const listOfNumbers = [1, 2, 3]
const result = transformToObjects(listOfNumbers);
console.log(result)
