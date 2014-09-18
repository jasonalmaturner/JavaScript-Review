var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

var last = function(arr){
	return arr.[arr.length - 1];
}
alert(last(threeItems));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//Fix 'dicedArray' below so that it's an array full of integers from 0-10
var dicedArray = [0,1,4,5,7,8,10];

dicedArray.splice(2, 0, 2, 3);
dicedArray.splice(5, 0, 6);
dicedArray.splice(9, 0, 9);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

var evens = function(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 2 !== 0){
			arr.splice(i, 1);
			i--;
		}
	}
}
evens(evenArray);
alert(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30, and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var randomMatch = function(array){
	var randomNum = getRandomArbitrary();
	var match = false;
	for(var i = 0; i < array.length; i++){
		if(array[i] === randomNum){
			match = true;
		}
	}
	alert(match);
}
randomMatch(randomArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second = first.slice(0);
second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

var longest = function (string) {
    var stringArray = string.split(" ");
    var word = "";
    for (var i = 0; i < stringArray[i].length; i++) {
        if (stringArray[i].length > word.length) {
            word = stringArray[i];
        }
    }
    return word;
}

alert(longest(sentence));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

var newPoem;

var capitalize = function(poem){
	var stringArray = poem.split(' ');
    var newPoemArray = [];
	for (var i = 0; i < stringArray.length; i++){
		newPoemArray.push(stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1));
	}
	newPoem = newPoemArray.join(' ');
}
capitalize(myPoem);
alert(newPoem);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
var vowelCounter = function(string){
	var stringArray = string.split('');
	var n = 0;
	for (var i = 0; i < stringArray.length; i++){
		if(stringArray[i] === 'a' || stringArray[i] === 'e' || stringArray[i] === 'i' || stringArray[i] === 'o' || stringArray[i] === 'u'){
			n++;
		}
	}
	return n;
}
vowelCounter(theOdyssey);