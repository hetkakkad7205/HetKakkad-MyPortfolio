
// =====================================
// 1. PROJECT CATEGORY FILTERS
// =====================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));

        // Activate selected button
        button.classList.add("active");

        const selectedFilter = button.dataset.filter;

        // Show matching projects
        projectCards.forEach(card => {

            const categories = card.dataset.category || "";

            if (
                selectedFilter === "all" ||
                categories.split(" ").includes(selectedFilter)
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


// =====================================
// 2. PROJECT DETAILS MODAL
// =====================================

const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalGithub = document.getElementById("modalGithub");

const detailsButtons = document.querySelectorAll(".details-btn");

function closeProjectModal() {

    if (!projectModal) return;

    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");

}

detailsButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".project-card");

        if (!card || !projectModal) return;

        modalTitle.textContent = card.dataset.title || "Project";
        modalDescription.textContent =
            card.dataset.description || "Project description unavailable.";

        modalTech.textContent =
            card.dataset.tech || "Technologies not specified.";

        const githubLink = card.dataset.github || "";

        if (
            githubLink.startsWith("https://github.com/") &&
            !githubLink.includes("YOUR-")
        ) {
            modalGithub.href = githubLink;
            modalGithub.style.display = "inline-flex";
        } else {
            modalGithub.removeAttribute("href");
            modalGithub.style.display = "none";
        }

        projectModal.classList.add("open");
        projectModal.setAttribute("aria-hidden", "false");

    });

});

if (modalClose) {
    modalClose.addEventListener("click", closeProjectModal);
}

if (projectModal) {

    projectModal.addEventListener("click", event => {

        if (event.target === projectModal) {
            closeProjectModal();
        }

    });

}

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeProjectModal();
    }

});
