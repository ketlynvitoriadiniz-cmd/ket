// ========== Container Sobre Mim ==========
const container = document.createElement('div');
container.id = 'sobre_mim';

container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.gap = '20px';
container.style.padding = '20px';
container.style.margin = '20px auto';
container.style.maxWidth = '900px';
container.style.backgroundColor = '#e2e6ef';
container.style.borderRadius = '10px';

// ========== Imagem ==========
const estudante = document.createElement('img');
estudante.src = 'estudante.jfif';
estudante.alt = 'Foto do estudante';
estudante.style.width = '400px';
estudante.style.height = '600px';
estudante.style.borderRadius = '10px';
estudante.style.objectFit = 'cover';

// ========== Texto principal ==========
const texto = document.createElement('p');
texto.innerHTML = 'Este é um típico e feliz aluno de programação, que poderia ser do 2ºB de Matemática ' +
    'matutino deste colégio.<br> Notem pela expressão que ele está feliz porque prestou muita ' +
    'atenção na aula e realizou todas as atividades.<br> Certamente poderíamos seguir ' +
    'esse exemplo para nos prepararmos para realizar nosso sonhos no mercado de trabalho e, portanto, na vida.';

texto.style.textAlign = 'justify';
texto.style.fontSize = '25px';
texto.style.fontFamily = 'verdana';
texto.style.lineHeight = '1.4';
texto.style.color = '#333';
texto.style.margin = '0';

// ========== DIV DE DESTAQUE (citação Gonzaguinha) ==========
const blocoCitacao = document.createElement('div');

// Estilos do bloco de destaque
blocoCitacao.style.backgroundColor = '#d1d4dc';      // Fundo leve cinza
blocoCitacao.style.borderLeft = '5px solid #08042d'; // Borda lateral escura (cor do cabeçalho)
blocoCitacao.style.padding = '20px';
blocoCitacao.style.margin = '20px auto';
blocoCitacao.style.maxWidth = '900px';
blocoCitacao.style.borderRadius = '0 10px 10px 0';   // Arredonda só a direita
blocoCitacao.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.15)'; // Sombra suave

// ========== Texto da citação ==========
const texto1 = document.createElement('p');
texto1.innerHTML = '"Um homem se humilha se castram seu sonho. ' +
    'Seu sonho é sua vida e a vida é trabalho. ' +
    'E sem o seu trabalho um homem não tem honra. ' +
    'E sem a sua honra, se morre, se mata. ' +
    'Não dá pra ser feliz, não dá pra ser feliz." <br><br' +
    '<em>— Gonzaguinha, <strong>O Que É, O Que É?</strong></em>';

texto1.style.textAlign = 'justify';
texto1.style.fontSize = '20px';
texto1.style.fontFamily = 'Georgia, serif';  // Fonte serifada para citações
texto1.style.lineHeight = '1.4';
texto1.style.color = '#322424';
texto1.style.margin = '10';
texto1.style.fontStyle = 'italic';           // Texto em itálico

// Montando a citação
blocoCitacao.appendChild(texto1);

// ========== Montando a estrutura principal ==========
container.appendChild(estudante);
container.appendChild(texto);

document.body.appendChild(container);
document.body.appendChild(blocoCitacao);  // ← Agora é a div de destaque, não o p direto
