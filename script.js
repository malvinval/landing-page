// navlink responsiveness
const navbarHamburger = document.querySelector(".detik-hamburger-icon");
const mobileNavbar = document.querySelector(".detik-mobile-navbar");

navbarHamburger.addEventListener("click", () => {
    mobileNavbar.classList.toggle("d-none");
});

const mobileNavbarLink = document.querySelectorAll(".detik-mobile-nav-link");

mobileNavbarLink.forEach((mnl) => {
    mnl.addEventListener("click", () => {
        mobileNavbar.classList.add("d-none");
    });
});

// carousel
let items = document.querySelectorAll('.carousel .carousel-item')
		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

// navbar background responsiveness
const navbarHero = document.getElementById("detik-navbar");
const heroSection = document.querySelector(".detik-hero-section");
const heroSectionHeight = heroSection.offsetHeight;

function updateNavbarBackground() {
    const scrollPosition = window.scrollY;
    if (scrollPosition < heroSectionHeight) {
        navbarHero.style.backgroundColor = "transparent";
    } else {
        navbarHero.style.backgroundColor = "rgba(35, 35, 64, 1)";
    }
}

// Update navbar background on page load and scroll
updateNavbarBackground();
window.addEventListener("scroll", updateNavbarBackground);