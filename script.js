// Cambia los colores del título en estilo arcoíris
const titulo = document.getElementById('titulo');
let hue = 0;

function cambiarColorArcoiris() {
    titulo.style.color = `hsl(${hue}, 100%, 50%)`;
    hue += 2; // Cambia el tono del color gradualmente
    if (hue >= 360) {
        hue = 0; // Reinicia el ciclo del arcoíris
    }
}

function irALink(url) {
    window.location.href = url; // Redirige al enlace cuando se hace clic en el botón
}

setInterval(cambiarColorArcoiris, 100); // Cambia el color cada 100ms
