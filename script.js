const cards = document.querySelectorAll('.module-card');
const searchInput = document.querySelector('#module-search');
const modalTitle = document.querySelector('#moduleModalLabel');
const modalBody = document.querySelector('#moduleModalBody');
const modalFooter = document.querySelector('#moduleModalFooter');

const moduleDetails = {
  'Módulo 1': {
    subtitle: 'Estructura clara de un prompt educativo',
    items: [
      'Plantilla guía para planeación pedagógica.',
      'Elementos: contexto, objetivo, formato y tono.',
      'Referencia a prácticas éticas en IA aplicada.'
    ]
  },
  'Módulo 2': {
    subtitle: 'Video educativo guiado por prompts estructurados',
    items: [
      'Taller práctico con NotebookLM / Google Vids.',
      'Producción hipermedia para clases activas.',
      'Resultado: recursos audiovisuales inclusivos.'
    ]
  },
  'Módulo 3': {
    subtitle: 'Guion y pódcast automatizado',
    items: [
      'NoteGPT para diseño de guiones pedagógicos.',
      'Generación de pódcast con enfoque formativo.',
      'Adaptado a lenguajes claros y accesibles.'
    ]
  },
  'Módulo 4': {
    subtitle: 'Generación visual con herramientas abiertas',
    items: [
      'Creación de imágenes y portadas didácticas.',
      'Edición visual para materiales de aula.',
      'Uso responsable de IA visual open source.'
    ]
  },
  'Módulo 5': {
    subtitle: 'Búsqueda y validación académica',
    items: [
      'Consensus para artículos revisados por pares.',
      'Evaluación crítica de fuentes científicas.',
      'Apoyo a proyectos de investigación educativa.'
    ]
  },
  'Módulo 6': {
    subtitle: 'Chatbot tutor para el aula',
    items: [
      'Diseño de tutor virtual con Mizou / Botpress.',
      'Automatiza la atención formativa.',
      'Propuesta de uso ético y contextualizado.'
    ]
  },
  'Módulo 7': {
    subtitle: 'Infografía educativa con IA',
    items: [
      'Diseño visual de conceptos clave.',
      'Exporta piezas listas para clase.',
      'Comunicación clara para estudiantes.'
    ]
  },
  'Módulo 8': {
    subtitle: 'Mapas conceptuales y diagramas',
    items: [
      'Automatización de esquemas didácticos.',
      'Diagramas que facilitan la comprensión.',
      'Herramientas visuales para pensamiento crítico.'
    ]
  }
};

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase().trim();
    cards.forEach((card) => {
      const title = card.dataset.module.toLowerCase();
      const description = card.dataset.summary.toLowerCase();
      const matches = title.includes(query) || description.includes(query);
      card.parentElement.style.display = matches ? '' : 'none';
    });
  });
}

const openModuleModal = (moduleName) => {
  const detail = moduleDetails[moduleName];
  if (!detail) return;

  modalTitle.textContent = moduleName;
  modalBody.innerHTML = `
    <p class="mb-3 text-secondary">${detail.subtitle}</p>
    <ul class="list-unstyled feature-list">
      ${detail.items.map(item => `<li>• ${item}</li>`).join('')}
    </ul>
    <div class="placeholder-box mt-4">
      <div class="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-layout-text-sidebar" viewBox="0 0 16 16">
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9A1.5 1.5 0 0 1 14.5 14h-13A1.5 1.5 0 0 1 0 12.5v-9ZM1.5 3a.5.5 0 0 0-.5.5V6h15V3.5a.5.5 0 0 0-.5-.5h-13Z"/>
          <path d="M0 8.5A.5.5 0 0 1 .5 8H5.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Zm0 2A.5.5 0 0 1 .5 10H5.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Zm0 2A.5.5 0 0 1 .5 12H5.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z"/>
        </svg>
        <div class="mt-2">Espacio reservado para elemento visual de referencia</div>
      </div>
    </div>
  `;

  modalFooter.innerHTML = `
    <small class="text-muted">Todos los recursos simulados declarados bajo licencias Creative Commons y código abierto.</small>
  `;
};

const moduleButtons = document.querySelectorAll('.open-module');
moduleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openModuleModal(button.dataset.module);
  });
});
