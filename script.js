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

const promptTopics = [
  { id: '1', title: 'Definición de prompt y prompt engineering', topic: 'prompt definición' },
  { id: '2', title: 'Modelos de lenguaje a gran escala (LLM)', topic: 'llm' },
  { id: '3', title: 'Metodología 4-D para optimizar prompts', topic: 'metodología 4-d' },
  { id: '4', title: 'Cadena de pensamiento y razonamiento paso a paso', topic: 'cadena de pensamiento' },
  { id: '5', title: 'Roles, formatos y aplicación práctica de prompts', topic: 'roles' },
  { id: '6', title: 'Ética y uso responsable de prompts', topic: 'ética' },
  { id: '7', title: 'Aplicaciones de IA en educación y otros sectores', topic: 'aplicaciones' }
];

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
  addPromptBotMessage('¡Hola! Soy tu asistente de ingeniería de prompts. Puedo ayudarte con varios temas clave para que tus preguntas a la IA sean más claras y efectivas. Elige una opción escribiendo el número o haz tu pregunta directamente:', 'bot');
  addPromptBotMessage('1. Definición de prompt y prompt engineering\n2. Modelos de lenguaje a gran escala (LLM)\n3. Metodología 4-D para optimizar prompts\n4. Cadena de pensamiento y razonamiento paso a paso\n5. Roles, formatos y aplicación práctica de prompts\n6. Ética y uso responsable de prompts\n7. Aplicaciones de IA en educación y otros sectores', 'bot');
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
  },
  {
    topic: 'prompt definición',
    keywords: ['qué es un prompt', 'definición de prompt', 'prompt para chatgpt', 'prompt'],
    answer: 'Un prompt es el texto o instrucción inicial que se le da al modelo para generar una respuesta. Actúa como un disparador que indica el tema, estilo, formato y tipo de respuesta que se espera de la IA.'
  },
  {
    topic: 'llm',
    keywords: ['llm', 'modelos de lenguaje', 'modelos de lenguaje a gran escala', 'large language model'],
    answer: 'Los LLM son modelos de lenguaje a gran escala entrenados con grandes corpus de texto para predecir tokens y generar lenguaje. Aprenden patrones de gramática, semántica y contexto para realizar tareas como responder preguntas, resumir o crear contenido.'
  },
  {
    topic: 'ingeniería de prompts',
    keywords: ['ingeniería de prompts', 'ingenieria de prompts', 'prompt engineering', 'fundamentos'],
    answer: 'La ingeniería de prompts es el proceso de diseñar, experimentar y optimizar instrucciones para que los modelos de IA generativa produzcan respuestas más precisas, relevantes y útiles.'
  },
  {
    topic: 'metodología 4-d',
    keywords: ['4-d', '4 d', 'metodología 4d', 'metodologia 4-d', '4d'],
    answer: 'La metodología 4-D para prompts incluye: Deconstruir la tarea, Diagnosticar la claridad, Desarrollar la mejor instrucción y Entregar resultados optimizados tras evaluar y ajustar la salida.'
  },
  {
    topic: 'cadena de pensamiento',
    keywords: ['cadena de pensamiento', 'chain of thought', 'cot', 'pensemos paso a paso', 'explica paso a paso'],
    answer: 'La cadena de pensamiento es una técnica que hace que el modelo razone de forma secuencial. Al pedirle pasos intermedios, mejora respuestas a tareas complejas y cuida la lógica detrás de las soluciones.'
  },
  {
    topic: 'auto-consistencia',
    keywords: ['auto-consistencia', 'auto consistencia', 'autoconsistencia', 'consistencia'],
    answer: 'Auto-consistencia consiste en generar varias respuestas y elegir la más coherente. Esta técnica ayuda a filtrar resultados inconsistentes y encontrar opciones más fiables.'
  },
  {
    topic: 'roles',
    keywords: ['rol', 'roles', 'actúa como', 'actua como', 'asumir rol'],
    answer: 'Asignar un rol en el prompt, como pedir al modelo que actúe como profesor, investigador o diseñador, guía el tono, el estilo y la profundidad de la respuesta.'
  },
  {
    topic: 'formato de salida',
    keywords: ['formato de salida', 'tipo de salida', 'tabla', 'lista', 'ensayo', 'código', 'rúbrica'],
    answer: 'Definir el formato de salida en el prompt permite controlar mejor la estructura de la respuesta: lista, tabla, resumen, código, rúbrica u otro formato específico.'
  },
  {
    topic: 'iterar y refinar',
    keywords: ['iterar', 'refinar', 'ajustar', 'mejorar prompt', 'optimizar prompt'],
    answer: 'Iterar y refinar un prompt implica probar respuestas, detectar errores y ajustar la instrucción. La práctica constante mejora la precisión y reduce ambigüedades.'
  },
  {
    topic: 'inteligencia artificial',
    keywords: ['inteligencia artificial', 'ia', 'artificial', 'modelos', 'aplicaciones de ia'],
    answer: 'La inteligencia artificial estudia sistemas que pueden realizar tareas que normalmente requieren inteligencia humana. En investigación, se analizan modelos, datos y aplicaciones para mejorar la toma de decisiones y la automatización responsable.'
  },
  {
    topic: 'investigación en ia',
    keywords: ['investigación en ia', 'investigacion en ia', 'research', 'metodología de investigación'],
    answer: 'La investigación en IA explora técnicas, metodologías y resultados para avanzar en modelos más precisos, explicables y éticos. Se enfoca en innovaciones, validación experimental y aplicaciones de impacto social.'
  },
  {
    topic: 'aplicaciones',
    keywords: ['aplicaciones', 'uso', 'casos de uso', 'sectores', 'educación', 'salud', 'marketing'],
    answer: 'Las aplicaciones de IA incluyen educación, salud, marketing, manufactura y muchos otros sectores. Una buena prompt guía la IA para generar soluciones útiles en contextos específicos.'
  },
  {
    topic: 'ética',
    keywords: ['ética', 'etica', 'responsable', 'sesgo', 'transparencia', 'privacidad'],
    answer: 'El diseño de prompts también debe considerar la ética: evitar sesgos, proteger la privacidad y garantizar que las respuestas sean transparentes y apropiadas para el contexto.'
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
  const normalized = query.toLowerCase().trim();
  const selectedTopic = promptTopics.find((item) => {
    return normalized === item.id || normalized === `opción ${item.id}` || normalized === `opcion ${item.id}` || normalized.startsWith(`${item.id} `) || normalized.includes(item.topic) || normalized.includes(item.title.toLowerCase());
  });

  if (selectedTopic) {
    const matched = promptKnowledge.find((item) => item.topic === selectedTopic.topic);
    if (matched) {
      return `Has elegido la opción ${selectedTopic.id}: ${matched.answer}`;
    }
  }

  if (['opciones', 'temas', 'ayuda', 'menu', 'lista'].some((word) => normalized.includes(word))) {
    return `Puedo ayudarte con estos temas:\n${promptTopics.map((item) => `${item.id}. ${item.title}`).join('\n')}\nEscribe el número del tema o haz una pregunta específica.`;
  }

  const matched = promptKnowledge.find((item) => item.keywords.some((keyword) => normalized.includes(keyword)));
  if (matched) {
    return matched.answer;
  }

  return `Puedo ayudarte con estos temas:\n${promptTopics.map((item) => `${item.id}. ${item.title}`).join('\n')}\nEscribe un número o una pregunta sobre alguno de ellos.`;
};
