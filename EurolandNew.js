let navMenu = document.getElementById('nav-menu1');
let menuBtn = document.getElementById('nav-toggle');
let closeBtn = document.getElementById('nav-close');

if(menuBtn){
  menuBtn.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu');
  })
}

if(closeBtn){
  closeBtn.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu');
  })
}

let navLink = document.querySelectorAll('.nav-links');

const linkAction = ()=>{
  navMenu.classList.remove('show-menu');
}

