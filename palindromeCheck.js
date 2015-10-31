"use strict";

var form = document.getElementsByTagName("form")[0];
var word = document.getElementById("word");
var output = document.getElementById("output");

form.addEventListener("submit", function(event){
	var strReverse = word.value.split('').reverse().join('');
	if (strReverse == word.value)
	{
		output.innerHTML = "True- " + word.value + " is a palindrome";
	}
	else
	{
		output.innerHTML = "False- " + word.value + " is not a palindrome";
	}
	event.preventDefault()
});
