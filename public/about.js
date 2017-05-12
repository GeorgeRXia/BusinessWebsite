
var aboutColumn = document.getElementsByClassName("about-column")

	


for (var i = 0; i < aboutColumn.length; i++) {

	aboutColumn[i].addEventListener("mouseover", function (event){
		event.target.style.opacity = "1"
	})
}
