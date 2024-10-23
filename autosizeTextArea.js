
document.querySelectorAll('textarea.autosize').forEach((textarea) => {
    const previous = textarea.previousElementSibling;
    if (!previous.classList.contains('textArea-copy')) {
        return
    }
    previous.textContent = textarea.value;

    textarea.addEventListener('input', (event) => {
        previous.textContent = event.target.value;
    });
});