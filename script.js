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
    {titulo: "Guia do Corredor G", localizacao: "Corredor G, Numeração 12, Piso 5"}
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
