let links = document.querySelectorAll("nav a");

links.forEach(link => link.addEventListener("click", (e) => {
    links.forEach(el => el.classList.remove('active'));

    e.target.parentElement.classList.add("active");
}))