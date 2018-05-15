
//a function to change all of the text color for all available elements

function changeTextColor(element) {

	var textColor = document.getElementById(element).textContent;
	//alert(textColor);
	var art = document.getElementById("article").style.color=textColor;
	var children = document.getElementById("cloneSpot").childNodes;
	for (i in children) {
		children[i].style.color=textColor;
	}
}


//a function to change all of the background color for all available elements

function changeBackgroundColor(element) {

	var bckColor = document.getElementById(element).textContent;
	//alert(bckColor);
	var art = document.getElementById("article").style.backgroundColor= bckColor;

	var children = document.getElementById("cloneSpot").childNodes;
	for (i in children) {
		children[i].style.backgroundColor=bckColor;
	}
}


//a function to clone the "article" div


function replicate() {
	var toClone = document.getElementById("article");
	var clone = toClone.cloneNode(true);
	var placeToPlaceClone = document.getElementById("cloneSpot");
	placeToPlaceClone.appendChild(clone);
}
