let myPoints = 3;

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
  myPoints = myPoints + 3;
  console.log(myPoints);
}
add3Points();

function remove1Point() {
  myPoints = myPoints - 1;
  console.log(myPoints);
}
remove1Point();

// Call the functions to that the line below logs out 10
console.log(myPoints);
