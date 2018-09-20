console.log("connected");




var userAge = prompt("How old are you?");

if(userAge >= 21) {
	console.log("Welcome, you may enter. Drink responsibly!");
}
else if(userAge == 21) {
	console.log("Congratulations on turning 21! You may enter and drink responsibly");
}
else if(userAge >= 18) {
	console.log("Welcome, you may enter but you can NOT drink!");
}
else if(userAge == 18) {
	console.log("Congratulations on turning 18! You may enter, but you can NOT drink!");
}
else {
	console.log("You shall NOT pass!");
}
