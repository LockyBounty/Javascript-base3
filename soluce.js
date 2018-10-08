///Exercice 1 ///
///Changer le lien de l'image en passant dessus avec la souris///

let x = document.querySelector("#image1");

if (x.addEventListener) {

  x.addEventListener("mouseover", function (event) {
    document.querySelector("#image1").src = "images/image1_2.jpg"
  });
}

// Exercice 2 //
//Dans le fichier HTML fourni, afficher une boite de dialogue avec le message : //
//*"Merci de votre participation"* quand le champ de saisie perd le focus.//
//(lorsque l'on sort de la div où est l'image)//

let x = document.querySelector("#image1");

x.addEventListener("mouseout", function (event) {

  alert("Merci de votre participation");
}, false);

//Exercice 3 //
/*Dans le fichier HTML fourni, afficher une boite de dialogue avec
 la valeur du champ dès que l'on appuie sur le clavier.*/

function maValeur(event) {
  let x = event.key; //pas nécessaire mais montre cettre possibilité

  let contenu = document.querySelector("#myForm").value;
  //lit la valeur dans le champ de l'input de l'id myForm, donc ce que l'user entre //
  if (x === x) { // if pas nécessaire mais montre cettre possibilité
    alert(`Le contenu du champ : ${contenu}`);
  }
}

document.querySelector("#myForm").addEventListener("keypress", maValeur);

//Exercice 4 //
/*Dans le fichier HTML fourni, faire que le bouton RAZ efface les données des champs du formulaire.*/

let contenu = "";

function maValeur(event) {
  contenu = document.querySelector("#myForm").value;
  alert(`Le contenu du champ : ${contenu}`);
}

function resetChamp(event) {
  confirm("Achtung ! Reset du champ !");
  contenu = document.querySelector("#myForm").value = ""; /*reset le contenu que l'user a entré*/
}
document.querySelector("#myForm").addEventListener("keypress", maValeur);
document.querySelector("#myButton").addEventListener("click", resetChamp);

//Exercice 5 //
/*Dans le fichier HTML fourni, faire comme dans l'exercice 1 mais avec 5 images.  
 **Bonus** Ne faire qu'une seule fonction JavaScript pour cet exercice.*/

let x = document.querySelector("#image1");
let cpt = 6;
let i = 1;
if (x.addEventListener) {

  x.addEventListener("mouseover", function (event) {
    if (i < cpt) {
      document.querySelector("#image1").src = `images/hang${i++}.png`;
      /*Va itérer chaque image numérotée de hang que j'ai placé dans le dossier image
      préférer le "if" à la boucle ici, car sinon va aller jusqu'à la dernière image numérotée*/
    } else {
      alert("Fini, vous avez parcouru les 5 images.");
    }
  });
}
//Exercice 6 //
/*Dans le fichier HTML fourni, faire comme dans l'exercice 5 mais remettre l'image d'origine
 dès que la souris ne survol plus l'image.  
**Bonus** Ne faire que deux fonctions JavaScript pour cet exercice.*/

let x = document.querySelector("#image1");
let cpt = 6;
let i = 1;

if (x.addEventListener) {

  x.addEventListener("mouseover", function (event) {
    if (i < cpt) {
      document.querySelector("#image1").src = `images/hang${i++}.png`;
    } else {
      alert("fini");
    }
  });
}
if (x.addEventListener) {

  x.addEventListener("mouseout", function (event) {
    document.querySelector("#image1").src = `images/image1.jpg`;
  });
}