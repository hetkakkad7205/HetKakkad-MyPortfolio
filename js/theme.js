
const themeToggle = document.getElementById("themeToggle");

// Read previously selected theme
const savedTheme = localStorage.getItem("portfolio-theme");

// Apply saved theme
if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

// Update theme icon
function updateThemeIcon() {
    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-theme")) {
        icon.className = "fas fa-moon";
    } else {
        icon.className = "fas fa-sun";
    }
}

updateThemeIcon();

// Change theme when button is clicked
if (themeToggle) {
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        const currentTheme =
            document.body.classList.contains("light-theme")
                ? "light"
                : "dark";

        localStorage.setItem("portfolio-theme", currentTheme);

        updateThemeIcon();

    });
}
