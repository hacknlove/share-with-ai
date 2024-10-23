// Crear un elemento de diálogo
let dialog = document.createElement('dialog');
dialog.setAttribute('id', 'image-dialog');
dialog.innerHTML = `
  <form method="dialog">
    <p>Has hecho clic en una imagen</p>
    <button id="close-btn">Cerrar</button>
  </form>
`;
document.body.appendChild(dialog);

// Mostrar el diálogo
dialog.showModal();

// Cerrar el diálogo cuando se hace clic en el botón
document.getElementById('close-btn').addEventListener('click', () => {
  dialog.close();
});
