
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId).parentNode;
    const content = section.querySelector('.section-content');

    if (section.classList.contains('open')) {
        content.style.maxHeight = null; // Colapsa
    } else {
        content.style.maxHeight = content.scrollHeight + "px"; // Expande dinámicamente
    }
    section.classList.toggle("open");
}



function openModal(documentPath) {
    event.stopPropagation();  // Evita que el clic cierre la sección
    const modal = document.getElementById('modal');
    const documentViewer = document.getElementById('documentViewer');
    documentViewer.src = documentPath; // Ruta del documento local
    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    const documentViewer = document.getElementById('documentViewer');
    modal.style.display = 'none';
    documentViewer.src = ''; // Limpiar el iframe al cerrar
}
