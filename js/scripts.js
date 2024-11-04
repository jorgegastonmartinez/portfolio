const navburger = document.querySelector("#navburger");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const mainContent = document.getElementById('main-content');

abrir.addEventListener("click", () => {
    navburger.classList.add("visible");
    abrir.classList.add('hidden');
    mainContent.classList.add('content-shift');
})

cerrar.addEventListener("click", () => {
    navburger.classList.remove("visible");
    abrir.classList.remove('hidden');
    mainContent.classList.remove('content-shift');
})

document.querySelectorAll('[tabindex="0"]').forEach(element => {
    element.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            element.click();
        }
    });
});