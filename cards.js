	var cardContainer = document.getElementById('cardContainer');
	var textValue =document.getElementById('textArea');

var clickEvent = function(visibility) {
	cardContainer.style.visibility = "visible";
	cardContainer.innerHTML = textValue.value;
	
};

var deleteCard = function(hide) {
	cardContainer.remove();
};

document.getElementById('deleteBtn').addEventListener('click', deleteCard);
document.getElementById('btn').addEventListener('click', clickEvent);

