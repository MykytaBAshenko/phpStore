let open_menu_btn = document.getElementById("menu-btn")
let exact_menu = document.getElementById("main-menu")
let close_btn_main_menu = document.getElementById("close_btn_main_menu")

open_menu_btn.addEventListener("click", function(){
  exact_menu.className="main-menu-shell"
});


close_btn_main_menu.addEventListener("click", function(){
  exact_menu.className="main-menu-shell main-menu-shell-none"
});


let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active-image')

for (var i=0; i < thumbnails.length; i++){

  thumbnails[i].addEventListener('mouseover', function(){
    console.log(activeImages)
    
    if (activeImages.length > 0){
      activeImages[0].classList.remove('active-image')
    }
    

    this.classList.add('active-image')
    document.getElementById('featured').src = this.src
  })
}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft -= 180
})

buttonRight.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft += 180
})
