// Create a new empty array
var arr = [];

// Create a let which will ask user how many elements he wants to add to the array
var addNumber = prompt("How many elements do you want to add to the array?");
addNumber = parseFloat(addNumber)

// Create a new function which will generate a new array
const createArray = (arr) => {
    for(let i = 0; i < addNumber; i++) {
        arr.push(Math.floor(Math.random() * (100 - 1) + 1 ))
    }
    return(arr)
}
createArray(arr)
alert(arr)

//Create lets which will be used to display the biggest and smallest number in the array
let biggestNumber = arr[0]
let smallestNumber = arr[0]

// Create a function which will enter the biggest number into the array
const theBiggestNumber = (arr) => {
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] > biggestNumber) {
            biggestNumber = arr[j]
        }
    }
    return(arr)
}
theBiggestNumber(arr)
alert(biggestNumber)

// Create a function which will enter the smallest number into the array
const theSmallestNumber = (arr) => {
    for(let g = 0; g < arr.length; g++) {
        if(arr[g] < smallestNumber) {
            smallestNumber = arr[g]
        }
    }
    return(arr)
}
theSmallestNumber(arr)
alert(smallestNumber)