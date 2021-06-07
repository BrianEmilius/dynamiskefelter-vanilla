// app.js

document.querySelector("form").addEventListener("submit", function(event) {
	event.preventDefault();

	var ingredients = [];

	event.target["ingredients[]"].forEach(ingredient => ingredients.push(ingredient.value));

	console.log({
		name: event.target["name"].value, 
		description: event.target["description"].value,
		ingredients
	});
});

document.querySelector(".addingredient").addEventListener("click", function(event) {
	var div = document.createElement("div");
	div.className = "inputGroup";
	var input = document.createElement("input");
	input.name = "ingredients[]";
	input.type = "text";

	div.appendChild(input);
	document.querySelector("fieldset").appendChild(div);
});

document.querySelector(".removeingredient").addEventListener("click", function(event) {
	var fieldset = document.querySelector("fieldset");
	if (fieldset.lastElementChild.localName === "div") {
		fieldset.removeChild(fieldset.lastElementChild);
	}
});
