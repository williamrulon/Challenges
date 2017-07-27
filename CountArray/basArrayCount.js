/**

The Challenge

Given an array of strings, return the count of the number of strings with the given length.

wordsCount(["a", "bb", "b", "ccc"], 1) ? 2
wordsCount(["a", "bb", "b", "ccc"], 3) ? 1
wordsCount(["a", "bb", "b", "ccc"], 4) ? 0

**/
//Globals
var arrayValue, countvalue, array;

//setting up the click event listener
document.getElementById("submit").addEventListener("click", function() { allValues(); });

//function that makes all the magic happen
function allValues(d, i) {
    //getting the value for the user inputs
    arrayValue = document.getElementById("array").value;
    countValue = document.getElementById("count").value;

    //removing space and making an array
    array = arrayValue.split(" ");

    //looping through the array length
    var i=0, count = 0;
    while(array.length > i) {

    //if array is = to waht the user wanted then ship it
    if (array[i].length == countValue) {
        count++
        document.getElementById("output").innerHTML = count;
    }
    //if its 0
    else if (array[i].length != countValue){
        document.getElementById("output").innerHTML = count
    }
    //else increment i
    i++
    }

}
