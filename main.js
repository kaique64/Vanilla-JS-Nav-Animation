/* Pegando todos os elementos section */
const sections = document.querySelectorAll('section');
const selection = document.querySelector('.selection');
const texts = document.querySelectorAll('.texts');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const className = entry.target.className;
            const active = document.querySelector(`[data-page=${className}]`);
            /* Pegando coordenadas X e Y */
            const coords = active.getBoundingClientRect();
            /* Definindo direções */
            const directs = {
                height: coords.height,
                width: coords.width,
                top: coords.top,
                left: coords.left,
            };

            if (entry.isIntersecting) {
                selection.style.setProperty("left", `${directs.left}px`);
                selection.style.setProperty("top", `${directs.top}px`);
                selection.style.setProperty("width", `${directs.width}px`);
                selection.style.background = '#fff';
            }
        });
    },
    { threshold: 0.5 },
);

sections.forEach((observe) => {
    observer.observe(observe);
});
