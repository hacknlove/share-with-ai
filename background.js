// Crear la entrada en el menú contextual para imágenes
chrome.contextMenus.create({
    id: "imageClick",  
    title: "Mostrar diálogo",  
    contexts: ["image"]  // Solo aparece al hacer clic derecho sobre imágenes
  }, () => {
    console.log('Menú contextual creado:', chrome.runtime.lastError || 'Sin errores');
  });
  
  // Listener para cuando se selecciona la entrada en el menú contextual
  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId !== "imageClick") {
        return;
    }

    const storage = await chrome.storage.sync.get(['apiKey', 'styles']);

    console.log('API Key:', storage);

    if (!storage.apiKey || !storage.styles) {
        await chrome.storage.sync.set({ reason: 'missingConfig' });
        chrome.runtime.openOptionsPage()
        return
    }
      
    await chrome.scripting.executeScript({
        target: { tabId: tab.id },  // Especifica en qué pestaña inyectar el script
        files: ['content-script.js']  // El archivo del script de contenido a inyectar
    })
});
  