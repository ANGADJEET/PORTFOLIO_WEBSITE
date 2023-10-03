function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
        // Close the menu if it's open
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
}
