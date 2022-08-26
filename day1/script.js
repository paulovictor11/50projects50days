const panels = document.querySelectorAll(".panel");

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}

function addActiveClass(panel) {
    panel.classList.add("active");
}

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        addActiveClass(panel);
    });
});
