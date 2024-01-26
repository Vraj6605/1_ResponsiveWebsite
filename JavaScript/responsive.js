document.querySelector(".burger").addEventListener("click",()=>{
    navbar = document.querySelector(".navbar");
    burger = document.querySelector(".burger");
    navList = document.querySelector(".nav-list");
    rightnav = document.querySelector(".rightnav");

    burger.addEventListener('click',()=>{
        rightnav.classList.toggle('v-class-resp');
        navbar.classList.toggle('h-nav-resp');
        navList.classList.toggle('v-class-resp');
    })
})