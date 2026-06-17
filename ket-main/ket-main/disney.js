
function showSection(n) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(`section-${n}`).classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === n);
    });
}

// Animação de fatos
function toggleFact(card) {
    const facts = card.querySelectorAll('.fact');
    facts.forEach((fact, index) => {
        setTimeout(() => {
            fact.classList.toggle('show');
        }, index * 200);
    });
}

// Fato surpresa
const facts = [
    "O nome verdadeiro de Walt Disney era Walter Elias Disney.",
    "A voz de Olaf em Frozen é do mesmo ator que interpreta Kristoff.",
    "Em Enrolados, há mais de 45 mil lanternas na cena das luzes flutuantes.",
    "A Disney já produziu mais de 60 filmes de animação clássicos.",
    "Mickey Mouse tem uma estrela na Calçada da Fama em Hollywood."
];

function surpriseMe() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert("✨ Curiosidade Disney ✨\n\n" + randomFact);
}

// Partículas mágicas (simples)
function createMagicParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '8px';
    particle.style.height = '8px';
    particle.style.borderRadius = '50%';
    particle.style.background = ['#ff69b4', '#00bfff', '#ffd700'][Math.floor(Math.random()*3)];
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '-10px';
    particle.style.opacity = '0.8';
    particle.style.zIndex = '9999';
    particle.style.pointerEvents = 'none';
    document.body.appendChild(particle);

    let y = -10;
    const speed = 3 + Math.random() * 4;
    
    const animate = setInterval(() => {
        y += speed;
        particle.style.top = y + 'px';
        particle.style.opacity = (1 - y / window.innerHeight).toString();
        
        if (y > window.innerHeight) {
            clearInterval(animate);
            particle.remove();
        }
    }, 30);
}

// Inicialização
window.onload = function() {
    // Inicia partículas mágicas
    setInterval(() => {
        if (Math.random() > 0.6) createMagicParticle();
    }, 180);
    
    // Animação inicial
    console.log("%cBem-vindo ao Universo Disney! 🎬✨", "color:#ff69b4; font-size:18px; font-weight:bold;");
};