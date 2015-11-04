"use strict";

//return an html collection of elements with a form tag
var form = document.getElementsByTagName("form")[0];
//return a reference to the targeted elements
var word = document.getElementById("word");
var output = document.getElementById("output");


//declare a function object to test palindrome
function palindromeCheck(event) {
	//set the word to lowercase
	word = word.value.toLowerCase();
	//split string at every character, reverses and joins it to create new string
	var strReverse = word.split('').reverse().join('');
	
	//test the reverse to the original string
	if (strReverse === word)
	{
		output.innerHTML = "True- " + word + " is a palindrome";
	}
	else
	{
		output.innerHTML = "False- " + word + " is not a palindrome";
	}
	event.preventDefault();
}

//palindromeCheck receives notification when the submit event occures
//false parameter is to disable useCapture
form.addEventListener("submit", palindromeCheck, false);