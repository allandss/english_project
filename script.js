const wordsList1 = [
    {
        portugues: {
            palavra: "cachorro",
            traducoes: ["dog", "hound"],
            exemplos: ["O cachorro está latindo.", "Eu tenho um cachorro em casa."],
            classificacao: "substantivo",
            descricao: "Um animal doméstico conhecido por sua lealdade e amizade.",
            audio: "audio/cachorro.mp3"
        },
        ingles: {
            palavra: "dog",
            traducoes: ["cachorro", "cão"],
            exemplos: ["The dog is barking.", "I have a dog at home."],
            classificacao: "noun",
            descricao: "A domesticated animal known for its loyalty and companionship.",
            audio: "audio/dog.mp3"
        }
    },
    {
        portugues: {
            palavra: "correr",
            traducoes: ["run", "jog"],
            exemplos: ["Eu gosto de correr pela manhã.", "Correr é um bom exercício."],
            classificacao: "verbo",
            descricao: "Mover-se rapidamente usando as pernas.",
            audio: "audio/correr.mp3"
        },
        ingles: {
            palavra: "run",
            traducoes: ["correr", "jogar"],
            exemplos: ["I like to run in the morning.", "Running is good exercise."],
            classificacao: "verb",
            descricao: "To move swiftly on foot.",
            audio: "audio/run.mp3"
        }
    }
];

const wordsList2 = [
    // Adicione mais palavras conforme necessário
];

let words = wordsList1;
let shuffledIndexes = [];
let currentIndex = -1;
let correctAnswers = 0;
let wrongAnswers = 0;
let currentWords = words;
let answeredWords = [];
let incorrectWords = [];
let isWordVisible = true;
let areExamplesVisible = true;  // Estado para visibilidade dos exemplos
let selectedLanguage = 'portugues';

const successSound = new Audio('assets/sounds/success.mp3');
const failureSound = new Audio('assets/sounds/failure.mp3');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initializeIndexes() {
    shuffledIndexes = [...Array(currentWords.length).keys()];
    shuffleArray(shuffledIndexes);
    currentIndex = -1;
}

function getRandomIndex() {
    if (shuffledIndexes.length === 0) {
        initializeIndexes();
    }
    return shuffledIndexes.pop();
}

function displayRandomWord() {
    if (answeredWords.length === currentWords.length) {
        alert("Parabéns! Você respondeu todas as palavras. Inicie novamente.");
        answeredWords = [];
        correctAnswers = 0;
        wrongAnswers = 0;
        initializeIndexes();
        displayRandomWord();
        updateStats();
        showIncorrectWords();
        return;
    }

    let randomIndex;
    do {
        randomIndex = getRandomIndex();
    } while (answeredWords.includes(randomIndex));

    currentIndex = randomIndex;
    const wordData = currentWords[currentIndex][selectedLanguage];
    const wordContainer = document.getElementById('word-container');
    const classificationContainer = document.getElementById('classification-container'); // Novo contêiner para a classificação

    wordContainer.textContent = isWordVisible ? wordData.palavra : '';
    classificationContainer.textContent = isWordVisible ? wordData.classificacao : ''; // Exibindo a classificação

    if (answeredWords.length) {
        pronounceWord(wordData.audio);
    }

    showDictionaryLink(wordData.palavra);
    displayWordDetails(wordData);
}

function updateStats() {
    const statsContainer = document.getElementById('stats');
    statsContainer.innerHTML = `Acertos: <span class="result-correct">${correctAnswers}</span> | Erros: <span class="result-incorrect">${wrongAnswers}</span>`;
}

function showResultAlert(message, isCorrect, correctTranslations, word) {
    const resultAlert = document.getElementById('result');
    resultAlert.textContent = message;
    resultAlert.classList.toggle('correct', isCorrect);
    resultAlert.classList.toggle('incorrect', !isCorrect);
    resultAlert.classList.add('fade-in');

    const correctTranslationsMessage = `<b>${word} = ${correctTranslations.join(', ')}</b>`;
    resultAlert.innerHTML += `<br>${correctTranslationsMessage}`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const wordData = currentWords[currentIndex][selectedLanguage];
    const correctTranslations = wordData.traducoes.map(translation => translation.toLowerCase());
    const isCorrect = correctTranslations.includes(userAnswer);

    if (isCorrect) {
        correctAnswers++;
        successSound.play();
    } else {
        failureSound.play();
        wrongAnswers++;
        incorrectWords.push(wordData);
    }

    const message = isCorrect ? 'Correto!' : 'Incorreto!';
    showResultAlert(message, isCorrect, correctTranslations, wordData.palavra);

    answeredWords.push(currentIndex);

    displayRandomWord();
    updateStats();
    document.getElementById('answer-input').value = '';
    document.getElementById('answer-input').focus();
}

function showIncorrectWords() {
    let incorrectWordsMessage = "Palavras incorretas:\n";
    incorrectWords.forEach(word => {
        incorrectWordsMessage += `${word.palavra} - Traduções: ${word.traducoes.join(', ')}\n`;
    });
    if (incorrectWords.length) {
        alert(incorrectWordsMessage);
    }
}

function pronounceWord(audioPath) {
    const audio = new Audio(audioPath);
    audio.play();
}

function changeLanguage() {
    const languageSelect = document.getElementById('language-select');
    selectedLanguage = languageSelect.value;
    displayRandomWord();
}

function toggleWordVisibility() {
    isWordVisible = !isWordVisible;
    const toggleButton = document.getElementById('toggle-word-visibility-btn');
    toggleButton.textContent = isWordVisible ? 'Ocultar palavra' : 'Mostrar palavra';
    displayRandomWord();
}

function showDictionaryLink(word) {
    const dictionaryLink = document.getElementById('dictionary-link');
    const targetLanguage = selectedLanguage === 'portugues' ? 'ingles-portugues' : 'portugues-ingles';
    const wordToTranslate = selectedLanguage === 'portugues' ? currentWords[currentIndex].ingles.palavra : currentWords[currentIndex].portugues.palavra;
    dictionaryLink.href = `https://www.linguee.com.br/${targetLanguage}/search?source=auto&query=${wordToTranslate}`;
}

function displayWordDetails(wordData) {
    const exemplosContainer = document.getElementById('exemplos');
    const descricaoContainer = document.getElementById('descricao');
    
    if (areExamplesVisible) {
        let exemplosHTML = '<b>Exemplos:</b><br>';
        for (let i = 0; i < wordData.exemplos.length; i++) {
            let exemploOriginal = wordData.exemplos[i];
            let exemploTraduzido = currentWords[currentIndex][selectedLanguage === 'portugues' ? 'ingles' : 'portugues'].exemplos[i];
            
            // Ocultar a palavra na tradução
            exemploTraduzido = exemploTraduzido.replace(new RegExp(wordData.traducoes.join('|'), 'gi'), '___');
            
            exemplosHTML += `${exemploOriginal}<br>${exemploTraduzido}<br><br>`;
        }
        exemplosContainer.innerHTML = exemplosHTML;
    } else {
        exemplosContainer.innerHTML = '';
    }
    
    descricaoContainer.innerHTML = `<b>Descrição:</b><br>${wordData.descricao}`;
}

function toggleExamplesVisibility() {
    areExamplesVisible = !areExamplesVisible;
    const toggleButton = document.getElementById('toggle-examples-visibility-btn');
    toggleButton.textContent = areExamplesVisible ? 'Ocultar exemplos' : 'Mostrar exemplos';
    displayWordDetails(currentWords[currentIndex][selectedLanguage]);
}

function loadWords(listName) {
    switch (listName) {
        case 'lista1':
            words = wordsList1;
            break;
        case 'lista2':
            words = wordsList2;
            break;
        // Adicione mais listas conforme necessário
    }
    currentWords = words;
    answeredWords = [];
    incorrectWords = [];
    correctAnswers = 0;
    wrongAnswers = 0;
    initializeIndexes();
    displayRandomWord();
    updateStats();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeIndexes();
    displayRandomWord();
    updateStats();
    document.getElementById('answer-input').focus();
});
