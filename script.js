console.log("Welcome to Aisha's Portfolio");
const roles = [
    "ICT Graduate",
    "Front-End Developer",
    "IT Support Specialist",
    "Career Advisor",
    "Continuous Learner"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

    const currentRole = roles[roleIndex];

    if(!deleting){

        typingText.textContent =
            currentRole.substring(0,charIndex++);

        if(charIndex > currentRole.length){

            deleting = true;

            setTimeout(type,1200);

            return;

        }

    }else{

        typingText.textContent =
            currentRole.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;

            }

        }

    }

    setTimeout(type,deleting ? 60 : 130);

}

type();
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.textContent = "✕";
    }else{
        menuToggle.textContent = "☰";
    }

});
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});