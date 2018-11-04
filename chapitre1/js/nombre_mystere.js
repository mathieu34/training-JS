var nb1 = Math.floor(Math.random() * 10);
var nombreChoisi = 0;
console.log(nb1);
var nombreTentatives=0;
do {



	nombreChoisi = parseInt(prompt("choisis un nombre entre 0 et 9 :"));
	if (nombreChoisi>nb1) { 
		alert ("le nombre mystere est plus petit"); 
	}
	if (nombreChoisi<nb1) { 
		alert ("le nombre mystere est plus grand"); 
	}
	if (nombreChoisi==nb1) { 
		alert ("c'est gagné"); 
	}
	nombreTentatives++;





} while (( nb1!==nombreChoisi) && (nombreTentatives<3));
if ( nb1!==nombreChoisi) {
	alert ("c'est perdu");
}