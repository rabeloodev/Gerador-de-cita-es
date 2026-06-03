// 1. Banco de Dados (Seu array de versículos)
export const bibleVerses = [
  // Amor e Compaixão
  {
    reference: "João 3:16",
    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    theme: ["amor", "salvação", "fé"]
  },
  {
    reference: "1 Coríntios 13:4-7",
    text: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
    theme: ["amor", "relacionamentos", "paciência"]
  },
  {
    reference: "1 João 4:8",
    text: "Aquele que não ama não conhece a Deus, porque Deus é amor.",
    theme: ["amor", "Deus", "caráter"]
  },

  // Fé e Confiança
  {
    reference: "Hebreus 11:1",
    text: "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.",
    theme: ["fé", "esperança", "confiança"]
  },
  {
    reference: "Provérbios 3:5-6",
    text: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas.",
    theme: ["confiança", "sabedoria", "direção"]
  },
  {
    reference: "Mateus 17:20",
    text: "Ele respondeu: 'Porque a fé que vocês têm é pequena. Eu asseguro que, se vocês tiverem fé do tamanho de um grão de mostarda, poderão dizer a este monte: Vá daqui para lá, e ele irá. Nada será impossível para vocês.'",
    theme: ["fé", "possibilidades", "poder"]
  },

  // Paz e Esperança
  {
    reference: "Filipenses 4:6-7",
    text: "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus. E a paz de Deus, que excede todo o entendimento, guardará o coração e a mente de vocês em Cristo Jesus.",
    theme: ["paz", "ansiedade", "oração"]
  },
  {
    reference: "João 14:27",
    text: "Deixo-lhes a paz; a minha paz lhes dou. Não a dou como o mundo a dá. Não se perturbe o coração de vocês, nem tenham medo.",
    theme: ["paz", "conforto", "coragem"]
  },
  {
    reference: "Romanos 15:13",
    text: "Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele, para que vocês transbordem de esperança, pelo poder do Espírito Santo.",
    theme: ["esperança", "alegria", "paz"]
  },

  // Força e Coragem
  {
    reference: "Josué 1:9",
    text: "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    theme: ["coragem", "força", "presença de Deus"]
  },
  {
    reference: "Filipenses 4:13",
    text: "Tudo posso naquele que me fortalece.",
    theme: ["força", "capacitação", "vitória"]
  },
  {
    reference: "Isaías 41:10",
    text: "Não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
    theme: ["coragem", "presença de Deus", "força"]
  },

  // Sabedoria e Orientação
  {
    reference: "Tiago 1:5",
    text: "Se algum de vocês tem falta de sabedoria, peça-a a Deus, que a todos dá livremente, de boa vontade; e lhe será concedida.",
    theme: ["sabedoria", "oração", "conhecimento"]
  },
  {
    reference: "Provérbios 9:10",
    text: "O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo é entendimento.",
    theme: ["sabedoria", "reverência", "conhecimento"]
  },
  {
    reference: "Salmos 119:105",
    text: "A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.",
    theme: ["direção", "palavra", "sabedoria"]
  },

  // Perdão e Graça
  {
    reference: "1 João 1:9",
    text: "Se confessarmos os nossos pecados, ele é fiel e justo para perdoar os nossos pecados e nos purificar de toda injustiça.",
    theme: ["perdão", "confissão", "purificação"]
  },
  {
    reference: "Efésios 2:8-9",
    text: "Pois vocês são salvos pela graça, por meio da fé, e isto não vem de vocês, é dom de Deus; não por obras, para que ninguém se glorie.",
    theme: ["graça", "salvação", "fé"]
  },
  {
    reference: "Colossenses 3:13",
    text: "Suportem-se uns aos outros e perdoem as queixas que tiverem uns contra os outros. Perdoem como o Senhor lhes perdoou.",
    theme: ["perdão", "relacionamentos", "paciência"]
  },

  // Provisão e Cuidado
  {
    reference: "Mateus 6:33",
    text: "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês.",
    theme: ["prioridades", "provisão", "reino de Deus"]
  },
  {
    reference: "Filipenses 4:19",
    text: "O meu Deus suprirá todas as necessidades de vocês, de acordo com as suas gloriosas riquezas em Cristo Jesus.",
    theme: ["provisão", "necessidades", "confiança"]
  },
  {
    reference: "Salmos 23:1",
    text: "O Senhor é o meu pastor; de nada terei falta.",
    theme: ["cuidado", "provisão", "confiança"]
  },

  // Alegria e Gratidão
  {
    reference: "Salmos 100:4",
    text: "Entrem por suas portas com ações de graças, e em seus átrios, com louvor; deem-lhe graças e bendigam o seu nome.",
    theme: ["gratidão", "louvor", "adoração"]
  },
  {
    reference: "1 Tessalonicenses 5:16-18",
    text: "Alegrem-se sempre, orem continuamente, deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.",
    theme: ["alegria", "oração", "gratidão"]
  },
  {
    reference: "Neemias 8:10",
    text: "Não fiquem tristes, pois a alegria do Senhor os fortalecerá.",
    theme: ["alegria", "força", "ânimo"]
  },

  // Propósito e Chamado
  {
    reference: "Jeremias 29:11",
    text: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
    theme: ["propósito", "planos", "esperança"]
  },
  {
    reference: "Romanos 8:28",
    text: "Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.",
    theme: ["propósito", "soberania", "bem"]
  },
  {
    reference: "Efésios 2:10",
    text: "Porque somos criação de Deus realizada em Cristo Jesus para fazermos boas obras, as quais Deus preparou de antemão para que nós as praticássemos.",
    theme: ["propósito", "obras", "criação"]
  }
];

export const themes = [
  "amor", "fé", "paz", "esperança", "coragem", "força", "sabedoria", 
  "perdão", "graça", "provisão", "alegria", "gratidão", "propósito", 
  "salvação", "confiança", "direção", "oração"
];

// 2. A Função que muda os textos na tela
export function exibirVersiculoPorTema(temaSelecionado) {
  const elementoTexto = document.getElementById("texto-versiculo");
  const elementoReferencia = document.getElementById("referencia-versiculo");
  const elementoReflexao = document.getElementById("reflexao-card");

  const versiculosFiltrados = bibleVerses.filter(v => 
    v.theme.map(t => t.toLowerCase()).includes(temaSelecionado.toLowerCase())
  );

  if (versiculosFiltrados.length === 0) return;

  const indiceAleatorio = Math.floor(Math.random() * versiculosFiltrados.length);
  const versiculo = versiculosFiltrados[indiceAleatorio];

  elementoTexto.innerText = `"${versiculo.text}"`;
  elementoReferencia.innerText = versiculo.reference;
  elementoReflexao.innerText = versiculo.reflection || "";
}

// 3. Bloco de captura do clique (No final de tudo)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".theme-btn").forEach(botao => {
    botao.addEventListener("click", (e) => {
      const alvo = e.currentTarget;
      exibirVersiculoPorTema(alvo.innerText);
    });
  });
});