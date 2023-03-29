// Create a let which will save how many miles user wants to convert to kilometers
let miles = prompt("Enter how many miles you want to convert to kilometers")
miles = parseInt(miles)

// Create empty let which will save how many kilometers in the given miles
let kilometers

//Function which converts miles to kilometers
const converting = (miles) => { kilometers = miles * 1.60934399 }

// Enter how many kilometers in miles
converting(miles)
alert(`В ${miles} милях ${kilometers} кілометрів`)