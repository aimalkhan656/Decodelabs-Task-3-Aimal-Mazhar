/* HAMBURGER MENU */

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

/* DARK MODE */

const darkModeBtn =
document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});

/* CHANGE TEXT */

const changeTextBtn =
document.getElementById("changeTextBtn");

const heading =
document.getElementById("mainHeading");

const description =
document.getElementById("description");

changeTextBtn.addEventListener("click",()=>{


    let temp =
    heading.innerHTML;
    heading.innerHTML =
    description.innerHTML;

    description.innerHTML =
    temp;

});

/* SHOW/HIDE CONTENT */

const toggleBtn =
document.getElementById("toggleBtn");

const extraContent =
document.getElementById("extraContent");

toggleBtn.addEventListener("click",()=>{

    if(extraContent.style.display==="block"){

        extraContent.style.display="none";

    }

    else{

        extraContent.style.display="block";

    }

});