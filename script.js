
document.querySelector('#menu-icon').addEventListener('click', () => {
        document.querySelector('.navbar ').style.display = 'block'
        document.querySelector('#x-icon').style.display = 'block'
        document.querySelector('#menu-icon').style.display = 'none'
    })

    document.querySelector('#x-icon').addEventListener('click', () => {
        document.querySelector('.navbar ').style.display = 'none'
        document.querySelector('#x-icon').style.display = 'none'
        document.querySelector('#menu-icon').style.display = 'block'
    })


// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.addEventListener('click'), () => {
//     menuIcon.classListt.toggle('bx-x');
//     navbar.classListt.toggle('active'); 
// };


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +  id + ']').classList.add('active');
            });
        }
    });

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);




};


let darkmodeicon = document.querySelector('#darkmode-icon');

darkmodeicon.onclick = () =>{
    darkmodeicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
 });


 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img,.portfolio-box,.skill-main,.contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3,.home-content p, .about-content', { origin: 'right' });