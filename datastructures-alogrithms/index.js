// Intermediate Algorithm Scripting: Sum All Numbers in a RangePassed
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    let [ a, b ] = arr
    let newArr = []

    if(a > b) { 
        while(b < a) {
            newArr.push(b)
            b++
        }
        newArr.push(b)
    } else {
        while(a < b) {
            newArr.push(a)
            a++
        }
        newArr.push(a)
    }

    let sum = newArr.reduce((cv, acc) => {
        return cv + acc
    })
    return sum
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]))
console.log(sumAll([5, 10])) // should return 45.
console.log(sumAll([10, 5])) // should return 45.


// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.


function diffArray(arr1, arr2) {
    let mySet = new Set([...arr1, ...arr2 ])
    let unq = Array.from(mySet)
    
    let newArr1 = unq.filter( ele => {
        return arr1.indexOf(ele) === -1 
    })
    
    let newArr2 = unq.filter( ele => {
        return arr2.indexOf(ele) === -1 
    })
    
    let final = [...newArr1, ...newArr2 ]
    
    return final;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

function destroyer(...args) {
    
    let arr = [...args]    
    let firstPart = arr.splice(0,1).flat() 
    let argsArr = arr

    let newArr = []

    firstPart.filter(item => {
        let notHere = argsArr.indexOf(item) === -1
        if(notHere === true) {
            return newArr.push(item)
        }
    })

    return newArr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  