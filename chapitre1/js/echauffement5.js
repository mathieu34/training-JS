var nbNotes = 10;
var somme = 0;
for(i = 0 ; i < nbNotes ; i++) {
	var note = parseFloat(prompt("Note " + i));
	somme = somme + note;
}
var moyenne = somme / nbNotes;
console.log(somme);
console.log(moyenne);
alert("Moyenne: " + moyenne);

