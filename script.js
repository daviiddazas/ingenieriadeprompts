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

// Configurar reproducción del video al hacer hover con sonido activo
const videoContainer = document.querySelector('#videoContainer');
const heroVideo = document.querySelector('#heroVideo');

if (videoContainer && heroVideo) {
  videoContainer.addEventListener('mouseenter', () => {
    // Cambiar la URL para iniciar la reproducción con sonido
    const baseUrl = 'https://www.youtube.com/embed/LyE7br0rvB0';
    heroVideo.src = baseUrl + '?autoplay=1';
  });
  
  videoContainer.addEventListener('mouseleave', () => {
    // Pausar el video cuando se va el cursor
    const baseUrl = 'https://www.youtube.com/embed/LyE7br0rvB0';
    heroVideo.src = baseUrl + '?autoplay=0';
  });
}

const promptAssistantModal = document.querySelector('#promptAssistantModal');
const promptAssistantBody = document.querySelector('#promptAssistantBody');
const openPromptAssistantBtn = document.querySelector('#openPromptAssistantBtn');
const closePromptAssistantBtn = document.querySelector('#closePromptAssistantBtn');

let promptBotWindow = null;
let promptBotForm = null;
let promptBotInput = null;

const initPromptAssistant = () => {
  if (promptAssistantBody.innerHTML) return;
  promptAssistantBody.innerHTML = `
    <div id="promptBotWindow" style="min-height: 300px; background: #f7fbff; border: 1px solid rgba(15, 76, 117, 0.12); border-radius: 1rem; padding: 1.25rem; overflow-y: auto; display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 1rem;"></div>
    <form id="promptBotForm" class="prompt-bot-form">
      <input id="promptBotInput" class="prompt-bot-input" type="text" placeholder="Escribe tu pregunta sobre prompts..." autocomplete="off" required />
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  `;
  promptBotWindow = document.querySelector('#promptBotWindow');
  promptBotForm = document.querySelector('#promptBotForm');
  promptBotInput = document.querySelector('#promptBotInput');
  attachPromptFormListener();
  addPromptBotMessage('Hola, soy el asistente de ingeniería de prompts. Pregunta aquí sobre definición, características, tipos o cómo funcionan los prompts para educación.', 'bot');
};

const attachPromptFormListener = () => {
  if (promptBotForm) {
    promptBotForm.removeEventListener('submit', handlePromptSubmit);
    promptBotForm.addEventListener('submit', handlePromptSubmit);
  }
};

const handlePromptSubmit = (event) => {
  event.preventDefault();
  const question = promptBotInput.value.trim();
  if (!question) return;
  addPromptBotMessage(question, 'user');
  const answer = answerPromptQuery(question);
  setTimeout(() => {
    addPromptBotMessage(answer, 'bot');
  }, 250);
  promptBotInput.value = '';
  if (promptBotInput) promptBotInput.focus();
};

const promptKnowledge = [
  {
    topic: 'definición',
    keywords: ['qué es', 'definición', 'prompt', 'prompts'],
    answer: 'Un prompt es una instrucción o conjunto de instrucciones que se proporciona a un modelo de lenguaje para que genere texto, traduzca idiomas, escriba contenido creativo o responda preguntas de manera informativa. La claridad, especificidad y el contexto son clave para obtener respuestas útiles y precisas.'
  },
  {
    topic: 'claridad',
    keywords: ['claridad', 'claro', 'ambigüedad'],
    answer: 'La claridad en un prompt significa que la instrucción es precisa y no ambigua. Un prompt claro reduce la probabilidad de malinterpretación y mejora la calidad de la respuesta del modelo.'
  },
  {
    topic: 'contexto',
    keywords: ['contexto', 'información', 'situación'],
    answer: 'Los prompts efectivos a menudo incluyen suficiente contexto para que el modelo genere una respuesta relevante y precisa. El contexto puede ser explícito en la instrucción o implícito en la situación en que se utiliza el prompt.'
  },
  {
    topic: 'especificidad',
    keywords: ['especificidad', 'específico', 'detallado'],
    answer: 'La especificidad guía al modelo hacia una respuesta más focalizada. Un prompt específico suele limitar el alcance y la forma de la respuesta para que el resultado sea más útil.'
  },
  {
    topic: 'longitud',
    keywords: ['longitud', 'largo', 'corto'],
    answer: 'La longitud de un prompt debe ser apropiada para la tarea. Un prompt demasiado corto puede no proporcionar suficiente información, mientras que uno demasiado largo puede ser confuso o redundante. Busca un equilibrio entre contexto y concisión.'
  },
  {
    topic: 'tipo de prompt',
    keywords: ['tipo', 'clases', 'categorías', 'estructurales', 'secuenciales', 'argumentales', 'condicionales', 'comparativos', 'vacíos'],
    answer: 'Existen varios tipos de prompts: estructurales para organizar ideas; secuenciales para procesos paso a paso; argumentales para apoyar afirmaciones; condicionales para escenarios hipotéticos; comparativos para contrastar elementos; y vacíos para fomentar creatividad.'
  },
  {
    topic: 'shot prompting',
    keywords: ['zero-shot', 'one-shot', 'few-shot', 'shot'],
    answer: 'El shot prompting se refiere a la cantidad de ejemplos proporcionados al modelo: zero-shot no usa ejemplos, one-shot usa un solo ejemplo, y few-shot usa varios ejemplos para orientar la respuesta del modelo.'
  },
  {
    topic: 'funcionamiento',
    keywords: ['funciona', 'funcionamiento', 'procesa', 'modelo'],
    answer: 'Los prompts funcionan como entrada para el modelo. El modelo analiza el contexto y las palabras clave, genera texto basándose en probabilidades y devuelve una respuesta que debe ser evaluada y refinada si es necesario.'
  },
  {
    topic: 'educación',
    keywords: ['educativo', 'educación', 'estudiantes', 'aula'],
    answer: 'En educación, los prompts permiten crear contenido personalizado, generar preguntas, explicar conceptos complejos y facilitar la interacción entre estudiantes y tecnologías basadas en inteligencia artificial.'
  }
];

const createPromptBotMessage = (text, sender) => {
  const message = document.createElement('div');
  message.className = `prompt-bot-message ${sender}`;
  message.textContent = text;
  return message;
};

const addPromptBotMessage = (text, sender) => {
  if (!promptBotWindow) return;
  const message = createPromptBotMessage(text, sender);
  promptBotWindow.appendChild(message);
  setTimeout(() => {
    promptBotWindow.scrollTop = promptBotWindow.scrollHeight;
  }, 0);
};

const closePromptAssistant = () => {
  if (promptAssistantModal) {
    promptAssistantModal.classList.add('hidden');
    promptAssistantModal.setAttribute('aria-hidden', 'true');
  }
};

const openPromptAssistant = () => {
  initPromptAssistant();
  if (promptAssistantModal) {
    promptAssistantModal.classList.remove('hidden');
    promptAssistantModal.setAttribute('aria-hidden', 'false');
  }
  if (promptBotInput) {
    setTimeout(() => promptBotInput.focus(), 300);
  }
};

if (openPromptAssistantBtn) {
  openPromptAssistantBtn.addEventListener('click', openPromptAssistant);
}

if (closePromptAssistantBtn) {
  closePromptAssistantBtn.addEventListener('click', closePromptAssistant);
}

if (promptAssistantModal) {
  const backdrop = promptAssistantModal.querySelector('[data-modal-close]');
  if (backdrop) {
    backdrop.addEventListener('click', closePromptAssistant);
  }
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && promptAssistantModal && !promptAssistantModal.classList.contains('hidden')) {
    closePromptAssistant();
  }
});

const answerPromptQuery = (query) => {
  const normalized = query.toLowerCase();
  const matched = promptKnowledge.find((item) => item.keywords.some((keyword) => normalized.includes(keyword)));
  if (matched) {
    return matched.answer;
  }

  return 'Puedo ayudarte con definiciones y características de prompts, tipos de prompts, shot prompting y cómo funcionan los prompts en educación. Por favor, formula tu pregunta mencionando algún concepto como claridad, contexto, especificidad, tipos o funcionamiento.';
};
