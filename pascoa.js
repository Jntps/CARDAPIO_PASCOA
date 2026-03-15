const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");
const revealItems = document.querySelectorAll(".reveal");

menuBtn?.addEventListener("click", () => {
    navLinks?.classList.toggle("open");
});

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        menuCards.forEach((card) => {
            const category = card.dataset.category;
            const showCard = filter === "todos" || category === filter;
            card.classList.toggle("hidden", !showCard);
        });
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.16
    }
);

revealItems.forEach((item) => observer.observe(item));
