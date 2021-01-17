let open_menu_btn = document.getElementById("menu-btn")
let exact_menu = document.getElementById("main-menu")
let close_btn_main_menu = document.getElementById("close_btn_main_menu")

open_menu_btn.addEventListener("click", function(){
  exact_menu.className="main-menu-shell"
});


close_btn_main_menu.addEventListener("click", function(){
  exact_menu.className="main-menu-shell main-menu-shell-none"
});


var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;


function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

changeSlide();

function changeSlide(){
    
  if(index>slides.length-1)
    index=0;
  
  if(index<0)
    index=slides.length-1;
  
  
  
    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
      
      dots[i].classList.remove("main-page-active");
      
      
    }
    
    slides[index].style.display = "block";
    dots[index].classList.add("main-page-active");

  

}


var elements = document.getElementsByClassName("row_btn_of_category_selector");

var myFunction = function() {
  let catl = document.getElementsByClassName("category_list")
    for (var i = 0; i < catl.length; i++) {
      catl[i].className = "category_list category_list_display_none"
}
    let id_of_category = this.id.slice(7)
    let category_list_exact = document.getElementById("category_list"+id_of_category)
    category_list_exact.className = "category_list"
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}