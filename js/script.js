//|> Sticky NavBar & To-top button
function userScroll() {
  const navbar = document.querySelector(".navbar");
  const toTopBtn = document.querySelector("#to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticky");
      toTopBtn.classList.add("show");
    } else {
      navbar.classList.remove("navbar-sticky");
      toTopBtn.classList.remove("show");
    }
  });
}

function scrollToTop() {
  document.body.scrollTop = 0; // safari
  document.documentElement.scrollTop = 0; // chrome
}

//|> STATS on loading page
function incrementsStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 200;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

//|> EVENT LISTENERS
document.addEventListener("DOMContentLoaded", userScroll);
document.addEventListener("DOMContentLoaded", incrementsStats);
document.querySelector("#to-top").addEventListener("click", scrollToTop);
