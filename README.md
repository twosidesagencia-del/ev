# Estética Viral — Quiz / Funil interativo

Refação do funil de quiz para o nicho de estética, com visual novo (paleta nude + dourado)
e o mesmo passo a passo do funil original.

## Como testar

Abra o arquivo `index.html` no navegador. É só isso — não precisa instalar nada.

Para testar num servidor local:

```bash
python3 -m http.server 8000
# depois abra http://localhost:8000
```

## Como publicar

A página é estática (HTML + CSS + JS). Sobe em qualquer hospedagem:
Hostinger, Netlify, Vercel, GitHub Pages ou o painel que você já usa.
Basta enviar a pasta inteira (`index.html` + `assets/`).

## O que você edita

**Você só precisa mexer em um arquivo: `assets/js/content.js`.**

No topo dele fica o bloco `CONFIG`:

| Item | O que é |
|---|---|
| `checkoutUrl` | Link do seu checkout. **Troque o `#` pelo link real antes de publicar.** |
| `videoUrl` | Link do vídeo da VSL (YouTube/Vimeo/Panda). Deixe vazio e aparece um espaço reservado. |
| `ofertaMinutos` | Minutos do contador de escassez na última tela. |
| `produto`, `precoDe`, `precoPor` | Nome e preços exibidos no bloco da oferta. |

Logo abaixo fica a lista `STEPS`, com as 12 telas na ordem em que aparecem.
Cada tela tem as perguntas, as opções e os textos. Para trocar uma pergunta,
é só trocar o texto entre aspas.

Dentro dos textos você pode usar:
- `<b>palavra</b>` para negrito
- `<span class="hl">palavra</span>` para destaque em verde

### Link do vídeo (YouTube)

Use o formato **embed**, não o link normal da barra de endereços:

```js
videoUrl: 'https://www.youtube.com/embed/SEU_ID_AQUI?rel=0'
```

## O passo a passo do quiz

| # | Tela | O que faz |
|---|---|---|
| 01 | Abertura | Prova visual (viraliza × não viraliza) e CTA para começar |
| 02 | Nicho | Múltipla escolha em cards com foto |
| 03 | Clientes por mês | Resposta única |
| 04 | Ritmo de crescimento | Resposta única |
| 05 | Captura do @ | Campo de texto, personaliza as telas seguintes |
| 06 | Carregamento | Simula a análise do perfil |
| 07 | Resultado | Gráfico, os 4 erros, medidor e CTA |
| 08 | Frequência de postagem | Resposta única |
| 09 | Aparecer em vídeo | Resposta única |
| 10 | Objetivo | Múltipla escolha em cards ilustrados |
| 11 | Carregamento | Monta o plano |
| 12 | Oferta / VSL | Vídeo, benefícios, preço, contador e checkout |

## O que mudou em relação ao funil antigo

**Visual**
- Paleta nude, dourado e rosé no lugar do branco puro, com tipografia serifada nos títulos.
- Barra de progresso com contador de etapas e botão de voltar.
- Transições entre telas, cards com estado de seleção visível e os erros da análise aparecendo conforme a leitura desce.
- Medidor "Baixo → Alto" animado em CSS, no lugar de uma imagem estática.

**Conversão**
- As perguntas de resposta única avançam sozinhas ao clicar, como no funil original.
- O @ digitado aparece na tela de carregamento e no resultado da análise ("Análise de @seuperfil").
- Bloco de benefícios e selo de garantia na oferta, que o funil antigo não tinha.
- Botão de checkout fixo no rodapé, que aparece quando o botão principal sai da tela.
- Contador de escassez sobrevive ao refresh da página (não reinicia em 15:00 a cada recarga).

**Técnico**
- As imagens foram de 15 MB para 0,55 MB (WebP redimensionado) — o funil antigo travaria no 4G.
- As respostas ficam salvas no navegador: quem fecha a página volta na etapa onde parou.
- Funciona sem plataforma de funil: não depende de Deskfunnel nem de mensalidade.

## Duas mudanças de conteúdo que eu fiz — confira se concorda

1. **Tela 04 (crescimento do Instagram).** O funil original tinha três opções, sendo que
   duas diziam a mesma coisa ("Não cresce quase nada" e "Cresce muito pouco"). Isso trava
   a pessoa e suja o dado. Troquei por quatro opções que não se sobrepõem, incluindo
   "Oscila: um post vai bem e os outros somem", que é a dor mais comum do nicho.

2. **Tela 12 (oferta).** Acrescentei três bullets de benefício e o selo de garantia
   antes do preço. Revise os bullets: eles precisam bater exatamente com o que o
   Estética Viral entrega, senão viram promessa falsa e geram reembolso.

## Reiniciar o quiz para testar

O quiz salva o progresso no navegador, então quem já respondeu volta na etapa
onde parou. Para começar de novo, acrescente `?reiniciar` no fim do endereço:

```
https://seusite.com/?reiniciar
```

Isso zera as respostas e o contador da oferta. O `?reiniciar` some da barra de
endereço logo em seguida, para um refresh no meio do teste não te jogar de volta
para a primeira tela.

## Pixel e rastreamento

Ainda não há pixel instalado. Quando for anunciar, cole o código do
Meta Pixel / Google Ads antes do `</head>`, em `index.html`.

## Estrutura dos arquivos

```
index.html              estrutura da página
assets/css/style.css    todo o visual
assets/js/content.js    ← textos, imagens, preços e links (edite aqui)
assets/js/quiz.js       motor do quiz (navegação, progresso, contador)
assets/img/             imagens otimizadas em WebP
```
