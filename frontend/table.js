var form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', onFormSubmit);

// form.addEventListener('click', removeTask);

var id = 1;



function addTask() {

	var input = document.getElementById('task');

	if(input.value.length > 0) {
	
		var table = document.getElementById('table');

		var rowIndex = document.getElementById('table').getElementsByTagName("tr").length;

		var row = table.insertRow(rowIndex - 1);


		
		// row.setAttribute("id", id);

		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);


		cell1.innerHTML = '<input type="checkbox">';
		cell2.innerHTML = input.value;
		// cell3.innerHTML = '<button id="' + id++ + '" onclick="removeTask()">Delete</button>';
		cell3.innerHTML = '<button id="button-' + id + '">Delete</button>';

		var button = document.getElementById('button-' + id++);

		// button.onclick = function(e) {
		// 	alert(this.id);
		// };

		// console.log(button);
		button.addEventListener('click', removeTask);

	}

}


function removeTask(event) {

	// var table = document.getElementById('table');

	// var rowIndex = document.getElementById('table').getElementsByTagName("tr").length;

	// var row = table.deleteRow(id);
	console.log(event.target.id);
	

}

function onFormSubmit(event) {
	event.preventDefault();
	addTask();
	form.reset();
	// validate();
}