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
| `vturbId`, `vturbScript` | Vídeo da VSL hospedado na VTurb (já preenchido com o seu). |
| `videoUrl` | Alternativa em YouTube/Vimeo/Panda — só é usada se `vturbId` estiver vazio. |
| `ofertaMinutos` | Minutos do contador de escassez na última tela. |
| `produto`, `precoDe`, `precoPor` | Nome e preços exibidos no bloco da oferta. |

Logo abaixo fica a lista `STEPS`, com as 12 telas na ordem em que aparecem.
Cada tela tem as perguntas, as opções e os textos. Para trocar uma pergunta,
é só trocar o texto entre aspas.

Dentro dos textos você pode usar:
- `<b>palavra</b>` para negrito
- `<span class="hl">palavra</span>` para destaque em verde

### Vídeo da VSL

O quiz já está com o código do seu player da VTurb (`vturbId` e `vturbScript`
em `CONFIG`). Para trocar de vídeo, pegue o novo código em "obter código" no
painel da VTurb e troque esses dois valores pelo `id` e pelo `src` do script
que aparecem lá.

Se um dia quiser usar YouTube/Vimeo/Panda no lugar, apague o valor de
`vturbId` (deixe `''`) e preencha `videoUrl` com o link em formato **embed**:

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
- Paleta nude, dourado e rosé no lugar do branco puro, com Montserrat nos títulos.
- Barra de progresso com contador de etapas.
- Transições entre telas, cards com estado de seleção visível e os erros da análise aparecendo conforme a leitura desce.
- Medidor "Baixo → Alto" animado em CSS, no lugar de uma imagem estática.

**Conversão**
- As perguntas de resposta única avançam sozinhas ao clicar, como no funil original.
- O @ digitado aparece na tela de carregamento e no resultado da análise ("Análise de @seuperfil").
- Botão de checkout fixo no rodapé, que aparece quando o botão principal sai da tela.

**Comportamento**
- Sem botão de voltar: o quiz só avança para a próxima tela.
- Não guarda progresso entre visitas — toda vez que a página é aberta ou
  recarregada, começa do zero na primeira tela, mesmo que a pessoa já
  tenha respondido antes. O contador de escassez da oferta também recomeça
  dos minutos cheios a cada visita.

**Técnico**
- As imagens foram de 15 MB para 0,55 MB (WebP redimensionado) — o funil antigo travaria no 4G.
- Funciona sem plataforma de funil: não depende de Deskfunnel nem de mensalidade.

## Uma mudança de conteúdo que eu fiz — confira se concorda

**Tela 04 (crescimento do Instagram).** O funil original tinha três opções, sendo que
duas diziam a mesma coisa ("Não cresce quase nada" e "Cresce muito pouco"). Isso trava
a pessoa e suja o dado. Troquei por quatro opções que não se sobrepõem, incluindo
"Oscila: um post vai bem e os outros somem", que é a dor mais comum do nicho.

## Pixel e rastreamento

O pixel da **Metrito** já está instalado, antes do `</head>` em `index.html`.
Para trocar por outro pixel (Meta, Google Ads etc.) ou adicionar mais um,
cole o código no mesmo lugar.

## Estrutura dos arquivos

```
index.html              estrutura da página
assets/css/style.css    todo o visual
assets/js/content.js    ← textos, imagens, preços e links (edite aqui)
assets/js/quiz.js       motor do quiz (navegação, progresso, contador)
assets/img/             imagens otimizadas em WebP
```
