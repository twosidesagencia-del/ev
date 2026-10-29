/* ==========================================================================
   ESTÉTICA VIRAL — script.js
   Arquivo único: primeiro o conteúdo (textos, imagens, preços, links),
   depois o motor do quiz.
   ========================================================================== */

/* ==========================================================================
   CONTEÚDO DO QUIZ — edite só este arquivo para mudar textos, imagens e links
   ==========================================================================
   Dica: tudo que está entre aspas é texto que aparece na tela.
   Use <b>palavra</b> para deixar em negrito e <span class="hl">palavra</span>
   para destacar em verde.
   ========================================================================== */

const CONFIG = {
  // Link do checkout (Hotmart).
  // ATENÇÃO: troque pelo link da OFERTA EM EURO (17 €) da Hotmart antes de publicar.
  checkoutUrl: 'https://pay.hotmart.com/H107485879A?checkoutMode=10&bid=1789590144649',

  // Vídeo da VSL na VTurb (Converte AI). Copie o "id" e o "script" de
  // dentro do código que a VTurb te dá, no player > "obter código".
  // Deixe os dois em '' para usar o link do YouTube/Vimeo abaixo, ou o
  // espaço reservado se nenhum dos dois estiver preenchido.
  vturbId: 'vid-6a9c7ed7f796faf11e62ebe5',
  vturbScript: 'https://scripts.converteai.net/170f8c81-aab8-4672-803c-6690c002a425/players/6a9c7ed7f796faf11e62ebe5/v4/player.js',

  // Link do vídeo (YouTube/Vimeo/Panda) — só é usado se vturbId estiver vazio.
  // Ex.: 'https://www.youtube.com/embed/SEU_ID?rel=0'
  videoUrl: '',

  // Minutos do contador de escassez na página final.
  ofertaMinutos: 15,

  // Preços exibidos na oferta.
  produto: 'Estética Viral',
  precoDe: '67 €',
  precoPor: '17',
  moeda: '€',
};

const STEPS = [

  /* 01 — Abertura ------------------------------------------------------- */
  {
    id: 'intro',
    type: 'intro',
    title: '¡Copia, pega y hazte viral!',
    image: 'img/comparativo-viral.webp',
    imageAlt: 'Comparación entre una publicación que no es viral, con 618 visualizaciones, y otra que sí lo es, con 1,5 millones de visualizaciones',
    text: 'Descubre exactamente qué está <b>frenando el crecimiento de tu perfil</b> con un <span class="hl">análisis gratuito y rápido</span>.',
    badge: '⏱️ Tardas menos de 2 minutos',
    cta: 'Empezar el análisis gratuito',
  },

  /* 02 — Nicho (múltipla escolha, cards com foto) ------------------------ */
  {
    id: 'nicho',
    type: 'cards',
    multi: true,
    question: 'Trabajas con:',
    hint: '¿Trabajas con más de uno? Selecciona todos los que quieras.',
    cta: 'Continuar',
    options: [
      { value: 'injetaveis',   label: 'Medicina estética e inyectables',
        image: 'img/nicho-injetaveis.webp',   alt: 'Aplicación de relleno de labios' },
      { value: 'dermatologia', label: 'Dermocosmética y salud de la piel',
        image: 'img/nicho-dermatologia.webp', alt: 'Limpieza facial con aparatología' },
      { value: 'gestao',       label: 'Gestión de centro o varios tratamientos',
        image: 'img/nicho-gestao.webp',       alt: 'Profesional en consulta con una clienta' },
      { value: 'facial',       label: 'Cuidado de la piel y estética facial',
        image: 'img/nicho-facial.webp',       alt: 'Aplicación de mascarilla facial a una clienta' },
    ],
  },

  /* 03 — Clientes por mês ------------------------------------------------ */
  {
    id: 'clientes',
    type: 'choice',
    question: '¿Cuántas clientas consigues al mes a través de Instagram?',
    image: 'img/clientes-instagram.webp',
    imageAlt: 'Profesional de la estética sonriendo al ver en el móvil notificaciones de nuevos seguidores y ventas',
    options: [
      { value: '0',    label: 'Ninguna.' },
      { value: '1-3',  label: 'De 1 a 3 clientas.' },
      { value: '4-10', label: 'De 4 a 10 clientas.' },
      { value: '10+',  label: 'Más de 10, pero quiero aún más.' },
    ],
  },

  /* 04 — Ritmo de crescimento -------------------------------------------- */
  {
    id: 'crescimento',
    type: 'choice',
    question: '¿Tu Instagram crece con regularidad?',
    image: 'img/crescimento-instagram.webp',
    imageAlt: 'Dos gráficos de Instagram uno al lado del otro: uno sube y el otro baja',
    options: [
      { value: 'parado',  label: 'Está estancado, casi no crece.' },
      { value: 'devagar', label: 'Crece despacio, menos de lo que me gustaría.' },
      { value: 'oscila',  label: 'Va a rachas: una publicación funciona y las demás pasan desapercibidas.' },
      { value: 'bem',     label: 'Crece bien, pero quiero crecer mucho más.' },
    ],
  },

  /* 05 — Captura do @ ---------------------------------------------------- */
  {
    id: 'perfil',
    type: 'input',
    title: 'Análisis rápido de tu perfil',
    text: 'Vamos a analizar tu perfil y mostrarte los puntos más importantes que tienes que mejorar. Escribe tu @ aquí abajo:',
    label: '¿Cuál es tu @ de Instagram?',
    placeholder: 'tu.perfil',
    cta: 'Analizar mi perfil',
    note: '🔒 Solo usamos tu @ para personalizar el análisis.',
  },

  /* 06 — Carregamento da análise ----------------------------------------- */
  {
    id: 'loading1',
    type: 'loading',
    lines: [
      'Cargando…',
      'Analizando el perfil {handle}…',
      'Espera a que termine el análisis…',
    ],
  },

  /* 07 — Resultado da análise -------------------------------------------- */
  {
    id: 'analise',
    type: 'analysis',
    kicker: 'Análisis completado ✅',
    title: 'Hemos encontrado <b>4 errores</b> que frenan el crecimiento de tu perfil.',
    chart: 'img/grafico-perfis.webp',
    chartAlt: 'Gráfico que compara la curva de crecimiento de los perfiles virales con la línea estancada de tu perfil',
    erros: [
      {
        titulo: 'Error 01: Tu contenido es demasiado comercial.',
        paragrafos: [
          'Tus <b>publicaciones solo mencionan el nombre del tratamiento</b>. Pero quien está deslizando el feed no busca el nombre de la técnica, sino lo que le molesta cuando se mira al espejo cada mañana.',
          'Al final, acaba encontrando la solución en perfiles mejor posicionados que el tuyo.',
        ],
      },
      {
        titulo: 'Error 02: Los formatos que usas no funcionan para tu perfil.',
        paragrafos: [
          'Los tipos de vídeo y de foto que publicas ahora <b>no son los formatos</b> que el algoritmo de Instagram está mostrando.',
          'Por eso tu contenido llega a poca gente y casi no tiene interacciones.',
        ],
      },
      {
        titulo: 'Error 03: Nadie guarda ni comparte tu contenido.',
        paragrafos: [
          'Como tu contenido sigue una línea más comercial, <b>no da ganas de guardarlo ni de enviárselo a otra persona.</b>',
          'Y son precisamente esas dos señales las que hacen que Instagram muestre tu perfil a más gente.',
        ],
      },
      {
        titulo: 'Error 04: Tus descripciones no ayudan al algoritmo.',
        paragrafos: [
          'La descripción es el único espacio donde puedes profundizar, dar contexto y conseguir que la persona deje de deslizar para leer.',
          'Pero, cuando <b>repites lo que ya dices en la imagen o en el vídeo, Instagram penaliza el perfil</b> y no muestra el contenido a nuevos seguidores.',
        ],
      },
    ],
    viradaTitulo: 'La buena noticia: hemos encontrado cómo <span class="hl">acelerar tu crecimiento hasta 6 veces</span>.',
    sliderTitulo: 'Crecimiento del perfil con una estrategia personalizada',
    destaque: 'Al analizar tu perfil, hemos visto que solo con <b>cambiar el formato de tu contenido ya puedes multiplicar tu alcance</b>, sin necesidad de publicar más ni de salir más en cámara.',
    fecho: [
      'Pero esto no funciona con una <b>fórmula genérica</b>.',
      'Cada perfil es único. Vamos a <span class="hl">diseñar una estrategia exclusiva para ti</span> según los servicios que quieras vender.',
    ],
    cta: 'Crear mi plan personalizado',
  },

  /* 08 — Frequência de postagem ------------------------------------------ */
  {
    id: 'frequencia',
    type: 'choice',
    question: '¿Cuántas publicaciones haces a la semana?',
    options: [
      { value: '1',  label: '1 publicación.' },
      { value: '2',  label: '2 publicaciones.' },
      { value: '3',  label: '3 publicaciones.' },
      { value: '4+', label: '4 o más publicaciones.' },
    ],
  },

  /* 09 — Aparecer ou não em vídeo ---------------------------------------- */
  {
    id: 'video',
    type: 'choice',
    question: '¿Prefieres grabar vídeos saliendo tú o no aparecer?',
    options: [
      { value: 'nao-aparecer', label: 'Prefiero no aparecer.' },
      { value: 'aparecer',     label: 'Prefiero grabar y salir yo.' },
      { value: 'flexivel',     label: 'Flexible: combinar vídeos en los que salgo y otros en los que no.' },
    ],
  },

  /* 10 — Objetivo (múltipla escolha, cards ilustrados) -------------------- */
  {
    id: 'objetivo',
    type: 'cards',
    multi: true,
    variant: 'illustration',
    question: '¿Cuál es tu objetivo al atraer nuevos seguidores?',
    hint: 'Puedes seleccionar más de una opción.',
    cta: 'Ver mi plan',
    options: [
      { value: 'agenda', title: 'Llenar la agenda',
        label: 'Tener todas las horas reservadas con clientas de verdad, no con curiosas.',
        image: 'img/objetivo-agenda.webp', alt: 'Agenda dorada con todas las horas reservadas' },
      { value: 'faturamento', title: 'Aumentar la facturación',
        label: 'Vender protocolos y tratamientos de más valor.',
        image: 'img/objetivo-faturamento.webp', alt: 'Gráfico dorado en subida junto a una bolsa de dinero' },
      { value: 'autoridade', title: 'Ganar autoridad',
        label: 'Ser la referente nº 1 en estética de mi zona.',
        image: 'img/objetivo-autoridade.webp', alt: 'Trofeo dorado de referente número 1 en estética' },
      { value: 'conhecimento', title: 'Vender formación',
        label: 'Lanzar cursos, formaciones y mentorías para otras profesionales.',
        image: 'img/objetivo-certificacao.webp', alt: 'Certificado dorado de cursos, formaciones y mentorías' },
    ],
  },

  /* 11 — Carregamento do plano ------------------------------------------- */
  {
    id: 'loading2',
    type: 'loading',
    tone: 'gold',
    lines: [
      'Cargando…',
      'Analizando tus respuestas…',
      'Creando tu plan personalizado…',
    ],
  },

  /* 12 — Oferta / VSL ----------------------------------------------------- */
  {
    id: 'oferta',
    type: 'offer',
    title: '¡Copia, pega y hazte viral!',
    text: 'Prepárate para recibir nuevos seguidores y clientas si haces esto: 👇',
    ctaPrincipal: 'Quiero Estética Viral',
    urgencia: '¡Consigue tu descuento ahora!',
  },
];

/* ==========================================================================
   Estética Viral — motor do quiz
   Renderiza as etapas definidas em content.js e controla o avanço,
   carregamentos e contador da oferta. Sem botão de voltar e sem retomar
   progresso: toda vez que a página carrega, começa da primeira tela.
   ========================================================================== */

(function () {
  'use strict';

  var root      = document.getElementById('quiz');
  var topbar    = document.getElementById('topbar');
  var bar       = document.getElementById('progressBar');
  var counter   = document.getElementById('stepCount');
  var srStatus  = document.getElementById('srStatus');

  // O quiz não guarda progresso entre visitas: toda vez que a página é
  // carregada ou recarregada, começa do zero na primeira tela.
  var state = { index: 0, answers: {} };
  var timers = [];

  document.getElementById('year').textContent = new Date().getFullYear();

  /* --------------------------------------------------------- utilidades -- */

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function checkIcon() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function later(fn, ms) {
    timers.push(setTimeout(fn, ms));
  }

  function announce(text) {
    srStatus.textContent = text;
  }

  // As etapas que contam para a barra de progresso são as perguntas + o @.
  var QUESTION_TYPES = { choice: 1, cards: 1, input: 1 };
  var questionSteps = STEPS.filter(function (s) { return QUESTION_TYPES[s.type]; });

  function handle() {
    var value = state.answers.perfil;
    return value ? '@' + value : 'tu perfil';
  }

  /* ---------------------------------------------------------- navegação -- */
  // Só avança: não existe botão de voltar nem forma de retomar uma etapa
  // anterior — a única saída é seguir em frente ou recarregar a página.

  function go(index) {
    clearTimers();
    state.index = Math.max(0, Math.min(index, STEPS.length - 1));
    render();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function next() { go(state.index + 1); }

  function updateProgress(step) {
    var isQuestion = !!QUESTION_TYPES[step.type];
    topbar.hidden = !isQuestion;
    if (!isQuestion) return;

    var position = questionSteps.indexOf(step) + 1;
    var pct = Math.round((position / questionSteps.length) * 100);
    bar.style.width = pct + '%';
    bar.parentNode.setAttribute('aria-valuenow', String(pct));
    counter.textContent = position + '/' + questionSteps.length;
  }

  /* ------------------------------------------------------------ render --- */

  function render() {
    var step = STEPS[state.index];
    root.innerHTML = '';
    var oldDock = document.querySelector('.dock');
    if (oldDock) oldDock.remove();
    updateProgress(step);

    var view = ({
      intro:    renderIntro,
      choice:   renderChoice,
      cards:    renderCards,
      input:    renderInput,
      loading:  renderLoading,
      analysis: renderAnalysis,
      offer:    renderOffer,
    })[step.type];

    var node = view(step);
    node.classList.add('step');
    root.appendChild(node);
  }

  /* 01 — abertura --------------------------------------------------------- */

  function renderIntro(step) {
    var wrap = el('section', 'center');

    if (step.badge) wrap.appendChild(el('span', 'badge', step.badge));
    wrap.appendChild(el('h1', null, step.title));

    if (step.image) {
      var hero = el('figure', 'hero');
      hero.style.margin = '0 0 22px';
      var img = new Image();
      img.src = step.image;
      img.alt = step.imageAlt || '';
      img.width = 1100;
      img.height = 1084;
      hero.appendChild(img);
      wrap.appendChild(hero);
    }

    wrap.appendChild(el('p', 'lead', step.text));

    var cta = el('button', 'btn btn--pulse', step.cta + ' <span class="btn__arrow">→</span>');
    cta.type = 'button';
    cta.addEventListener('click', next);
    wrap.appendChild(cta);

    return wrap;
  }

  /* 03/04/08/09 — pergunta de resposta única ------------------------------ */

  function renderChoice(step) {
    var wrap = el('section');

    if (step.image) {
      var hero = el('figure', 'hero');
      var img = new Image();
      img.src = step.image;
      img.alt = step.imageAlt || '';
      img.loading = 'lazy';
      hero.appendChild(img);
      wrap.appendChild(hero);
    }

    wrap.appendChild(el('h2', 'center', step.question));
    if (step.hint) wrap.appendChild(el('p', 'hint center', step.hint));

    var list = el('div', 'options');
    list.setAttribute('role', 'radiogroup');
    list.setAttribute('aria-label', step.question.replace(/<[^>]+>/g, ''));

    step.options.forEach(function (option) {
      var btn = el('button', 'option');
      btn.type = 'button';
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', state.answers[step.id] === option.value ? 'true' : 'false');
      btn.appendChild(el('span', 'option__mark', checkIcon()));
      btn.appendChild(el('span', null, option.label));

      btn.addEventListener('click', function () {
        list.querySelectorAll('.option').forEach(function (o) { o.setAttribute('aria-checked', 'false'); });
        btn.setAttribute('aria-checked', 'true');
        state.answers[step.id] = option.value;
        announce('Respuesta seleccionada: ' + option.label);
        later(next, 320); // avanço automático, como no funil original
      });

      list.appendChild(btn);
    });

    wrap.appendChild(list);
    return wrap;
  }

  /* 02/10 — múltipla escolha em cards ------------------------------------- */

  function renderCards(step) {
    var wrap = el('section');
    wrap.appendChild(el('h2', 'center', step.question));
    if (step.hint) wrap.appendChild(el('p', 'hint center', step.hint));

    var selected = state.answers[step.id] || [];
    var grid = el('div', 'cards');
    grid.setAttribute('role', 'group');
    grid.setAttribute('aria-label', step.question.replace(/<[^>]+>/g, ''));

    var cta = el('button', 'btn', (step.cta || 'Continuar') + ' <span class="btn__arrow">→</span>');
    cta.type = 'button';
    var note = el('p', 'cta-note', 'Selecciona al menos una opción para continuar.');

    function syncCta() {
      var empty = selected.length === 0;
      cta.disabled = empty;
      note.hidden = !empty;
    }

    step.options.forEach(function (option) {
      var card = el('button', 'card' + (step.variant === 'illustration' ? ' card--illustration' : ''));
      card.type = 'button';
      card.setAttribute('role', 'checkbox');
      card.setAttribute('aria-checked', selected.indexOf(option.value) > -1 ? 'true' : 'false');

      var media = el('span', 'card__media');
      var img = new Image();
      img.src = option.image;
      img.alt = option.alt || '';
      img.loading = 'lazy';
      media.appendChild(img);
      card.appendChild(media);

      var body = el('span', 'card__body');
      if (option.title) body.appendChild(el('span', 'card__title', option.title));
      body.appendChild(el('span', 'card__label', option.label));
      card.appendChild(body);

      card.appendChild(el('span', 'card__check', checkIcon()));

      card.addEventListener('click', function () {
        var i = selected.indexOf(option.value);
        if (i > -1) selected.splice(i, 1); else selected.push(option.value);
        card.setAttribute('aria-checked', i > -1 ? 'false' : 'true');
        state.answers[step.id] = selected;
        syncCta();
      });

      grid.appendChild(card);
    });

    wrap.appendChild(grid);

    var ctaWrap = el('div', 'cta-wrap');
    cta.addEventListener('click', next);
    ctaWrap.appendChild(cta);
    ctaWrap.appendChild(note);
    syncCta();
    wrap.appendChild(ctaWrap);

    return wrap;
  }

  /* 05 — captura do @ ----------------------------------------------------- */

  function renderInput(step) {
    var wrap = el('section', 'center');
    wrap.appendChild(el('h2', null, step.title));
    wrap.appendChild(el('p', 'lead', step.text));

    var form = el('form', 'field');
    form.noValidate = true;

    var label = el('label', 'field__label', step.label);
    label.setAttribute('for', 'handleInput');
    form.appendChild(label);

    var box = el('div', 'field__box');
    box.appendChild(el('span', 'field__at', '@'));

    var input = document.createElement('input');
    input.id = 'handleInput';
    input.type = 'text';
    input.name = 'instagram';
    input.autocomplete = 'off';
    input.autocapitalize = 'none';
    input.spellcheck = false;
    input.placeholder = step.placeholder;
    input.value = state.answers.perfil || '';
    input.setAttribute('aria-describedby', 'handleError');
    box.appendChild(input);
    form.appendChild(box);

    var error = el('p', 'field__error', 'Escribe tu @ para continuar.');
    error.id = 'handleError';
    form.appendChild(error);

    var ctaWrap = el('div', 'cta-wrap');
    var cta = el('button', 'btn', step.cta);
    cta.type = 'submit';
    ctaWrap.appendChild(cta);
    if (step.note) ctaWrap.appendChild(el('p', 'cta-note', step.note));
    form.appendChild(ctaWrap);

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var value = input.value.trim().replace(/^@+/, '').replace(/\s+/g, '');
      if (value.length < 2) {
        error.classList.add('is-visible');
        input.focus();
        return;
      }
      error.classList.remove('is-visible');
      state.answers.perfil = value;
      next();
    });

    input.addEventListener('input', function () {
      error.classList.remove('is-visible');
    });

    wrap.appendChild(form);
    return wrap;
  }

  /* 06/11 — carregamentos -------------------------------------------------- */

  function renderLoading(step) {
    var wrap = el('section', 'loading center');
    wrap.appendChild(el('div', 'loading__spinner'));

    var list = el('ul', 'loading__list');
    var items = step.lines.map(function (line) {
      var li = el('li', 'loading__item');
      li.appendChild(el('span', 'loading__icon', checkIcon()));
      li.appendChild(el('span', null, line.replace('{handle}', handle())));
      list.appendChild(li);
      return li;
    });
    wrap.appendChild(list);

    var track = el('div', 'loading__track');
    var fill = el('div', 'loading__fill');
    track.appendChild(fill);
    wrap.appendChild(track);

    var perStep = 1100;
    items.forEach(function (li, i) {
      later(function () {
        items.forEach(function (other, j) {
          other.classList.toggle('is-active', j === i);
          other.classList.toggle('is-done', j < i);
        });
        fill.style.width = Math.round(((i + 1) / items.length) * 100) + '%';
        announce(li.textContent);
      }, i * perStep);
    });

    later(function () {
      items.forEach(function (li) {
        li.classList.remove('is-active');
        li.classList.add('is-done');
      });
    }, items.length * perStep);

    later(next, items.length * perStep + 700);

    return wrap;
  }

  /* 07 — resultado da análise ---------------------------------------------- */

  function renderAnalysis(step) {
    var wrap = el('section');

    var head = el('div', 'center');
    head.appendChild(el('span', 'kicker', step.kicker));
    if (state.answers.perfil) {
      head.appendChild(el('span', 'handle-chip', '<span aria-hidden="true">📊</span><span>Análisis de <b>@' + state.answers.perfil + '</b></span>'));
    }
    head.appendChild(el('h2', null, step.title));
    wrap.appendChild(head);

    var chart = el('figure', 'chart');
    chart.style.margin = '4px 0 28px';
    var img = new Image();
    img.src = step.chart;
    img.alt = step.chartAlt || '';
    chart.appendChild(img);
    wrap.appendChild(chart);

    var boxes = [];
    step.erros.forEach(function (erro) {
      var box = el('article', 'erro');
      box.appendChild(el('h3', 'erro__title', '<span aria-hidden="true">⚠️</span><span>' + erro.titulo + '</span>'));
      erro.paragrafos.forEach(function (p) { box.appendChild(el('p', null, p)); });
      wrap.appendChild(box);
      boxes.push(box);
    });

    // Revela cada erro conforme entra na tela (ritmo de leitura, não um bloco só).
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.18 });
      boxes.forEach(function (box) { io.observe(box); });
    } else {
      boxes.forEach(function (box) { box.classList.add('is-in'); });
    }

    var virada = el('div', 'virada');
    virada.appendChild(el('p', 'lead', 'Pero no te preocupes: en nuestro análisis también hemos encontrado una oportunidad de crecimiento.'));
    virada.appendChild(el('h2', null, step.viradaTitulo));
    wrap.appendChild(virada);

    var slider = el('div', 'slider');
    slider.appendChild(el('p', 'slider__title', step.sliderTitulo));
    var track = el('div', 'slider__track');
    var knob = el('span', 'slider__knob');
    track.appendChild(knob);
    slider.appendChild(track);
    var labels = el('div', 'slider__labels');
    ['Bajo', 'Medio', 'Alto'].forEach(function (t) { labels.appendChild(el('span', null, t)); });
    slider.appendChild(labels);
    wrap.appendChild(slider);
    later(function () { knob.style.left = '96%'; }, 420);

    var destaque = el('div', 'destaque');
    destaque.appendChild(el('p', null, '<span aria-hidden="true">✅</span> ' + step.destaque));
    wrap.appendChild(destaque);

    var fecho = el('div', 'fecho');
    step.fecho.forEach(function (p) { fecho.appendChild(el('p', null, p)); });
    wrap.appendChild(fecho);

    var ctaWrap = el('div', 'cta-wrap');
    var cta = el('button', 'btn btn--pulse', step.cta + ' <span class="btn__arrow">→</span>');
    cta.type = 'button';
    cta.addEventListener('click', next);
    ctaWrap.appendChild(cta);
    wrap.appendChild(ctaWrap);

    return wrap;
  }

  /* 12 — oferta ------------------------------------------------------------ */

  function renderOffer(step) {
    var wrap = el('section');

    var head = el('div', 'center');
    head.appendChild(el('h1', null, step.title));
    head.appendChild(el('p', 'lead', step.text));
    wrap.appendChild(head);

    var frame = el('div', 'video-frame');
    if (CONFIG.vturbId && CONFIG.vturbScript) {
      frame.classList.add('video-frame--vturb');
      frame.appendChild(buildVturbPlayer(CONFIG.vturbId, CONFIG.vturbScript));
    } else if (CONFIG.videoUrl) {
      var iframe = document.createElement('iframe');
      iframe.src = CONFIG.videoUrl;
      iframe.title = 'Vídeo de presentación de ' + CONFIG.produto;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture';
      iframe.allowFullscreen = true;
      frame.appendChild(iframe);
    } else {
      var ph = el('div', 'video-frame__placeholder');
      ph.appendChild(el('div', 'video-frame__play', '▶'));
      ph.appendChild(el('strong', null, 'Tu vídeo va aquí'));
      ph.appendChild(el('small', null, 'Pega el enlace del vídeo en CONFIG.videoUrl, en el archivo script.js.'));
      frame.appendChild(ph);
    }
    wrap.appendChild(frame);

    var card = el('div', 'offer-card');
    card.appendChild(el('div', 'offer-card__flag', '⚡ ¡Oferta relámpago!'));
    var body = el('div', 'offer-card__body');
    body.appendChild(el('span', 'offer-card__name', CONFIG.produto));
    var price = el('div', 'offer-card__price');
    price.appendChild(el('span', 'offer-card__from', 'Antes ' + CONFIG.precoDe));
    price.appendChild(el('span', 'offer-card__now', CONFIG.precoPor + ' <small>' + CONFIG.moeda + '</small>'));
    price.appendChild(el('span', 'offer-card__cash', 'pago único'));
    body.appendChild(price);
    card.appendChild(body);
    wrap.appendChild(card);

    var ctaWrap = el('div', 'cta-wrap');
    ctaWrap.appendChild(checkoutButton(step.ctaPrincipal));
    wrap.appendChild(ctaWrap);

    var timer = el('div', 'timer');
    var ring = el('div', 'timer__ring', '--:--');
    timer.appendChild(ring);
    timer.appendChild(el('p', 'timer__label', step.urgencia));
    wrap.appendChild(timer);

    startCountdown(ring);

    // Barra fixa no rodapé: só aparece quando o botão principal sai da tela.
    var dock = el('div', 'dock');
    dock.appendChild(checkoutButton(step.ctaPrincipal));
    document.body.appendChild(dock);

    if ('IntersectionObserver' in window) {
      var watcher = new IntersectionObserver(function (entries) {
        dock.classList.toggle('is-visible', !entries[0].isIntersecting);
      }, { threshold: 0 });
      watcher.observe(ctaWrap);
    }

    return wrap;
  }

  function checkoutButton(label) {
    var cta = el('a', 'btn btn--pulse', label + ' <span class="btn__arrow">→</span>');
    cta.href = CONFIG.checkoutUrl;
    if (CONFIG.checkoutUrl && CONFIG.checkoutUrl !== '#') cta.rel = 'noopener';
    return cta;
  }

  /* Player da VTurb: monta o elemento exatamente como o código dela pede
     e carrega o script do player só uma vez, mesmo se a pessoa voltar e
     avançar pelo quiz várias vezes. */
  function buildVturbPlayer(id, scriptSrc) {
    var player = document.createElement('vturb-smartplayer');
    player.id = id;
    player.setAttribute('style', 'display: block; margin: 0 auto; width: 100%; max-width: 400px;');

    var placeholder = el('div', 'vturb-player-placeholder');
    placeholder.setAttribute('style', 'position: relative; width: 100%; padding: 177.77777777777777% 0 0; z-index: 0; background-color: black;');
    player.appendChild(placeholder);

    var scriptId = 'vturb-player-script-' + id;
    if (!document.getElementById(scriptId)) {
      var script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.async = true;
      script.src = scriptSrc;
      document.head.appendChild(script);
    }

    return player;
  }

  /* Contador de escassez: como a página sempre recomeça do zero, o tempo
     também recomeça — cada visita à oferta ganha os minutos cheios. */
  function startCountdown(node) {
    var end = Date.now() + CONFIG.ofertaMinutos * 60 * 1000;

    function tick() {
      var left = Math.max(0, end - Date.now());
      var total = Math.floor(left / 1000);
      var mm = String(Math.floor(total / 60)).padStart(2, '0');
      var ss = String(total % 60).padStart(2, '0');
      node.textContent = mm + ':' + ss;
      if (left > 0) later(tick, 1000);
    }
    tick();
  }

  /* --------------------------------------------------------------- start -- */

  render();
})();
