// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black";
// "Red,Green,White,Black";
// "Red+Green+White+Black";




function joinArray(arr) {
    return arr.join(",")
}


function joinArray1(arr) {
    return arr.join("+")
}


myColor = ["Red", "Green", "White", "Black"];

console.log(joinArray(myColor));
console.log(joinArray1(myColor));
