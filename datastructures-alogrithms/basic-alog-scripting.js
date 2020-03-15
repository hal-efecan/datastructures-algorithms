
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

findLongestWordLength("The quick brown fox jumped over the lazy dog") // should return a number.
// findLongestWordLength("The quick brown fox jumped over the lazy dog") // should return 6.
// findLongestWordLength("May the force be with you") // should return 5.
// findLongestWordLength("Google do a barrel roll") // should return 6.
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") // should return 8.
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") // should return 19.
*/