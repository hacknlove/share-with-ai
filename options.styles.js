const stylesForm = document.getElementById('stylesForm')
const stylesTextArea = document.getElementById('stylesTextArea')

chrome.storage.sync.get(['styles'], (result) => {
    stylesTextArea.value = result.styles ?? '';
    stylesTextArea.previousElementSibling.textContent = stylesTextArea.value;
});

stylesForm.addEventListener("submit", () => {
    chrome.storage.sync.set({ styles: stylesTextArea.value }, () => {
        alert('Estilos guardados correctamente.')
    })
})
