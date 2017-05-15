
var aboutColumn = document.getElementsByClassName("about-column")





for (var i = 0; i < aboutColumn.length; i++) {

	aboutColumn[i].addEventListener("mouseenter", function (event){
		event.target.style.opacity = "1"

	})

	aboutColumn[i].addEventListener("mouseleave", function (event){
		event.target.style.opacity = "0.2"
	})
}

