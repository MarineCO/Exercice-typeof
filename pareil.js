/*
Créer une fonctionqui prend deux arguments, et qui console.log("le type est le meme") 
si le type des deux variables est similaires.
*/

// VERSION 1 : 

function hello(a, b) {

	if (typeof a === typeof b) {
		console.log("le type est le meme");
	} else {
		console.log("le type est different");
	}
}

hello(1, 2);
hello("1", 2);
hello(2, "3");
hello(22, 34);
hello("azerty", "azerty");


// VERSION 2 :

// function hello(a, b) {

// 	if (typeof a === typeof b) {
// 	var type = "le type est le meme";
// } else {
// 	var type ="le type est different";
// }
// 	console.log(type);
// }



// hello(1, 2);
// hello("1", 2);
// hello(2, "3");
// hello(22, 34);
// hello("azerty", "azerty");

