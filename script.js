const livros = [
    {titulo: "Declínio de um Homem", localizacao: "Corredor C, Numeração 25, Piso Inferior"},
    {titulo: "Declínio da Civilização", localizacao: "Corredor A, Numeração 10, Piso 1"},
    {titulo: "O Declínio do Ocidente", localizacao: "Corredor B, Numeração 20, Piso 2"},
    {titulo: "Histórias do Corredor A", localizacao: "Corredor A, Numeração 5, Piso 3"},
    {titulo: "Manual do Corredor B", localizacao: "Corredor B, Numeração 22, Piso 4"},
    {titulo: "Guia do Corredor C", localizacao: "Corredor C, Numeração 30, Piso Superior"},
    {titulo: "Lendas do Déclínio", localizacao: "Corredor D, Numeração 38, Piso 2"},
    {titulo: "Enciclopédia do Corredor E", localizacao: "Corredor E, Numeração 42, Piso 1"},
    {titulo: "Corridor F Chronicles", localizacao: "Corredor F, Numeração 8, Piso 3"},
    {titulo: "Guia do Corredor G", localizacao: "Corredor G, Numeração 12, Piso 5"},
    {titulo: "Aden Arábia", localizacao: "Corredor A, Numeração 1, Piso Superior"},
    {titulo: "Caros Pais", localizacao: "Corredor A, Numeração 1, Piso Superior"},
    {titulo: "A Firma Pereira", localizacao: "Corredor A, Numeração 1, Piso Central"},
    {titulo: "Arquitetura no Novo Milênio", localizacao: "Corredor A, Numeração 1, Piso Central"},
    {titulo: "Amazônia: Uma Década de Esperança", localizacao: "Corredor A, Numeração 1, Piso Inferior"},
    {titulo: "Arquitetura pelas Escadas", localizacao: "Corredor A, Numeração 2, Piso Superior"},
    {titulo: "Alá e as Crianças Soldados", localizacao: "Corredor A, Numeração 2, Piso Superior"},
    {titulo: "Anjo Azul", localizacao: "Corredor A, Numeração 2, Piso Central"},
    {titulo: "Cassandra", localizacao: "Corredor A, Numeração 2, Piso Central"},
    {titulo: "Arte Não Europeia", localizacao: "Corredor A, Numeração 2, Piso Central"},
    {titulo: "Arquitetura pelas Escadas", localizacao: "Corredor A, Numeração 2, Piso Central"},
    {titulo: "Alá e as Crianças Soldados", localizacao: "Corredor A, Numeração 2, Piso Central"},
    {titulo: "Dia dos Bárbaros", localizacao: "Corredor A, Numeração 2, Piso Inferior"},
    {titulo: "A América de Rugendas", localizacao: "Corredor A, Numeração 2, Piso Inferior"},
    {titulo: "Aqui Dentro", localizacao: "Corredor A, Numeração 2, Piso Inferior"},
    {titulo: "Baixo Calão", localizacao: "Corredor A, Numeração 3, Piso Superior"},
    {titulo: "América Cidade Natureza", localizacao: "Corredor A, Numeração 3, Piso Central"},
    {titulo: "Baixo Calão", localizacao: "Corredor A, Numeração 3, Piso Central"},
    {titulo: "Béla Guttmann", localizacao: "Corredor A, Numeração 3, Piso Inferior"},
    {titulo: "América Cidade Natureza", localizacao: "Corredor A, Numeração 4, Piso Superior"},
    {titulo: "Carregadores de Água", localizacao: "Corredor A, Numeração 4, Piso Central"},
    {titulo: "A Bela Senhora Seidenman", localizacao: "Corredor A, Numeração 4, Piso Inferior"},
    {titulo: "Canadá", localizacao: "Corredor A, Numeração 5, Piso Superior"},
    {titulo: "Condição Urbana", localizacao: "Corredor A, Numeração 5, Piso Central"},
    {titulo: "Descrever Visível", localizacao: "Corredor A, Numeração 5, Piso Central"},
    {titulo: "Invenção de Paris", localizacao: "Corredor A, Numeração 5, Piso Central"},
    {titulo: "Diário dos Moedeiros Falsos", localizacao: "Corredor A, Numeração 5, Piso Central"},
    {titulo: "Balada do Calamo", localizacao: "Corredor A, Numeração 5, Piso Inferior"},
    {titulo: "Biodiversidade", localizacao: "Corredor A, Numeração 5, Piso Inferior"},
    {titulo: "Caros Pais", localizacao: "Corredor A, Numeração 6, Piso Superior"},
    {titulo: "Chamado do Poente", localizacao: "Corredor A, Numeração 6, Piso Superior"},
    {titulo: "Figuras 2", localizacao: "Corredor A, Numeração 6, Piso Central"},
    {titulo: "Figuras 3", localizacao: "Corredor A, Numeração 6, Piso Central"},
    {titulo: "O Poder da Multiplicação", localizacao: "Corredor A, Numeração 6, Piso Central"},
    {titulo: "Corpo em Off", localizacao: "Corredor A, Numeração 6, Piso Central"},
    {titulo: "Convidado Desconhecido", localizacao: "Corredor A, Numeração 6, Piso Central"},
    {titulo: "Ensaio sobre o Dia Exitoso", localizacao: "Corredor A, Numeração 6, Piso Inferior"},
    {titulo: "Ensaio sobre o Cansaço", localizacao: "Corredor A, Numeração 6, Piso Inferior"},
    {titulo: "Ensaio sobre o Louco por Cogumelos", localizacao: "Corredor A, Numeração 6, Piso Inferior"},
    {titulo: "Ensaio sobre a Jukebox", localizacao: "Corredor A, Numeração 6, Piso Inferior"},
    {titulo: "Maquiavel, Democracia e o Brasil", localizacao: "Corredor A, Numeração 6, Piso Inferior"},
    {titulo: "Campo Belo", localizacao: "Corredor A, Numeração 7, Piso Superior"},
    {titulo: "Corpo em Off", localizacao: "Corredor A, Numeração 7, Piso Superior"},
    {titulo: "Convidado Desconhecido", localizacao: "Corredor A, Numeração 7, Piso Superior"},
    {titulo: "Fátima Fez os Pés para Mostrar na Choperia", localizacao: "Corredor A, Numeração 7, Piso Superior"},
    {titulo: "Para Isabel", localizacao: "Corredor A, Numeração 7, Piso Central"},
    {titulo: "Depois de Piketty", localizacao: "Corredor A, Numeração 7, Piso Inferior"},
    {titulo: "Marina", localizacao: "Corredor A, Numeração 8, Piso Superior"},
    {titulo: "Diário Tardio", localizacao: "Corredor A, Numeração 8, Piso Central"},
    {titulo: "Atlas do Mundo Global", localizacao: "Corredor A, Numeração 8, Piso Central"},
    {titulo: "Duas Ideias Filosóficas e a Pandemia", localizacao: "Corredor A, Numeração 8, Piso Central"},
    {titulo: "Vidas Minúsculas", localizacao: "Corredor A, Numeração 8, Piso Central"},
    {titulo: "Fátima Fez os Pés para Mostrar na Choperia", localizacao: "Corredor A, Numeração 8, Piso Central"},
    {titulo: "Depois de Piketty", localizacao: "Corredor A, Numeração 8, Piso Inferior"},
    {titulo: "Marca Página", localizacao: "Corredor A, Numeração 9, Piso Superior"},
    {titulo: "Hotel Savoy", localizacao: "Corredor A, Numeração 9, Piso Central"},
    {titulo: "Maldito Seja Dostoiévski", localizacao: "Corredor A, Numeração 9, Piso Central"},
    {titulo: "Insustentável Arquitetura", localizacao: "Corredor A, Numeração 9, Piso Central"},
    {titulo: "Cubismo", localizacao: "Corredor A, Numeração 9, Piso Inferior"},
    {titulo: "Segunda Espada", localizacao: "Corredor A, Numeração 9, Piso Inferior"},
    {titulo: "Festa Sobre as Bombas", localizacao: "Corredor A, Numeração 9, Piso Inferior"},
    {titulo: "Marca Página", localizacao: "Corredor A, Numeração 10, Piso Superior"},
    {titulo: "Gordos, Magros e Obesos", localizacao: "Corredor A, Numeração 10, Piso Central"},
    {titulo: "Malina", localizacao: "Corredor A, Numeração 10, Piso Central"},
    {titulo: "Os Moedeiros Falsos", localizacao: "Corredor A, Numeração 10, Piso Central"},
    {titulo: "História da Mesa", localizacao: "Corredor A, Numeração 10, Piso Inferior"},
    {titulo: "Guerra Civil", localizacao: "Corredor A, Numeração 10, Piso Inferior"},
    {titulo: "Meu Casas", localizacao: "Corredor A, Numeração 11, Piso Superior"},
    {titulo: "Sonho do Terror", localizacao: "Corredor A, Numeração 11, Piso Superior"},
    {titulo: "Fabulosa História dos Legumes", localizacao: "Corredor A, Numeração 11, Piso Central"},
    {titulo: "Promessa", localizacao: "Corredor A, Numeração 11, Piso Central"},
    {titulo: "A Pane", localizacao: "Corredor A, Numeração 11, Piso Central"},
    {titulo: "Melodia das Coisas", localizacao: "Corredor A, Numeração 11, Piso Inferior"},
    {titulo: "Guerra sem Batalha", localizacao: "Corredor A, Numeração 11, Piso Inferior"},
    {titulo: "Utopias Românticas", localizacao: "Corredor A, Numeração 11, Piso Inferior"},
    {titulo: "Textura Dissimulada", localizacao: "Corredor A, Numeração 11, Piso Inferior"},
    {titulo: "Formigas da Estação de Berna", localizacao: "Corredor A, Numeração 12, Piso Superior"},
    {titulo: "Peregrinações", localizacao: "Corredor A, Numeração 12, Piso Superior"},
    {titulo: "Mulheres Atrás das Câmeras", localizacao: "Corredor A, Numeração 12, Piso Central"},
    {titulo: "América: Um Sonho de Escritores", localizacao: "Corredor A, Numeração 12, Piso Inferior"},
    {titulo: "Não Adianta Morrer", localizacao: "Corredor A, Numeração 13, Piso Superior"},
    {titulo: "Quero Mais é que se Danem", localizacao: "Corredor A, Numeração 13, Piso Superior"},
    {titulo: "Perda da Imagem", localizacao: "Corredor A, Numeração 13, Piso Superior"},
    {titulo: "Péricles", localizacao: "Corredor A, Numeração 13, Piso Central"},
    {titulo: "Além do Santo Barrão", localizacao: "Corredor A, Numeração 13, Piso Inferior"},
    {titulo: "Cinema de Novo", localizacao: "Corredor A, Numeração 13, Piso Inferior"},
    {titulo: "Crítica da Retórica Democrática", localizacao: "Corredor A, Numeração 13, Piso Inferior"},
    {titulo: "Vidas de César", localizacao: "Corredor A, Numeração 13, Piso Inferior"},
    {titulo: "Sufrágio Universal", localizacao: "Corredor A, Numeração 13, Piso Inferior"},
    {titulo: "Entre Dois Mundos", localizacao: "Corredor A, Numeração 13, Piso Inferior"},
    {titulo: "Rimbaud da América", localizacao: "Corredor A, Numeração 13, Piso Inferior"},
    {titulo: "Perda da Imagem", localizacao: "Corredor A, Numeração 14, Piso Superior"},
    {titulo: "Contas Finais", localizacao: "Corredor A, Numeração 14, Piso Central"},
    {titulo: "Escolhidos", localizacao: "Corredor A, Numeração 14, Piso Central"},
    {titulo: "Homens e Mulheres da Idade Média", localizacao: "Corredor A, Numeração 14, Piso Inferior"},
    {titulo: "Paddy Clarke", localizacao: "Corredor A, Numeração 15, Piso Superior"},
    {titulo: "Como Trocar", localizacao: "Corredor A, Numeração 15, Piso Central"},
    {titulo: "93", localizacao: "Corredor A, Numeração 15, Piso Inferior"},
    {titulo: "Guerra como Prestação de Serviço", localizacao: "Corredor A, Numeração 15, Piso Inferior"},
    {titulo: "Produção de Alimentos no Século XXI", localizacao: "Corredor A, Numeração 15, Piso Inferior"},
    {titulo: "Pombo Torcaz", localizacao: "Corredor A, Numeração 16, Piso Superior"},
    {titulo: "Ritual", localizacao: "Corredor A, Numeração 16, Piso Superior"},
    {titulo: "Fazendo o Céu Falar", localizacao: "Corredor A, Numeração 16, Piso Central"},
    {titulo: "Carta a Christopher de Beaumont", localizacao: "-Corredor A, Numeração 16, Piso Inferior"},
    {titulo: "Psicanálise Volume 2", localizacao: "Corredor A, Numeração 16, Piso Inferior"},
    {titulo: "Psicanálise Volume 1", localizacao: "Corredor A, Numeração 16, Piso Inferior"},
    {titulo: "Sangue de Emmett Till", localizacao: "Corredor A, Numeração 17, Piso Superior"},
    {titulo: "Syngue Sabour", localizacao: "Corredor A, Numeração 17, Piso Central"},
    {titulo: "Porões do Vaticano", localizacao: "Corredor A, Numeração 17, Piso Central"},
    {titulo: "Uma Missa para a Cidade de Arras", localizacao: "Corredor A, Numeração 17, Piso Central"},
    {titulo: "Teoria da Regulação", localizacao: "Corredor A, Numeração 17, Piso Central"},
    {titulo: "Rússia", localizacao: "Corredor A, Numeração 18, Piso Superior"},
    {titulo: "Questão Humana", localizacao: "Corredor A, Numeração 18, Piso Central"},
    {titulo: "Teoria da Regulação", localizacao: "Corredor A, Numeração 18, Piso Central"},
    {titulo: "Terras Cinzas", localizacao: "Corredor A, Numeração 18, Piso Central"},
    {titulo: "O Furgão", localizacao: "Corredor A, Numeração 18, Piso Central"},
    {titulo: "Segredo do Calígrafo", localizacao: "Corredor A, Numeração 18, Piso Inferior"}
];

const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');
const noResultsText = document.getElementById('no-results');
const voiceBtn = document.getElementById('voiceBtn');
const connectionStatus = document.getElementById('connection-status');

// Validação de elementos DOM
if (!searchInput || !resultsList || !noResultsText || !voiceBtn || !connectionStatus) {
    console.error('Um ou mais elementos do DOM não foram encontrados.');
    throw new Error('Inicialização da aplicação interrompida devido a elementos DOM ausentes.');
}

// Normaliza texto removendo acentos e caracteres especiais
function normalizeText(text) {
    return text.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^\w\s]/g, "").toLowerCase();
}

// Renderiza resultados da busca
function renderResults(filtered) {
    resultsList.innerHTML = '';
    if (filtered.length === 0) {
        noResultsText.hidden = false;
        return;
    }
    noResultsText.hidden = true;
    filtered.forEach(livro => {
        const li = document.createElement('li');
        li.textContent = `${livro.titulo} — ${livro.localizacao}`;
        resultsList.appendChild(li);
    });
}

// Função de busca por título ou localização
function searchBooks(term) {
    if (!term.trim()) {
        resultsList.innerHTML = '';
        noResultsText.hidden = true;
        return;
    }
    const lowerTerm = normalizeText(term);
    const filtered = livros.filter(livro =>
        normalizeText(livro.titulo).includes(lowerTerm) ||
        normalizeText(livro.localizacao).includes(lowerTerm)
    );
    renderResults(filtered);
}

// Debounce para limitar chamadas frequentes
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Evento de busca com debounce
searchInput.addEventListener('input', debounce(e => searchBooks(e.target.value), 300));

// Reconhecimento de voz
let recognition;
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => voiceBtn.classList.add('recording');
    recognition.onend = () => voiceBtn.classList.remove('recording');
    recognition.onerror = (event) => {
        voiceBtn.classList.remove('recording');
        alert(`Erro no reconhecimento de voz: ${event.error}`);
    };
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        searchBooks(transcript);
    };

    voiceBtn.addEventListener('click', () => {
        if (voiceBtn.classList.contains('recording')) {
            recognition.stop();
        } else {
            recognition.start();
        }
    });
} else {
    voiceBtn.disabled = true;
    voiceBtn.title = "Seu navegador não suporta reconhecimento de voz.";
    voiceBtn.setAttribute('aria-disabled', 'true');
}

// Indicador de status de conexão
window.addEventListener('online', () => {
    connectionStatus.textContent = 'Online';
    connectionStatus.className = 'online';
});
window.addEventListener('offline', () => {
    connectionStatus.textContent = 'Offline';
    connectionStatus.className = 'offline';
});

// Registro do Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log("Service Worker registrado:", reg))
            .catch(err => console.error("Erro ao registrar Service Worker:", err));
    });
}
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    // Impede o prompt automático
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false; // Mostra o botão

    installBtn.addEventListener('click', () => {
        installBtn.hidden = true; // Esconde o botão após clique
        deferredPrompt.prompt(); // Exibe o prompt nativo

        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou a instalação');
            } else {
                console.log('Usuário recusou a instalação');
            }
            deferredPrompt = null;
        });
    });
});
