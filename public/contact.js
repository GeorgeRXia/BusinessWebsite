var outerModal = document.getElementsByClassName("outer-modal")[0];
window.addEventListener("load", function(){

outerModal.style.display = "block";

 })

document.addEventListener("keyup", function(event){
	if(event.key === "g"){
		outerModal.style.display = "none";
	}
});