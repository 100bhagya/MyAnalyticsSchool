function slabSlide() {
    const card1 = document.querySelector(".card1");
    const card2 = document.querySelector(".card2");
    const card3 = document.querySelector(".card3");
    const card4 = document.querySelector(".card4");
    const card5 = document.querySelector(".card5");

    const card1Val = document.querySelector(".val1");
    const card2Val = document.querySelector(".val2");
    const card3Val = document.querySelector(".val3");
    const card4Val = document.querySelector(".val4");
    const card5Val = document.querySelector(".val5");
    card1.addEventListener("click", () => {
        card1Val.style.display = "block";
        card2Val.style.display = "none";
        card3Val.style.display = "none";
        card4Val.style.display = "none";
        card5Val.style.display = "none";
        card1.classList.add("clicked");
        card2.classList.remove("clicked");
        card3.classList.remove("clicked");
        card4.classList.remove("clicked");
        card5.classList.remove("clicked");
    });
    card2.addEventListener("click", () => {
        card1Val.style.display = "none";
        card2Val.style.display = "block";
        card3Val.style.display = "none";
        card4Val.style.display = "none";
        card5Val.style.display = "none";
        card1.classList.remove("clicked");
        card2.classList.add("clicked");
        card3.classList.remove("clicked");
        card4.classList.remove("clicked");
        card5.classList.remove("clicked");
        
    });
    card3.addEventListener("click", () => {
        card1Val.style.display = "none";
        card2Val.style.display = "none";
        card3Val.style.display = "block";
        card4Val.style.display = "none";
        card5Val.style.display = "none";
        card1.classList.remove("clicked");
        card2.classList.remove("clicked");
        card3.classList.add("clicked");
        card4.classList.remove("clicked");
        card5.classList.remove("clicked");
    });
    card4.addEventListener("click", () => {
        card1Val.style.display = "none";
        card2Val.style.display = "none";
        card3Val.style.display = "none";
        card4Val.style.display = "block";
        card5Val.style.display = "none";
        card1.classList.remove("clicked");
        card2.classList.remove("clicked");
        card3.classList.remove("clicked");
        card4.classList.add("clicked");
        card5.classList.remove("clicked");
    });
    card5.addEventListener("click", () => {
        card1Val.style.display = "none";
        card2Val.style.display = "none";
        card3Val.style.display = "none";
        card4Val.style.display = "none";
        card5Val.style.display = "block";
        card1.classList.remove("clicked");
        card2.classList.remove("clicked");
        card3.classList.remove("clicked");
        card4.classList.remove("clicked");
        card5.classList.add("clicked");
    });
}

slabSlide(); 