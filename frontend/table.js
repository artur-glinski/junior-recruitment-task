var form = document.getElementsByTagName('form')[0]; // referencja do form

form.addEventListener('submit', onFormSubmit); // dodanie zdarzenia na wyslanie formularza czyli dodanie zadania do wykonania (task)

var id = 1; // deklaracja i poczatkowa wartosc dla id zadan, od 1 dla zgodnosci z baza danych


//funkcja dodajaca zadanie
function addTask() {
	var input = document.getElementById('task'); // referencja do inputa

	//jesli input ma zawartosc to dodaj task
	if(input.value.length > 0) {
	
		var table = document.getElementById('table'); // referencja do tabeli zadan

		var rowIndex = document.getElementById('table').getElementsByTagName("tr").length; // okreslenie indexu dla row

		var row = table.insertRow(rowIndex - 1); // wstawienie row o podanym indexie do tabeli
		
		row.setAttribute("id", 'row-id-' + id); // przypisanie id dla row

		var cell1 = row.insertCell(0); // utworzenie i dodanie komorki(0) do row
		var cell2 = row.insertCell(1); // utworzenie i dodanie komorki(1) do row


		cell1.innerHTML = '<input type="checkbox">'; // wstawienie inputa - checkboxa do komorki
		cell2.innerHTML = input.value + '<button id="button-id-' + id + '">Delete</button>'; // przypisanie wartosci z inputa do komorki (task), wstawienie buttona do komorki i przypisanie mu id

		var button = document.getElementById('button-id-' + id++); // referencja do buttona, pozniej zwiekszenie id o 1

		button.addEventListener('click', removeTask); // na koniec dodanie zdarzenie usuniecia konkretnego row dla buttona

	}

}


function removeTask() {
	var table = document.getElementById('table'); // referencja do tabeli zadan

	// console.log(this.id);

	var clickedButtonId = this.id.slice(10); // dobranie sie do wartosci liczbowej id

    var row = document.getElementById('row-id-' + clickedButtonId); // referencja do row do usuniecia
    row.parentNode.removeChild(row); // usuniecie konkretnego row
}

function onFormSubmit(event) {
	event.preventDefault(); // zapobieganie wyslaniu formularza i przeladowania strony
	addTask(); // dodanie taska
	form.reset(); // usuniecie zawartosci inputa w form
}