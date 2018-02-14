var secretNumber = 6;
var secretNumber = Number(prompt("guess the number!"));
if(secretNumber<6){
	alert("its wrong");
}
if(secretNumber===6){
	alert("its right");
}
if(secretNumber>6){
	alert("its too high");
}

