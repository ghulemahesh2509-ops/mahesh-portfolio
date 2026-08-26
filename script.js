const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


const skills = document.querySelectorAll(".skill");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const bar = entry.target.querySelector(".bar div");

            bar.style.transition = "width 1.5s ease";

        }

    });

}, {
    threshold: 0.5
});


skills.forEach(skill => {
    observer.observe(skill);
});
