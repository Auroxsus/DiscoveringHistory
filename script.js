$(document).ready(function () {
	$('#startMod').modal('show'); // Show the modal when the document is ready
});

// Define variables to store counts
let rtemp = 0;
let wtemp = 0;

// Function to update the right count in the parent document
function updateValueRight(plusR) {
	// Update the right count by adding the provided value
	rtemp += plusR;
	// Display the updated right count
	const rightEl = document.getElementById('outputright');
	rightEl.innerText = rtemp;
}

// Function to update the wrong count in the parent document
function updateValueWrong(plusW) {
	// Update the wrong count by adding the provided value
	wtemp += plusW;
	// Display the updated wrong count
	const wrongEl = document.getElementById('outputwrong');
	wrongEl.innerText = wtemp;
}

/* set iframe to display certain section of Funfacts.html HAS to be out of the WindDOM*/
function setURL(url){
	console.log("we going here:" + url);
	document.getElementById('iframe').src = url;
}

// Initialization code when the DOM is ready
window.addEventListener('DOMContentLoaded', () => {
	// Get elements displaying the counts
	const rightEl = document.getElementById('outputright');
	const wrongEl = document.getElementById('outputwrong');

	// Display default counts
	rightEl.innerText = rtemp;
	wrongEl.innerText = wtemp;
	
});