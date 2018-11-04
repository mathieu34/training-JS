var nb1;
nb1 = Math.floor(Math.random() * 10);
var nb2;
nb2 = Math.floor(Math.random() * 10);
console.log(nb1, nb2);
var operation=["addition","soustraction","multiplication"];
var operationId;
var resultat;
operationId = Math.floor(Math.random() * 3);
if (operation[operationId] =="addition") {
	resultat=nb1+nb2;
}
else if (operation[operationId] =="soustraction") {
	resultat=nb1-nb2;
}
else if (operation[operationId] =="multiplication") {
	resultat=nb1*nb2;
}
console.log(resultat);

var promptText = "operation: " + operation[operationId] + "  nombre1: " + nb1 + "  nombre2: " + nb2;
var resultatUtilisateur = prompt(promptText);
if (resultatUtilisateur==resultat) {
	alert ("true");
}
else  {
	alert ("false");
}