function toggleClass(){
   let menu = 
   document.querySelector(".navlist");
   menu.classList.toggle("toggleClass");
   }
hamburger.addEventListener("click",toggleClass);
