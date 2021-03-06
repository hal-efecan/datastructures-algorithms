
// Basic Algorithm Scripting: Convert Celsius to FahrenheitPassed
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it 
// the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius 
// temperature to Fahrenheit.

function convertToF(celsius) {
    let cel = ((celsius*(9/5))+32)
    return cel;
  }
  
  console.log(convertToF(30));

// Basic Algorithm Scripting: Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
    let arr = str.split('')
    let newArr = arr.reverse().join('')
    return newArr;
  }

console.log(reverseString("hello"));

// Basic Algorithm Scripting: Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
        if(num === 0) {
            return 1;
        }

    return num * factorialize(num - 1) 
  }

console.log(factorialize(5));

// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    
    const words = str.split(' ')
    
    let wordObj = words.map((word, index) => {
        let wordItem = {
            length: word.length,
            index: index,
            word: word,
        }

        return wordItem
    })

    wordObj.sort((a, b) => {
        return a.length - b.length
    })

    let longestWordObj = wordObj[wordObj.length-1]
    let longestWord = longestWordObj.length
    return longestWord;
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog") // should return a number.
// findLongestWordLength("The quick brown fox jumped over the lazy dog") // should return 6.
// findLongestWordLength("May the force be with you") // should return 5.
// findLongestWordLength("Google do a barrel roll") // should return 6.
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") // should return 8.
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") // should return 19.

// Basic Algorithm Scripting: Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {

    let largestArr = []
        arr.forEach(item => {
            item.sort((a,b) => a - b)
            let largestNum = item.pop()
            largestArr.push(largestNum)
        })

    return largestArr;
  }

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])) // should return an array.

// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you 
// to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {

    let lowerCase = str.split('').map(ele => {
        return ele.toLowerCase()
    })

    let rev = lowerCase.reverse()
    let trg = target.split('')

    let sep = rev.splice(0, trg.length)
    let back = sep.reverse()
    
    let t = trg.join('')
    let b = back.join('')

    if(t === b) { 
        return true 
    } else { 
        return false 
    }
}

// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Abstraction", "action")) // should return true.
// console.log(confirmEnding("Congratulation", "on"))
// console.log(confirmEnding("Connor", "n"))
// console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"))
// console.log(confirmEnding("He has to give me a new name", "name"))

// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {

    let arr = []
    for(let i=0; i<num; i++) {
        arr.push(str)
    }

    let result = arr.join('')
    
    return result
  }
  
console.log(repeatStringNumTimes("abc", 3));

// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    
    const strArr = str.split('')
    
    let newArr = strArr.filter(ele => {
        if(ele !== '') {
            return ele 
        } 
    })

    let oth = []
    
    if( num < newArr.length ){

        newArr.forEach((ele, idx )=> {
            console.log(ele, idx)
            if(idx < num) {
                oth.push(ele)
            }  
        })

        oth.push('...')
        let final = oth.join('')
        return final

    } else {

        newArr.forEach((ele, idx )=> {
            console.log(ele, idx)
            if(idx < num) {
                oth.push(ele)
            }  
        })

        let final = oth.join('')
        oth.push('...')
        return final
    }
  }

  // console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  // console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
  // console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))

// Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.

function findElement(arr, func) {
    let num = 0;   
    let newArr = []

    arr.forEach(ele => { 
        if(func(ele)) {
            newArr.push(ele)
        }
    })

    let passed = newArr[0]
    return passed;
  }

  // console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
  // console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }))
  // console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
    if(typeof bool === "boolean") {
        return true
    } else {
        return false
    }
}

console.log(booWho(true))
console.log(booWho(false))
console.log(booWho([1, 2, 3]))
console.log(booWho([].slice))

// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// /^\S|\b[a-zA-Z](?<!')\B/gm

function titleCase(str) {
    
    let firstLetters = /^\S|\b[a-zA-Z](?<!')\B|a/gm
    let otherLetters = /^|(?<!\s)\w/gm

    s1 = str.replace(firstLetters, (match) => {
        return match.toUpperCase()
    }). replace(otherLetters, (match) => {
        return match.toLowerCase()
    })

    return s1
}

// console.log(titleCase("I'm a little tea pot")) 
// console.log(titleCase("I'm a little tea pot")) 
// console.log(titleCase("sHoRt AnD sToUt"))
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))

// Basic Algorithm Scripting: Slice and Splice
// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let newArr = arr1.slice(0, arr1.length)
    let copy2 = [...arr2]
    copy2.splice(n, 0, newArr)
    let final = copy2.flat()
    return final;
  }

// frankenSplice([1, 2, 3], [4, 5, 6], 1);
// frankenSplice([1, 2, 3], [4, 5], 1)
// frankenSplice([1, 2], ["a", "b"], 1)

// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {

    let truth = []
    arr.forEach(ele => {
        if(ele) {
            truth.push(ele)
        }
    })

    return truth;
}
  
bouncer([7, "ate", "", false, 9]);


// Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number. For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), 
// but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] 
// and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {

    let newArr = [...arr, num]
    let sorted = newArr.sort((a,b) => {
        return a - b
    })
    const idx = sorted.indexOf(num)
    return idx;
}

// getIndexToIns([40, 60], 50); // should return 1
// getIndexToIns([10, 20, 30, 40, 50], 35) // should return 3
getIndexToIns([3, 10, 5], 3)


// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    let first = arr[0].toLowerCase()
    let f = first.split('')

    let second = arr[1].toLowerCase()
    let s = second.split('')

    let falseArr = []

    s.forEach(letter => {
        if(f.includes(letter)) {
            letter
        } else {
            falseArr.push(letter)
        }
    })

    if(falseArr.length > 0) {
        return false 
    } else {
        return true
    }
}

// console.log(mutation(["hello", "hey"]))
// console.log(mutation(["Mary", "Aarmy"]));
// console.log(mutation(["hello", "Hello"]))
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])

// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns 
// them as a two-dimensional array.

function chunkArrayInGroups(arr, size) { 

    if(arr.length % size === 0) {
        let final = []
        let i = 0;
        let numArr = arr.length/size

        while(i < numArr) {
            final.push(arr.splice(0, size))
            i++
        }
        return final

    } else {

        let i = 0
        let newArr = []
        while(i <= arr.length) {
            newArr.push(arr.splice(0, size))
            i++
        }
        if(arr.length === 0) {
            return newArr         
        } else {
            return newArr.concat([arr])
        }
    }
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // should return [[0, 1, 2], [3, 4, 5], [6]]
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)) // [[0, 1], [2, 3], [4, 5]]
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))