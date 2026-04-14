document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('clickMeButton');
    button.addEventListener('click', () => {
        alert('Hello! You clicked the button.');
    });
});