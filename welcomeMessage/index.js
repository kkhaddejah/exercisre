// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");
// Create two variables (name & greeting) that contains your name
let name = "Khadejah";
let greeting = "Welcome back, ";
// and the greeting we want to render on the page
let fullGreeting = greeting + name;
// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = fullGreeting;

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
let emoji = "👋";

welcomeEl.innerText = fullGreeting + emoji;
