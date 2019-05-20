// FONCTIONALITEE N° 1
var footerClick = document.querySelector('footer');
footerClick.addEventListener('click', Fonction);
	function Fonction(){
		console.log("clique")
	}

// FONCTIONALITEE N° 1_BIS

var footerClick = document.querySelector('footer');
var x = 0	

var Fonction = function(){
		
		x += 1
		console.log(`clique ${x}`);
	}

footerClick.addEventListener('click', Fonction);
	
// FONCTIONALITEE N°2

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

// FONCTIONALITEE N°3
