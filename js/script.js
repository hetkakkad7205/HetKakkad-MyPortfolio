

/* =====================================
   MOBILE NAVIGATION MENU
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (!menuToggle || !navMenu) {
        return;
    }

    // Open and close the mobile menu
    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        // Change hamburger icon to close icon
        const icon = menuToggle.querySelector("i");

        if (icon) {
            if (navMenu.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
                menuToggle.setAttribute("aria-label", "Close menu");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
                menuToggle.setAttribute("aria-label", "Open menu");
            }
        }
    });

    // Close menu after clicking a navigation link
    const navLinks = navMenu.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }

            menuToggle.setAttribute("aria-label", "Open menu");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {

        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }

            menuToggle.setAttribute("aria-label", "Open menu");
        }
    });

});



// =====================================
// 2. TYPING ANIMATION
// =====================================

const typingText = document.getElementById("typingText");

if (typingText) {

    const roles = [
        "Full Stack Developer",
        "Data Science Enthusiast",
        "Creative Problem Solver"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            typingText.textContent =
                currentRole.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentRole.length) {
                deleting = true;
                setTimeout(typeEffect, 1300);
                return;
            }

        } else {

            typingText.textContent =
                currentRole.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }

        }

        setTimeout(typeEffect, deleting ? 45 : 90);

    }

    typeEffect();

}


// =====================================
// 3. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-preview-card, " +
    ".project-preview-card, .intro-item, .cta-section"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observerInstance.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


// =====================================
// 4. BACK TO TOP BUTTON
// =====================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 350) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}



// =====================================
// AUTOMATIC COPYRIGHT YEAR
// =====================================

document.querySelectorAll("#currentYear, .currentYear").forEach(element => {
    element.textContent = new Date().getFullYear();
});
