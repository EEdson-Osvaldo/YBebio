
var btn = document.getElementById('btn')

function leftClick() {
	btn.style.left = '0'
	

	if(localStorage.Passar){
		document.getElementById("Videoplaylist").src="./1.Quizes/index.html";
		document.getElementById("Recipes").src="/Recipes/Member/index.html";
	} else{
		document.getElementById("Videoplaylist").src="./1.Quizes/index.html";
		document.getElementById("Recipes").src="/Recipes/Guest/index.html";

}}

function rightClick() {
	btn.style.left = '110px'

	if(localStorage.Passar){
		document.getElementById("Videoplaylist").src="./1.Quizes/index.html";
		document.getElementById("Recipes").src="/Recipes/Member/index.html";
	} else{
		document.getElementById("Videoplaylist").src="./BebMom-Unsibscribe/index.html";
		document.getElementById("Notas").src="./BebMom-Unsibscribe/index.html";
		document.getElementById("Recipes").src="./BebMom-Unsibscribe/index.html";

	}

} 