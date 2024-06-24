 let navbar = document.querySelector('.navbar')

 document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
 }
 
 document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
 }
 
 
 
 window.onscroll = () =>{

    navbar.classList.remove('active');


   
    if(window.scrollY > 100){
    
    document.queryselector('Header').clsslist.add('active')
}else{
    document.queryselector('Header').clsslist.remove('active')
}

}
/*dark mode code*/
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');

    }else{
        document.querySelector('body').classList.remove('active');
    }
}
/*dark mode code end */



document.querySelectorAll('.small-img-1').forEach(images =>{
  images.onclick = () =>{
      document.querySelector('.big-img-1').src = images.getAttribute('src');
  }
});

document.querySelectorAll('.small-img-2').forEach(images =>{
  images.onclick = () =>{
      document.querySelector('.big-img-2').src = images.getAttribute('src');
  }
});

document.querySelectorAll('.small-img-3').forEach(images =>{
  images.onclick = () =>{
      document.querySelector('.big-img-3').src = images.getAttribute('src');
  }
});

/*count dowen code*/
let countDate = new Date('may 1, 2023 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();
	gap =  countDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
	let h = Math.floor((gap % (days)) / (hours));
	let m = Math.floor((gap % (hours)) / (minutes));
	let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function(){
  countDown()
},1000);



var swiper = new Swiper(".product-slider", {
  slidesPerView: 3,
  loop:true,
  spaceBetween: 10,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      550: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1000: {
          slidesPerView: 3,
      },
  },
});











var swiper = new swiper(".product-slider", {
  slidesPerView: 3,
  loop:true,
  spaceBetween: 10,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      550: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1000: {
          slidesPerView: 3,
      },
  },
});




var swiper = new Swiper(".review-slider swiper-container", {
  slidesPerView: 3,
  loop:true,
  spaceBetween: 10,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      550: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1000: {
          slidesPerView: 3,
      },
  },
});
