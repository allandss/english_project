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
    {
        portugues: {
            palavra: "eu",
            traducoes: ["I"],
            exemplos: ["Eu gosto de maçãs.", "Eu sou estudante."],
            classificacao: "pronome",
            descricao: "Pronome pessoal utilizado para se referir a si mesmo.",
            audio: "audio/eu.mp3"
        },
        ingles: {
            palavra: "I",
            traducoes: ["eu"],
            exemplos: ["I like apples.", "I am a student."],
            classificacao: "pronoun",
            descricao: "Personal pronoun used to refer to oneself.",
            audio: "audio/I.mp3"
        }
    },
    {
        portugues: {
            palavra: "você",
            traducoes: ["you"],
            exemplos: ["Você é meu amigo.", "Eu vejo você."],
            classificacao: "pronome",
            descricao: "Pronome pessoal utilizado para se referir à pessoa com quem se fala.",
            audio: "audio/voce.mp3"
        },
        ingles: {
            palavra: "you",
            traducoes: ["você"],
            exemplos: ["You are my friend.", "I see you."],
            classificacao: "pronoun",
            descricao: "Personal pronoun used to refer to the person one is speaking to.",
            audio: "audio/you.mp3"
        }
    },
    {
        portugues: {
            palavra: "ele",
            traducoes: ["he"],
            exemplos: ["Ele é meu irmão.", "Eu conheço ele."],
            classificacao: "pronome",
            descricao: "Pronome pessoal utilizado para se referir a um homem ou menino.",
            audio: "audio/ele.mp3"
        },
        ingles: {
            palavra: "he",
            traducoes: ["ele"],
            exemplos: ["He is my brother.", "I know him."],
            classificacao: "pronoun",
            descricao: "Personal pronoun used to refer to a male person or boy.",
            audio: "audio/he.mp3"
        }
    },
    {
        portugues: {
            palavra: "ela",
            traducoes: ["she"],
            exemplos: ["Ela é minha irmã.", "Eu vejo ela."],
            classificacao: "pronome",
            descricao: "Pronome pessoal utilizado para se referir a uma mulher ou menina.",
            audio: "audio/ela.mp3"
        },
        ingles: {
            palavra: "she",
            traducoes: ["ela"],
            exemplos: ["She is my sister.", "I see her."],
            classificacao: "pronoun",
            descricao: "Personal pronoun used to refer to a female person or girl.",
            audio: "audio/she.mp3"
        }
    },
    {
        portugues: {
            palavra: "isso",
            traducoes: ["it"],
            exemplos: ["Isso é um livro.", "Eu vejo isso."],
            classificacao: "pronome",
            descricao: "Pronome pessoal utilizado para se referir a objetos, animais ou ideias.",
            audio: "audio/isso.mp3"
        },
        ingles: {
            palavra: "it",
            traducoes: ["isso"],
            exemplos: ["It is a book.", "I see it."],
            classificacao: "pronoun",
            descricao: "Personal pronoun used to refer to objects, animals, or ideas.",
            audio: "audio/it.mp3"
        }
    },
    {
        portugues: {
            palavra: "nós",
            traducoes: ["we"],
            exemplos: ["Nós vamos à escola.", "Nós gostamos de sorvete."],
            classificacao: "pronome",
            descricao: "Pronome pessoal utilizado para se referir a si mesmo junto com outras pessoas.",
            audio: "audio/nos.mp3"
        },
        ingles: {
            palavra: "we",
            traducoes: ["nós"],
            exemplos: ["We go to school.", "We like ice cream."],
            classificacao: "pronoun",
            descricao: "Personal pronoun used to refer to oneself along with others.",
            audio: "audio/we.mp3"
        }
    },
    {
        portugues: {
            palavra: "eles",
            traducoes: ["they"],
            exemplos: ["Eles estão jogando.", "Eu vejo eles."],
            classificacao: "pronome",
            descricao: "Pronome pessoal utilizado para se referir a um grupo de pessoas.",
            audio: "audio/eles.mp3"
        },
        ingles: {
            palavra: "they",
            traducoes: ["eles"],
            exemplos: ["They are playing.", "I see them."],
            classificacao: "pronoun",
            descricao: "Personal pronoun used to refer to a group of people.",
            audio: "audio/they.mp3"
        }
    },
    {
        portugues: {
            palavra: "este",
            traducoes: ["this"],
            exemplos: ["Este é um carro.", "Eu gosto deste."],
            classificacao: "pronome demonstrativo",
            descricao: "Pronome utilizado para indicar algo que está próximo.",
            audio: "audio/este.mp3"
        },
        ingles: {
            palavra: "this",
            traducoes: ["este", "isto"],
            exemplos: ["This is a car.", "I like this."],
            classificacao: "demonstrative pronoun",
            descricao: "Pronoun used to indicate something that is close.",
            audio: "audio/this.mp3"
        }
    },
    {
        portugues: {
            palavra: "aquele",
            traducoes: ["that"],
            exemplos: ["Aquele é um prédio.", "Eu quero aquele."],
            classificacao: "pronome demonstrativo",
            descricao: "Pronome utilizado para indicar algo que está distante.",
            audio: "audio/aquele.mp3"
        },
        ingles: {
            palavra: "that",
            traducoes: ["aquele", "aquilo"],
            exemplos: ["That is a building.", "I want that."],
            classificacao: "demonstrative pronoun",
            descricao: "Pronoun used to indicate something that is far.",
            audio: "audio/that.mp3"
        }
    },
    {
        portugues: {
            palavra: "aqui",
            traducoes: ["here"],
            exemplos: ["Eu estou aqui.", "Venha aqui."],
            classificacao: "advérbio",
            descricao: "Advérbio utilizado para indicar um lugar próximo.",
            audio: "audio/aqui.mp3"
        },
        ingles: {
            palavra: "here",
            traducoes: ["aqui"],
            exemplos: ["I am here.", "Come here."],
            classificacao: "adverb",
            descricao: "Adverb used to indicate a nearby place.",
            audio: "audio/here.mp3"
        }
    },
    {
        portugues: {
            palavra: "lá",
            traducoes: ["there"],
            exemplos: ["Eu vou lá.", "Fique lá."],
            classificacao: "advérbio",
            descricao: "Advérbio utilizado para indicar um lugar distante.",
            audio: "audio/la.mp3"
        },
        ingles: {
            palavra: "there",
            traducoes: ["lá"],
            exemplos: ["I go there.", "Stay there."],
            classificacao: "adverb",
            descricao: "Adverb used to indicate a distant place.",
            audio: "audio/there.mp3"
        }
    }
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
let areExamplesVisible = true;
let selectedLanguage = 'ingles';

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
        showIncorrectWordsTable();
        return;
    }

    let randomIndex;
    do {
        randomIndex = getRandomIndex();
    } while (answeredWords.includes(randomIndex));

    currentIndex = randomIndex;
    const wordData = currentWords[currentIndex][selectedLanguage];
    const wordContainer = document.getElementById('word-container');
    const classificationContainer = document.getElementById('classification-container'); 

    wordContainer.textContent = isWordVisible ? wordData.palavra : '';
    classificationContainer.textContent = isWordVisible ? wordData.classificacao : ''; 

    if (selectedLanguage === 'ingles') {
        pronounceWord(wordData.palavra, wordData.audio);
        document.getElementById('repeat-pronunciation-btn').style.display = 'inline-block';
    } else {
        document.getElementById('repeat-pronunciation-btn').style.display = 'none';
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
    const resultMessage = document.getElementById('result-message');

    const englishWordData = currentWords[currentIndex].ingles; // Sempre usando a palavra em inglês
    const dictionaryLink = `https://www.linguee.com.br/ingles-portugues/search?source=auto&query=${englishWordData.palavra}`;

    resultMessage.innerHTML = `
        <span>${message}
        <b>${word}</b> 
        = 
        <b>${correctTranslations.join(', ')} </b>
        ${!isCorrect ? `<a href="${dictionaryLink}" target="_blank"><img src="./assets/menu_book-white.svg" /></a>` : '' }
        ${!isCorrect ? `<img src="./assets/brand_awareness-white.svg" onclick="listenIncorrectWordPronunciation()">` : '' }
        </span>
        
    `;
    resultAlert.classList.toggle('correct', isCorrect);
    resultAlert.classList.toggle('incorrect', !isCorrect);
    resultAlert.classList.add('fade-in');
    resultAlert.style.display = 'block';
}

function closeResult() {
    const resultAlert = document.getElementById('result');
    resultAlert.style.display = 'none';  // Esconder o resultado
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
        incorrectWords.push({
            wordData: currentWords[currentIndex].ingles, // Sempre armazenando a palavra em inglês
            userAnswer: userAnswer
        });
        addIncorrectWordToTable(currentWords[currentIndex].ingles, userAnswer);
    }

    const message = isCorrect ? 'Correto!' : 'Incorreto!';
    showResultAlert(message, isCorrect, correctTranslations, wordData.palavra);

    answeredWords.push(currentIndex);

    displayRandomWord();
    updateStats();
    document.getElementById('answer-input').value = '';
    document.getElementById('answer-input').focus();

    if (areExamplesVisible) {
        toggleExamplesVisibility(false);
    }
}


async function pronounceWord(word, audioPath) {
    try {
        const audio = new Audio(audioPath);
        audio.onerror = async () => {
            console.log(`Arquivo de áudio não encontrado: ${audioPath}. Usando a API de texto para fala.`);
            await pronounceWordWithAPI(word);
        };
        audio.play();
    } catch (error) {
        console.error('Error pronouncing word:', error);
        await pronounceWordWithAPI(word);
    }
}

async function pronounceWordWithAPI(word) {
    try {
        const apiKey = 'AIzaSyAJkMlsrbjBuEpt9loc65fliZVaEdTDfQE';
        const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                input: { text: word },
                voice: { languageCode: 'en-US', ssmlGender: 'FEMALE' },
                audioConfig: { audioEncoding: 'MP3' },
            }),
        });

        const data = await response.json();
        const audioContent = data.audioContent;
        const audio = new Audio('data:audio/mp3;base64,' + audioContent);
        audio.play();
    } catch (error) {
        console.error('Error pronouncing word with API:', error);
    }
}

function repeatPronunciation() {
    const wordData = currentWords[currentIndex][selectedLanguage];
    pronounceWord(wordData.palavra, wordData.audio);
}

function listenIncorrectWordPronunciation() {
    const englishWordData = incorrectWords[incorrectWords.length - 1].wordData; // Palavra em inglês
    pronounceWord(englishWordData.palavra, englishWordData.audio);
}

function listenAnswerInEnglish() {
    const wordData = currentWords[currentIndex].ingles; // Palavra em inglês
    pronounceWord(wordData.palavra, wordData.audio);
}

function toggleLanguage() {
    selectedLanguage = selectedLanguage === 'portugues' ? 'ingles' : 'portugues';
    changeLanguage();
    updateLanguageButton();
}

function updateLanguageButton() {
    const toggleLanguageBtn = document.getElementById('toggle-language-btn');
    toggleLanguageBtn.innerHTML = selectedLanguage === 'portugues' ? 'Português <img src="./assets/swap_horiz.svg" alt=""> Inglês' : 'Inglês <img src="./assets/swap_horiz.svg" alt=""> Português';
}

function changeLanguage() {
    areExamplesVisible = false;
    toggleExamplesVisibility(false);
    displayRandomWord();
}

function toggleWordVisibility() {
    isWordVisible = !isWordVisible;
    const toggleButton = document.getElementById('toggle-word-visibility-btn');
    toggleButton.textContent = isWordVisible ? 'Ocultar palavra' : 'Mostrar palavra';

    const wordData = currentWords[currentIndex][selectedLanguage];
    const wordContainer = document.getElementById('word-container');
    const classificationContainer = document.getElementById('classification-container'); 

    wordContainer.textContent = isWordVisible ? wordData.palavra : '';
    classificationContainer.textContent = isWordVisible ? wordData.classificacao : ''; 
}

function showDictionaryLink(word) {
    const dictionaryLink = document.getElementById('dictionary-link');
    const targetLanguage = selectedLanguage === 'portugues' ? 'ingles-portugues' : 'portugues-ingles';
    const wordToTranslate = currentWords[currentIndex].ingles.palavra;
    dictionaryLink.href = `https://www.linguee.com.br/${targetLanguage}/search?source=auto&query=${wordToTranslate}`;
}

function displayWordDetails(wordData) {
    const exemplosContainer = document.getElementById('exemplos');
    const dicaContainer = document.getElementById('descricao'); // Renomear para dicaContainer
    
    if (areExamplesVisible) {
        let exemplosHTML = '<h4>Frases de exemplo </h4>';
        for (let i = 0; i < wordData.exemplos.length; i++) {
            let exemploOriginal = wordData.exemplos[i];
            let exemploTraduzido = currentWords[currentIndex][selectedLanguage === 'portugues' ? 'ingles' : 'portugues'].exemplos[i];
            
            exemploTraduzido = exemploTraduzido.replace(new RegExp(wordData.traducoes.join('|'), 'gi'), '___');
            
            exemplosHTML += `<p>${exemploOriginal}<br>${exemploTraduzido}</p>`;
        }
        exemplosContainer.innerHTML = exemplosHTML;
    } else {
        exemplosContainer.innerHTML = '';
    }
    
    const dicaText = selectedLanguage === 'portugues' ? currentWords[currentIndex].ingles.descricao : currentWords[currentIndex].portugues.descricao;
    dicaContainer.innerHTML = `<h4>Dica</h4><p>${dicaText}</p>`;
}

function toggleExamplesVisibility(forceState = null) {
    if (forceState !== null) {
        areExamplesVisible = forceState;
    } else {
        areExamplesVisible = !areExamplesVisible;
    }

    const toggleButton = document.getElementById('toggle-examples-visibility-btn');
    toggleButton.textContent = areExamplesVisible ? 'Não mostrar ajuda' : 'Mostrar ajuda';
    
    const exemplosContainer = document.getElementById('exemplos');
    const dicaContainer = document.getElementById('descricao');
    const dictionaryLink = document.getElementById('dictionary-link');
    const listenAnswerBtn = document.getElementById('listen-answer-btn');

    if (areExamplesVisible) {
        exemplosContainer.style.display = 'block';
        dicaContainer.style.display = 'block';
        dictionaryLink.style.display = 'inline-block';
        if(selectedLanguage === 'portugues'){
            listenAnswerBtn.style.display = 'inline-block';
        }
    } else {
        exemplosContainer.style.display = 'none';
        dicaContainer.style.display = 'none';
        dictionaryLink.style.display = 'none';
        listenAnswerBtn.style.display = 'none'; 
    }

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
    }
    currentWords = words;
    answeredWords = [];
    incorrectWords = [];
    correctAnswers = 0;
    wrongAnswers = 0;
    initializeIndexes();
    displayRandomWord();
    updateStats();
    updateIncorrectWordsTable(); // Atualiza a tabela ao carregar nova lista
}

function updateIncorrectWordsTable() {
    const tableBody = document.getElementById('incorrect-words-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    incorrectWords.slice().reverse().forEach(incorrectWord => {
        const { wordData, userAnswer } = incorrectWord;
        const dictionaryLink = `https://www.linguee.com.br/ingles-portugues/search?source=auto&query=${wordData.palavra}`;
        const row = tableBody.insertRow(0); // Adiciona a linha no topo
        row.innerHTML = `
            <td>${wordData.palavra}</td>
            <td>${wordData.traducoes.join(', ')}</td>
            <td>${wordData.exemplos.join('<br>')}</td>
            <td><button onclick="pronounceWord('${wordData.palavra}', '${wordData.audio}')">Ouvir</button></td>
            <td><a href="${dictionaryLink}" target="_blank">Dicionário</a></td>
            <td>${userAnswer}</td>
        `;
    });

    document.getElementById('incorrect-words-section').style.display = incorrectWords.length > 0 ? 'block' : 'none';
}

function addIncorrectWordToTable(wordData, userAnswer) {
    const tableBody = document.getElementById('incorrect-words-table').getElementsByTagName('tbody')[0];
    const dictionaryLink = `https://www.linguee.com.br/ingles-portugues/search?source=auto&query=${wordData.palavra}`;
    const row = tableBody.insertRow(0); // Adiciona a linha no topo
    row.innerHTML = `
        <td><h5 class="incorrect-word"><p>${wordData.palavra}</p> <span onclick="pronounceWord('${wordData.palavra}', '${wordData.audio}')"><img src="./assets/brand_awareness.svg"></span> <a href="${dictionaryLink}" target="_blank"><img src="./assets/menu_book.svg" /></a> </h5></td>
        <td>${wordData.traducoes.join(', ')}</td>
        <td>${wordData.exemplos.join('<br>')}</td>
        <td>${userAnswer}</td>
    `;

    document.getElementById('incorrect-words-section').style.display = 'block';
}

function clearIncorrectWords() {
    incorrectWords = [];
    updateIncorrectWordsTable();
}

function skipAnswer() {
    const wordData = currentWords[currentIndex][selectedLanguage];
    const correctTranslations = wordData.traducoes.map(translation => translation.toLowerCase());

    wrongAnswers++;
    failureSound.play();
    incorrectWords.push({
        wordData: currentWords[currentIndex].ingles, // Sempre armazenando a palavra em inglês
        userAnswer: "Não sei"
    });
    addIncorrectWordToTable(currentWords[currentIndex].ingles, "Não sei");

    const message = 'Incorreto!';
    showResultAlert(message, false, correctTranslations, wordData.palavra);

    answeredWords.push(currentIndex);

    displayRandomWord();
    updateStats();

    if (areExamplesVisible) {
        toggleExamplesVisibility(false);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeIndexes();
    displayRandomWord();
    updateStats();
    changeLanguage();
    document.getElementById('answer-input').focus();

    areExamplesVisible = false;
    toggleExamplesVisibility(false);

    document.getElementById('answer-input').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    function checkWindowSize() {
        if (window.innerWidth > 768) {
            sidebar.classList.add('open');
            document.querySelector('.main-content').style.marginLeft = '250px';
        } else {
            sidebar.classList.remove('open');
            document.querySelector('.main-content').style.marginLeft = '0';
        }
    }

    window.addEventListener('resize', checkWindowSize);
    checkWindowSize(); // Verifica o tamanho da janela no carregamento

    openBtn.addEventListener('click', function() {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            document.querySelector('.main-content').style.marginLeft = '0';
        } else {
            sidebar.classList.add('open');
            document.querySelector('.main-content').style.marginLeft = '250px';
        }
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('open');
        document.querySelector('.main-content').style.marginLeft = '0';
    });

    dropdownButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const dropdown = btn.parentElement;
            dropdown.classList.toggle('open');
        });
    });
});

