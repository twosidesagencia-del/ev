/* ==========================================================================
   CONTEÚDO DO QUIZ — edite só este arquivo para mudar textos, imagens e links
   ==========================================================================
   Dica: tudo que está entre aspas é texto que aparece na tela.
   Use <b>palavra</b> para deixar em negrito e <span class="hl">palavra</span>
   para destacar em verde.
   ========================================================================== */

const CONFIG = {
  // Link do checkout (Hotmart).
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
  precoDe: 'R$ 199,90',
  precoPor: '47,00',
};

const STEPS = [

  /* 01 — Abertura ------------------------------------------------------- */
  {
    id: 'intro',
    type: 'intro',
    title: 'Copie, cola e viralize!',
    image: 'assets/img/comparativo-viral.webp',
    imageAlt: 'Comparação entre um post que não viraliza com 618 visualizações e um post que viraliza com 1,5 milhão de visualizações',
    text: 'Descubra exatamente o que está <b>travando o crescimento do seu perfil</b>, em uma <span class="hl">análise gratuita e rápida</span>.',
    badge: '⏱️ Leva menos de 2 minutos',
    cta: 'Começar a análise gratuita',
  },

  /* 02 — Nicho (múltipla escolha, cards com foto) ------------------------ */
  {
    id: 'nicho',
    type: 'cards',
    multi: true,
    question: 'Você trabalha com:',
    hint: 'Trabalha com mais de um? Selecione quantos quiser.',
    cta: 'Continuar',
    options: [
      { value: 'injetaveis',   label: 'Procedimentos injetáveis e harmonização',
        image: 'assets/img/nicho-injetaveis.webp',   alt: 'Aplicação de preenchimento labial' },
      { value: 'dermatologia', label: 'Dermatologia e saúde da pele',
        image: 'assets/img/nicho-dermatologia.webp', alt: 'Procedimento de limpeza de pele com aparelho' },
      { value: 'gestao',       label: 'Gestão clínica ou vários procedimentos',
        image: 'assets/img/nicho-gestao.webp',       alt: 'Profissional em consulta com uma cliente' },
      { value: 'facial',       label: 'Cuidados com a pele e estética facial',
        image: 'assets/img/nicho-facial.webp',       alt: 'Aplicação de máscara facial em cliente' },
    ],
  },

  /* 03 — Clientes por mês ------------------------------------------------ */
  {
    id: 'clientes',
    type: 'choice',
    question: 'Quantos clientes você consegue pelo Instagram por mês?',
    image: 'assets/img/clientes-instagram.webp',
    imageAlt: 'Profissional de estética sorrindo ao ver notificações de novos seguidores e vendas no celular',
    options: [
      { value: '0',    label: 'Nenhum.' },
      { value: '1-3',  label: 'De 1 a 3 clientes.' },
      { value: '4-10', label: 'De 4 a 10 clientes.' },
      { value: '10+',  label: 'Mais de 10, mas quero ainda mais.' },
    ],
  },

  /* 04 — Ritmo de crescimento -------------------------------------------- */
  {
    id: 'crescimento',
    type: 'choice',
    question: 'Seu Instagram cresce com frequência?',
    image: 'assets/img/crescimento-instagram.webp',
    imageAlt: 'Dois gráficos do Instagram lado a lado: um subindo e outro caindo',
    options: [
      { value: 'parado',  label: 'Está parado, não cresce quase nada.' },
      { value: 'devagar', label: 'Cresce devagar, abaixo do que eu gostaria.' },
      { value: 'oscila',  label: 'Oscila: um post vai bem e os outros somem.' },
      { value: 'bem',     label: 'Cresce bem, mas quero escalar muito mais.' },
    ],
  },

  /* 05 — Captura do @ ---------------------------------------------------- */
  {
    id: 'perfil',
    type: 'input',
    title: 'Análise rápida do seu perfil',
    text: 'Vamos analisar o seu perfil e mostrar os pontos mais importantes que você precisa melhorar. Preencha seu @ abaixo:',
    label: 'Qual o seu @ do Instagram?',
    placeholder: 'seu.perfil',
    cta: 'Analisar meu perfil',
    note: '🔒 Usamos o seu @ apenas para personalizar a análise.',
  },

  /* 06 — Carregamento da análise ----------------------------------------- */
  {
    id: 'loading1',
    type: 'loading',
    lines: [
      'Carregando…',
      'Analisando o perfil {handle}…',
      'Aguarde a análise concluir…',
    ],
  },

  /* 07 — Resultado da análise -------------------------------------------- */
  {
    id: 'analise',
    type: 'analysis',
    kicker: 'Análise concluída ✅',
    title: 'Encontramos <b>4 erros</b> que travam o crescimento do seu perfil.',
    chart: 'assets/img/grafico-perfis.webp',
    chartAlt: 'Gráfico comparando a curva de crescimento de perfis que viralizam com a linha parada do seu perfil',
    erros: [
      {
        titulo: 'Erro 01: O seu conteúdo é comercial demais.',
        paragrafos: [
          'Os seus <b>posts falam apenas o nome do procedimento</b>. Mas quem está rolando o feed não procura o nome da técnica e sim, o incômodo que vê no espelho toda manhã.',
          'No fim, ela acaba encontrando a solução em perfis melhor posicionados que o seu.',
        ],
      },
      {
        titulo: 'Erro 02: Os formatos que você usa não funcionam para o seu perfil.',
        paragrafos: [
          'Os tipos de vídeo e de foto que você publica hoje <b>não são os formatos</b> que o algoritmo do Instagram está entregando.',
          'Por isso o seu conteúdo alcança poucas pessoas e quase não tem interações.',
        ],
      },
      {
        titulo: 'Erro 03: Ninguém salva nem compartilha o seu conteúdo.',
        paragrafos: [
          'Como o seu conteúdo segue uma linha mais comercial, <b>ele não gera vontade de salvar, nem de enviar para outra pessoa.</b>',
          'E são justamente esses dois sinais que fazem o Instagram entregar o seu perfil para mais pessoas.',
        ],
      },
      {
        titulo: 'Erro 04: Suas legendas não ajudam o algoritmo.',
        paragrafos: [
          'A legenda é o único espaço onde você pode aprofundar, dar contexto e fazer a pessoa parar de rolar para ler.',
          'Porém, quando <b>você repete o que foi dito na imagem ou vídeo, o Instagram penaliza o perfil</b> e não entrega o conteúdo para novos seguidores.',
        ],
      },
    ],
    viradaTitulo: 'A boa notícia: encontramos como <span class="hl">acelerar seu crescimento em até 6x</span>.',
    sliderTitulo: 'Crescimento do perfil com estratégia personalizada',
    destaque: 'Analisando o seu perfil, identificamos que só a <b>mudança de formato do seu conteúdo já é capaz de multiplicar o seu alcance</b> sem que você precise postar mais ou aparecer mais.',
    fecho: [
      'Só que isso não funciona com <b>fórmula pronta</b>.',
      'Cada perfil é único. Vamos <span class="hl">desenhar uma estratégia exclusivamente para você</span> de acordo com os serviços que deseja vender.',
    ],
    cta: 'Montar o meu plano personalizado',
  },

  /* 08 — Frequência de postagem ------------------------------------------ */
  {
    id: 'frequencia',
    type: 'choice',
    question: 'Quantas postagens você faz por semana?',
    options: [
      { value: '1',  label: '1 postagem.' },
      { value: '2',  label: '2 postagens.' },
      { value: '3',  label: '3 postagens.' },
      { value: '4+', label: '4 ou mais postagens.' },
    ],
  },

  /* 09 — Aparecer ou não em vídeo ---------------------------------------- */
  {
    id: 'video',
    type: 'choice',
    question: 'Você prefere gravar vídeos ou não aparecer?',
    options: [
      { value: 'nao-aparecer', label: 'Prefiro não aparecer.' },
      { value: 'aparecer',     label: 'Prefiro gravar e aparecer.' },
      { value: 'flexivel',     label: 'Flexível: mesclar vídeos aparecendo e sem aparecer.' },
    ],
  },

  /* 10 — Objetivo (múltipla escolha, cards ilustrados) -------------------- */
  {
    id: 'objetivo',
    type: 'cards',
    multi: true,
    variant: 'illustration',
    question: 'Qual o seu objetivo ao atrair novos seguidores?',
    hint: 'Pode selecionar mais de uma opção.',
    cta: 'Ver o meu plano',
    options: [
      { value: 'agenda', title: 'Lotar a agenda',
        label: 'Preencher a agenda com clientes qualificados, e não curiosos.',
        image: 'assets/img/objetivo-agenda.webp', alt: 'Agenda dourada com todos os horários marcados' },
      { value: 'faturamento', title: 'Aumentar o faturamento',
        label: 'Vender protocolos e procedimentos mais caros.',
        image: 'assets/img/objetivo-faturamento.webp', alt: 'Gráfico dourado em alta ao lado de um saco de dinheiro' },
      { value: 'autoridade', title: 'Construir autoridade',
        label: 'Ser a referência nº 1 em estética na minha região.',
        image: 'assets/img/objetivo-autoridade.webp', alt: 'Troféu dourado de referência número 1 em estética' },
      { value: 'conhecimento', title: 'Vender conhecimento',
        label: 'Lançar cursos, treinamentos e mentorias para outras profissionais.',
        image: 'assets/img/objetivo-certificacao.webp', alt: 'Certificado dourado de cursos, treinamentos e mentorias' },
    ],
  },

  /* 11 — Carregamento do plano ------------------------------------------- */
  {
    id: 'loading2',
    type: 'loading',
    tone: 'gold',
    lines: [
      'Carregando…',
      'Analisando as suas respostas…',
      'Montando o seu plano personalizado…',
    ],
  },

  /* 12 — Oferta / VSL ----------------------------------------------------- */
  {
    id: 'oferta',
    type: 'offer',
    title: 'Copie, cola e viralize!',
    text: 'Se prepare para receber os novos seguidores e clientes, se fizer isso: 👇',
    ctaPrincipal: 'Eu quero o Estética Viral',
    urgencia: 'Resgate agora o seu desconto!',
  },
];
