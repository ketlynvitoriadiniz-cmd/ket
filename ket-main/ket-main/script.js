const body = document.body;
body.style.margin = '0';

// ========== CABEÇALHO ==========
const cabecalho = document.createElement('h1');
cabecalho.textContent = 'Criando elementos com JavaScript';

cabecalho.style.color = '#ffffff';
cabecalho.style.fontSize = '40px';
cabecalho.style.textAlign = 'center';
cabecalho.style.display = 'flex';
cabecalho.style.alignItems = 'center';
cabecalho.style.justifyContent = 'center';
cabecalho.style.backgroundColor = '#3a3281';
cabecalho.style.height = '100px';
cabecalho.style.margin = '0';

const icone = document.createElement('img');
icone.src = 'logo.jfif';
icone.style.borderRadius ='35px';
icone.style.width = '80px';
icone.style.height = '80px';
icone.style.marginRight = '10px';
icone.style.marginLeft = '10px';
icone.style.padding = '40px';
cabecalho.insertBefore(icone, cabecalho.firstChild);

document.body.appendChild(cabecalho);

// ========== MENU (fora do cabeçalho) ==========
const menu = document.createElement('nav');
menu.style.fontSize = '30px';
menu.style.backgroundColor = '#a6a6f0'; // Cor de fundo opcional
menu.style.padding = '10px 0';

const lista = document.createElement('ul');
const itens = ['Home', 'Sobre', 'Contato'];

itens.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.style.cursor = 'pointer';       // Mãozinha ao passar o mouse
    lista.appendChild(li);
});

// Itens na horizontal
lista.style.display = 'flex';
lista.style.listStyle = 'none';
lista.style.gap = '60px';
lista.style.padding = '0';
lista.style.margin = '0';
lista.style.justifyContent = 'center';

menu.appendChild(lista);
document.body.appendChild(menu);  // ← Adiciona ao body, não ao cabecalho!