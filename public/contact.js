var outerModal = document.getElementsByClassName("outer-modal")[0];
var span = document.getElementsByClassName("close")[0];
var overlay = document.getElementsByClassName("overlay")[0];

window.addEventListener("load", function(){

outerModal.style.display = "block";
overlay.style.display = "block";

 });




span.addEventListener("click", function(){

outerModal.style.display = "none";
overlay.style.display = "none";
});
