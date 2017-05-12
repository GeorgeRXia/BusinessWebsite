var carousel=document.getElementsByClassName("pic1")[0]

 function carouselStart() {
    carousel.style.backgroundImage="url('pic1.jpg')"
    window.setTimeout(pic2,3000)
}

 carouselStart();

 function pic2(){
    carousel.style.backgroundImage="url('pic2.jpg')"
    window.setTimeout(pic3,3000)

 }

  function pic3(){
    carousel.style.backgroundImage="url('pic3.jpg')"
    window.setTimeout(carouselStart,3000)

 }