let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop =150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

// let menuIcon = document.getElementById('menu-icon')
// let menu = document.querySelector('.navbar')

// menuIcon.onclick = function(){
//     menuIcon.classList.toggle('fa-x');
//     menu.classList.toggle('active');
// }
// let header = document.querySelector('header');

// window.onscroll = function (){
//     if(this.scrollY >=100){
//         header.classList.add('active')
//     }
//     else{
//         header.classList.remove('active')
//     }
//     menuIcon.classList.remove('fa-x')
//     menu.classList.remove('active')
// }