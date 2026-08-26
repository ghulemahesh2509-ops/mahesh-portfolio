document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    link.addEventListener("click", function () {
      console.log("Opening:", this.textContent);
    });
  });

  console.log("Mahesh Portfolio Loaded Successfully 🚀");
});
