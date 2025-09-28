document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("darkModeToggle");

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Cambiar el texto del botón dinámicamente
        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "☀️ Modo Claro";
        } else {
            toggleBtn.textContent = "🌙 Modo Oscuro";
        }
    });
});
