function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const body = document.querySelector("body");
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        body.classList.toggle("scroll");


        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
}

navSlide();

const slides = document.getElementsByClassName('testimonial-container')
const prevBtn = document.querySelector("#leftBtn")
const nextBtn = document.querySelector("#rightBtn")

console.log(slides)

let index = 0

prevBtn.addEventListener('click', () => {
    slides[index].classList.add('hidden')

    if (index === 0) {
        index = slides.length - 1
    } else {
        index--
    }
    slides[index].classList.remove('hidden')
})

nextBtn.addEventListener('click', () => {
    slides[index].classList.add('hidden')

    if (index >= slides.length - 1) {
        index = 0
    } else {
        index++
    }
    slides[index].classList.remove('hidden')
})

