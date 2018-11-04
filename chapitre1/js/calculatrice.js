var operation = prompt(" choisis une opération (+*/-):");
var nb1 = parseInt(prompt(" choisis un 1er nombre:"));
var nb2 = parseInt(prompt(" choisis un 2eme nombre:"));
var resultat=0;
if (operation=="+") {
	resultat=nb1+nb2;
}
else if (operation=="-") {
	resultat=nb1-nb2;
}
else if (operation=="*") {
	resultat=nb1*nb2;
}
else if (operation=="/") {
	resultat=nb1/nb2;
}
else {
	alert("opération non reconnue");
	}
alert("le résultat de l'opération est  " + resultat); 