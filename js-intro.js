// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
console.log(mantra[0])
// 2. Write the code that determines if there is a 'x' in mantra.
console.log(mantra.includes('x'))
// 3. Write the code that determines if there is a 'v' in mantra.
console.log(mantra.includes('v'))
// Stretch: Write the code that returns the position of 'v' in mantra.
console.log(mantra.indexOf('v'))

// Consider the following statement:

var codingIsEasy = 1
var imBored = true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost = 0
var imFrustrated = ""

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
for(let i = 0; i < mantra.length; i++){
    console.log(mantra[i])
}

// Stretch: Using a while loop.
console.log("\n")
let j = 0
while(j != mantra.length){
    console.log(mantra[j])
    j++
}
// Super Stretch: Using forEach().
//let mantraArr = ["B", "e", " ", "t", "h", "e", " ", "d", "e", "v"]
console.log("\nthe real test begins")
let mantraArr = mantra.split([])
console.log(mantraArr)
mantraArr.forEach(function(char){
    console.log(char)
})

// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
const noVowels = (string) => {
    let newString = ""
    if(typeof string != 'string'){
        return `${string} is not a string, dummy`
    }
    for(let i = 0; i < string.length; i++){
        if(string[i] != "a" && string[i] != "e" && string[i] != "i" && string[i] != "o" && string[i] != "u"){
            newString += string[i]
        }
    }
    return newString
}
console.log(noVowels(message))
console.log(noVowels(9))

// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
const cats = (list) => {
    let toonCats = []
    for(let i = 0; i<toonimals.length; i++){
        if(toonimals[i].animal === 'cat'){
            toonCats.push(toonimals[i])
        }
    }
    return toonCats
}
console.log(cats(toonimals))