// FONCTIONALITE N° 1
var footerClick = document.querySelector('footer');
footerClick.addEventListener('click', Fonction);
	function Fonction(){
		console.log("clique")
	}

// FONCTIONALITE N° 1_BIS

var footerClick = document.querySelector('footer');
var x = 0	

var Fonction = function(){
		
		x += 1
		console.log(`clique ${x}`);
	}

footerClick.addEventListener('click', Fonction);
	
// FONCTIONALITE N°2

var DropDown = document.querySelector('#navbarHeader');
var DropDownButton = document.querySelector('.navbar-toggler');
var DropDownStatus = false;


function DropDwonToggle() {
	if (DropDownStatus == false) {
		DropDown.className = "bg-dark";
		DropDownStatus = true;
	}
	else if (DropDownStatus == true) {
		DropDown.className = "collapse bg-dark";
		DropDownStatus = false;
	}
}
DropDownButton.addEventListener('click', DropDwonToggle);


// FONCTIONALITE N°3

var EditButtonRed = document.querySelector(".col-md-4").querySelectorAll(".btn")[1];
var EditToRed = document.querySelector(".col-md-4").querySelector("p");
	
function EditRed() {
		EditToRed.style.color = "red";
	};

EditButtonRed.addEventListener("click", EditRed);

// FONCTIONALITE N°4

var EditButtonGreen = document.querySelectorAll(".col-md-4")[1].querySelectorAll(".btn")[1];
var EditToGreen = document.querySelectorAll(".col-md-4")[1].querySelector("p");
	
function EditGreen() {
	var result = EditToGreen.classList.toggle("c");
  if(result == true) {
    EditToGreen.style.color = "green";
  } else {
    EditToGreen.style.color = "black";
  }
}


EditButtonGreen.addEventListener("click", EditGreen);

// FONCTIONALITE N°5

var LinkBootstrap = document.head.querySelector("link")
var FullNavbar = document.querySelector("header");

FullNavbar.addEventListener('dblclick', BootstrapOut);

function BootstrapOut() {
	var removeBoot = FullNavbar.classList.toggle('c');
	if (removeBoot == true) {
		LinkBootstrap.remove()
	}
}

// FONCTIONALITEE N°6

let viewButton = document.querySelectorAll('.btn-group > .btn-success');
var cardImage = document.querySelectorAll(".card")[0].querySelector("img");
var allCard = document.querySelector(".album").querySelectorAll(".card");

for (let i = 0; i < allCard.length; i++) {
viewButton[i].addEventListener("mouseover", reduceCard)
function reduceCard() {
	var result2 = viewButton[i].classList.toggle("c");
	if (result2 === true) {
		document.querySelectorAll(".col-md-4")[i].querySelector("p").style.display = "none";
		document.querySelectorAll(".card")[i].querySelector("img").style.width = "20%";
	} else if (result2 === false) {
		document.querySelectorAll(".col-md-4")[i].querySelector("p").style.display = "block";
		document.querySelectorAll(".card")[i].querySelector("img").style.width = "100%";
	}
};
};

// fonctionnalité 7
let cards = document.getElementsByClassName("col-md-4")
let parent = document.getElementsByClassName("row")[1]
let bouton = document.querySelector("main").querySelectorAll("a")[1]

bouton.addEventListener("click", changeIndexCard);
function changeIndexCard(){
let movingCard = cards[cards.length-1]
parent.insertBefore(movingCard, cards[0])
}