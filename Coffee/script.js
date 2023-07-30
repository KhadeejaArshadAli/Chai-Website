let menu= document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');

menu.onclick= ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
};


document.querySelectorAll('.image-slider img').forEach(image => {
    image.onclick = () => {
      var src = image.getAttribute('src');
      document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0:{
            slidesPerView: 0,
         
        },
        768:{
            slidesPerView: 2,
            
        },
      
    },
    loop: true,
    grabCursor: true,

  });


