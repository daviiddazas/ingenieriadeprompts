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
  'PRODUCCIÓN DE PODCAST USANDO LA IA': {
    subtitle: 'Guion y pódcast automatizado con IA',
    items: [
      'NoteGPT para diseño de guiones pedagógicos.',
      'Generación de pódcast con enfoque formativo.',
      'Adaptado a lenguajes claros y accesibles.'
    ]
  },
  'PRODUCCIÓN DE IMÁGENES USANDO LA IA': {
    subtitle: 'Generación visual con IA',
    items: [
      'Creación de imágenes y portadas didácticas.',
      'Edición visual para materiales de aula.',
      'Uso responsable de IA visual open source.'
    ]
  },
  'CONSTUCCIÓN DE CHATBOT': {
    subtitle: 'Diseño y despliegue de chatbot con IA',
    items: [
      'Diseño de flujo conversacional.',
      'Implementación ética de asistentes IA.',
      'Propuesta de uso en aula y acompañamiento.'
    ]
  },
  'PRODUCCIÓN DE INFOGRAFIAS USANDO LA IA': {
    subtitle: 'Infografías educativas con IA',
    items: [
      'Diseño visual para lecciones.',
      'Comunicación clara de conceptos.',
      'Adaptación para recursos digitales y físicos.'
    ]
  },
  'CONSTRUCCIÓN DE UN MAPA CONCEPTUAL USANDO LA IA': {
    subtitle: 'Mapas conceptuales generados con IA',
    items: [
      'Herramientas para pensamiento visual.',
      'Conexión de ideas con IA.',
      'Organización de conceptos para aprendizaje activo.'
    ]
  },
  'CONSTRUCCIÓN DE PRESENTACIONES CON IA': {
    subtitle: 'Presentaciones multimedia con IA',
    items: [
      'Diseño de diapositivas con IA.',
      'Recursos visuales para exposición.',
      'Formatos interactivos y accesibles.'
    ]
  },
  'PRODUCCIÓN DE VIDEO CON UN AVATAR USANDO LA IA': {
    subtitle: 'Video con avatar narrativo generado por IA',
    items: [
      'Guion audiovisual con avatar virtual.',
      'Producción de video inmersivo.',
      'Formato para presentación y difusión.'
    ]
  },
  'Módulo 10': {
    subtitle: 'Chatbot tutor para el aula',
    items: [
      'Diseño de tutor virtual con Mizou / Botpress.',
      'Automatiza la atención formativa.',
      'Propuesta de uso ético y contextualizado.'
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
