// 1. Create variables to store your name, age, and nationality .
var firstName = "Abdullateef";
var age = 24;
var nationality = "Nigerian";

// Combine them into a sentence that introduces you
var mySelf = `My name is ${firstName}, I am ${age} years old and a citizen of ${nationality}`;
console.log(mySelf);

// 2. Make a variable with your favorite quote. 
var quoteFav = "Make it happen, Do Hard Things";

// Convert to uppercase
console.log(quoteFav.toUpperCase());

// Convert to lowercase
console.log(quoteFav.toLowerCase());

// 3. Take a word and rearrange it in reverse order, then reverse the word.
var word = "JavaScript";
var reversedWord = word.split("").reverse().join("");
console.log("Reversed word:", reversedWord);

// 4. Store the price of 3 items in 3 different variables.
var priceRice = 2000;
var priceBeans = 1200;
var priceGarri = 1500;

//  Calculate the total and display it with a message.
var sumPrice = priceRice + priceBeans + priceGarri;
console.log("This is the total sum of all the prices: ₦" + sumPrice);

// 5. Find the average of 5 test scores stored in variables.
var testScore1 = 11;
var testScore2 = 12;
var testScore3 = 15;
var testScore4 = 17;
var testScore5 = 14;

// Calculate the average and display the average with a message.
var totalScore = testScore1 + testScore2 + testScore3 + testScore4 + testScore5;
var averageScore = totalScore / 5;
console.log(`This is the average score of the total test score: ${averageScore} for all the students offering the course.`);

// 6. Create an array of your 5 favorite foods. Display the first and last items in the array.
const favFood = ["amala", "spaghetti", "cake", "biscuit", "fried rice"];
console.log("My favorite foods:", favFood);
console.log("First favorite dish:", favFood[0]);
console.log("Last favorite dish:", favFood[favFood.length - 1]);

// 7. Add two more food items to the list: one at the beginning and one at the end. Display the new list.
favFood.unshift("pounded yam"); // Add at the beginning
favFood.push("jollof rice");    // Add at the end
console.log("Updated favorite food list:", favFood);

// 8, 9, 10. Create three arrays: jssOne, jssTwo, jssThree. Each should contain 10 student names as strings.
const jssOne = ["Bayo", "Kola", "Abdul", "Frank", "Henry", "Jack", "Sarah", "Ada", "Tolu", "Emeka"];
const jssTwo = ["Lola", "Chinedu", "Grace", "Titi", "Joshua", "Zainab", "Kunle", "Yusuf", "Blessing", "David"];
const jssThree = ["Femi", "Uche", "Halima", "Mariam", "Kenny", "Tega", "Ayo", "Sandra", "Debby", "Ifedayo"];

console.log("JSS One Students:", jssOne);
console.log("JSS Two Students:", jssTwo);
console.log("JSS Three Students:", jssThree);
