document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('current-year').textContent = new Date().getFullYear();
