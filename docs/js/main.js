document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Toggle apertura/chiusura
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        menu.classList.toggle("active");
    });

    // Chiusura cliccando fuori
    document.addEventListener("click", (e) => {
        const isClickInsideMenu = menu.contains(e.target);
        const isClickOnToggle = toggle.contains(e.target);

        if (!isClickInsideMenu && !isClickOnToggle) {
        menu.classList.remove("active");
        }
    });
});