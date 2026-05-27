const cards = document.querySelectorAll('.module-card');
const searchInput = document.querySelector('#module-search');
const modalElement = document.querySelector('#moduleModal');
const modalTitle = document.querySelector('#moduleModalLabel');
const modalBody = document.querySelector('#moduleModalBody');
const modalFooter = document.querySelector('#moduleModalFooter');
const closeModalButton = document.querySelector('#closeModalButton');

const moduleDetails = {
  'GEMA PARA INGENIERIA DE PROMPTS': {
    subtitle: 'Estructura clara de un prompt educativo',
    items: [
      'Plantilla guía para planeación pedagógica.',
      'Elementos: contexto, objetivo, formato y tono.',
      'Referencia a prácticas éticas en IA aplicada.'
    ]
  },
  'COSNTRUCCIÓN DE VIDEOS USANDO LA IA': {
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
  'Módulo 10': {
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

const closeModal = () => {
  modalElement.classList.add('hidden');
  modalElement.setAttribute('aria-hidden', 'true');
};

const openModuleModal = (moduleName) => {
  const detail = moduleDetails[moduleName];
  if (!detail) return;

  modalTitle.textContent = moduleName;
  modalBody.innerHTML = `
    <p class="text-muted">${detail.subtitle}</p>
    <ul class="feature-list">
      ${detail.items.map((item) => `<li>• ${item}</li>`).join('')}
    </ul>
    <div class="placeholder-box" style="margin-top: 1.5rem;">
      <div style="text-align:center;">
        <div style="font-size: 2rem;">📄</div>
        <div style="margin-top: 1rem;">Espacio reservado para elemento visual de referencia</div>
      </div>
    </div>
  `;

  modalFooter.innerHTML = `
    <small class="text-muted">Todos los recursos simulados declarados bajo licencias Creative Commons y código abierto.</small>
  `;

  modalElement.classList.remove('hidden');
  modalElement.setAttribute('aria-hidden', 'false');
};

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase().trim();
    cards.forEach((card) => {
      const title = card.dataset.module.toLowerCase();
      const description = card.dataset.summary.toLowerCase();
      const matches = title.includes(query) || description.includes(query);
      card.style.display = matches ? '' : 'none';
    });
  });
}

const moduleButtons = document.querySelectorAll('.open-module');
moduleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openModuleModal(button.dataset.module);
  });
});

closeModalButton.addEventListener('click', closeModal);
modalElement.querySelector('[data-modal-close]').addEventListener('click', closeModal);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modalElement.classList.contains('hidden')) {
    closeModal();
  }
});
