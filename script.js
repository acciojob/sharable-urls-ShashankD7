let aIn = document.getElementById("name");
let bIn = document.getElementById("year");

function changeH() {
	let h = document.getElementById("url");
	let str = aIn.value;
	let yr = bIn.value;
	h.innerText = "https://localhost:8080/?name=" + str + "&year=" + yr;
}