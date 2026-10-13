/* ============================================
   ESCAPA DO LABIRINTO DA MENTE — Game Engine
   Desenvolvido por Ryan Costa — Equipa 4EB
   Dia Mundial da Saúde Mental · Outubro 2025
   ============================================ */

// ---- ESTADO DO JOGO ----
const gameState = {
    currentRoom: 0,
    solvedRooms: [],
    startTime: null,
    endTime: null
};

// ---- DADOS DOS DESAFIOS ----
const challenges = [
    // === SALA 1: Sala da Descoberta ===
    {
        title: "🔍 Sala da Descoberta",
        description: "Descobre o que é realmente a saúde mental. Responde corretamente para obter os dígitos do código que abre a porta!",
        type: "code",
        questions: [
            {
                question: "A saúde mental refere-se ao nosso bem-estar...",
                options: [
                    "A) Apenas quando temos uma doença",
                    "B) Emocional, psicológico e social",
                    "C) Físico e desportivo",
                    "D) Financeiro e profissional"
                ],
                correct: 1,
                digit: "4",
                explanation: "A saúde mental engloba o nosso bem-estar emocional, psicológico e social. Afeta como pensamos, sentimos e agimos."
            },
            {
                question: "A saúde mental é importante...",
                options: [
                    "A) Apenas na idade adulta",
                    "B) Só quando estamos doentes",
                    "C) Em todas as fases da vida",
                    "D) Apenas para quem tem problemas"
                ],
                correct: 2,
                digit: "7",
                explanation: "A saúde mental é importante desde a infância e adolescência até à idade adulta — em TODAS as fases da vida."
            },
            {
                question: "Qual destes NÃO é um fator que influencia a saúde mental?",
                options: [
                    "A) Relações familiares",
                    "B) Cor dos olhos",
                    "C) Experiências de vida",
                    "D) Fatores biológicos"
                ],
                correct: 1,
                digit: "2",
                explanation: "A cor dos olhos é uma característica física que não influencia a saúde mental. Já as relações, experiências e biologia sim."
            },
            {
                question: "Segundo a OMS, saúde é...",
                options: [
                    "A) Apenas a ausência de doença",
                    "B) Ter um corpo forte",
                    "C) Um estado de completo bem-estar físico, mental e social",
                    "D) Não precisar de ir ao médico"
                ],
                correct: 2,
                digit: "9",
                explanation: "A OMS define saúde como 'um estado de completo bem-estar físico, mental e social, e não apenas a ausência de doença'."
            }
        ],
        code: "4729"
    },

    // === SALA 2: Sala dos Mitos ===
    {
        title: "🧪 Sala dos Mitos",
        description: "Muitas pessoas acreditam em mitos sobre saúde mental. Consegues distinguir o que é MITO do que é FACTO?",
        type: "truefalse",
        statements: [
            {
                text: "\"Os problemas de saúde mental não afetam jovens — são coisas de adultos.\"",
                answer: "mito",
                explanation: "MITO! 50% das condições de saúde mental começam antes dos 14 anos. Os jovens são especialmente vulneráveis."
            },
            {
                text: "\"Pedir ajuda psicológica é sinal de fraqueza.\"",
                answer: "mito",
                explanation: "MITO! Pedir ajuda é um ato de CORAGEM. Tal como vamos ao médico quando temos dores, devemos procurar ajuda quando a mente precisa."
            },
            {
                text: "\"O exercício físico pode ajudar a melhorar o humor e reduzir a ansiedade.\"",
                answer: "facto",
                explanation: "FACTO! O exercício liberta endorfinas que melhoram o humor. 30 minutos de atividade física podem fazer uma grande diferença."
            },
            {
                text: "\"As pessoas com problemas de saúde mental são perigosas e violentas.\"",
                answer: "mito",
                explanation: "MITO! A grande maioria das pessoas com problemas de saúde mental não são violentas. Este estigma impede muitos de procurar ajuda."
            },
            {
                text: "\"Falar sobre os nossos sentimentos pode ajudar a sentirmo-nos melhor.\"",
                answer: "facto",
                explanation: "FACTO! Expressar o que sentimos reduz a pressão emocional e ajuda-nos a processar os nossos pensamentos."
            }
        ]
    },

    // === SALA 3: Sala dos Sinais ===
    {
        title: "🔎 Sala dos Sinais",
        description: "É importante saber reconhecer sinais de que alguém pode não estar bem. Seleciona todos os sinais de alerta.",
        type: "multiselect",
        instruction: "Seleciona TODOS os sinais que podem indicar que alguém não está bem emocionalmente:",
        options: [
            { text: "Isolar-se dos amigos e da família", correct: true },
            { text: "Gostar de ouvir música", correct: false },
            { text: "Mudanças bruscas de humor", correct: true },
            { text: "Praticar um desporto novo", correct: false },
            { text: "Perder interesse em atividades que antes gostava", correct: true },
            { text: "Dificuldade em dormir ou dormir demasiado", correct: true },
            { text: "Mudar de estilo de roupa", correct: false },
            { text: "Queda repentina no rendimento escolar", correct: true },
            { text: "Falar sobre sentir-se um peso para os outros", correct: true },
            { text: "Irritabilidade constante e sem razão aparente", correct: true }
        ],
        correctCount: 7
    },

    // === SALA 4: Sala da Empatia ===
    {
        title: "💬 Sala da Empatia",
        description: "E se fosse contigo? Lê a situação e escolhe a melhor forma de agir.",
        type: "scenario",
        scenario: {
            context: "O Rui costumava ser o mais participativo da turma. Sentava-se sempre contigo ao almoço e estava sempre a rir. Nas últimas semanas, começou a isolar-se. Come sozinho, já não fala com ninguém, e parece estar constantemente triste. Ontem, reparaste que ele tinha os olhos vermelhos, como se tivesse chorado.",
            questions: [
                {
                    question: "Qual seria a MELHOR primeira abordagem?",
                    options: [
                        "A) Ignorar — provavelmente é só uma fase.",
                        "B) Contar a toda a gente que o Rui anda estranho.",
                        "C) Sentar-te ao pé dele e perguntar simplesmente 'Como estás?'.",
                        "D) Dizer-lhe 'Deixa de ser dramático, alegra-te!'."
                    ],
                    correct: 2,
                    feedback: "✅ Aproximar-te de forma simples e genuína mostra que te importas. Não precisas de ter as respostas — basta estar presente."
                },
                {
                    question: "O Rui responde: 'Estou bem, não é nada.' Mas tu sentes que não está. O que fazes?",
                    options: [
                        "A) Aceitas e nunca mais perguntas.",
                        "B) Insistes até ele contar tudo.",
                        "C) Dizes: 'Tudo bem, mas quero que saibas que podes falar comigo quando quiseres.'",
                        "D) Contas ao grupo de WhatsApp da turma."
                    ],
                    correct: 2,
                    feedback: "✅ Respeitar o tempo do outro enquanto deixas a porta aberta é a melhor atitude. Não forces, mas mostra que estás lá."
                },
                {
                    question: "Se a situação do Rui piorar, a quem poderias pedir ajuda?",
                    options: [
                        "A) Apenas aos seguidores das redes sociais.",
                        "B) A um professor de confiança, ao psicólogo da escola, ou a um familiar do Rui.",
                        "C) A ninguém — prometeste guardar segredo.",
                        "D) Ligas para a polícia imediatamente."
                    ],
                    correct: 1,
                    feedback: "✅ Falar com um adulto de confiança — um professor, o psicólogo da escola, ou um familiar — é a atitude certa. Pedir ajuda NÃO é trair a confiança."
                }
            ]
        }
    },

    // === SALA 5: Sala das Estratégias ===
    {
        title: "🌱 Sala das Estratégias",
        description: "Organiza estas estratégias de cuidar da saúde mental. Arrasta cada estratégia para a categoria correta!",
        type: "categorize",
        instruction: "Classifica cada ação: é uma estratégia SAUDÁVEL ou PREJUDICIAL para a saúde mental?",
        items: [
            { text: "Falar com alguém sobre o que sentes", category: "saudavel", emoji: "💬" },
            { text: "Guardar tudo para ti e fingir que estás bem", category: "prejudicial", emoji: "😶" },
            { text: "Fazer exercício físico regularmente", category: "saudavel", emoji: "🏃" },
            { text: "Passar horas seguidas nas redes sociais a comparar-te", category: "prejudicial", emoji: "📱" },
            { text: "Dormir 7–9 horas por noite", category: "saudavel", emoji: "😴" },
            { text: "Isolar-te completamente dos outros", category: "prejudicial", emoji: "🚪" },
            { text: "Praticar atividades que te dão prazer", category: "saudavel", emoji: "🎨" },
            { text: "Procurar ajuda profissional quando precisas", category: "saudavel", emoji: "🩺" },
            { text: "Usar álcool ou substâncias para esquecer problemas", category: "prejudicial", emoji: "🚫" },
            { text: "Manter rotinas e hábitos organizados", category: "saudavel", emoji: "📅" }
        ]
    },

    // === SALA 6: Sala da Coragem ===
    {
        title: "💚 Sala da Coragem",
        description: "Última porta! Completa a mensagem final respondendo a estas perguntas sobre a importância de pedir ajuda.",
        type: "fillin",
        questions: [
            {
                question: "Completa: \"Pedir ajuda não é sinal de ______, é sinal de ______.\"",
                blanks: ["fraqueza", "coragem"],
                hint: "O oposto de força vs. uma qualidade admirável"
            },
            {
                question: "Completa: \"A saúde ______ é tão importante como a saúde ______.\"",
                blanks: ["mental", "física"],
                hint: "Dois tipos de saúde"
            },
            {
                question: "Completa: \"Não tens de enfrentar tudo ______.\"",
                blanks: ["sozinho"],
                hint: "Sem ninguém ao teu lado"
            }
        ],
        finalMessage: "🌟 Cuidar da saúde mental é cuidar da vida. Falar, ouvir e pedir ajuda são atitudes de coragem."
    }
];

// ---- FUNÇÕES DO JOGO ----

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    screen.classList.add('active');
    screen.style.animation = 'none';
    screen.offsetHeight; // trigger reflow
    screen.style.animation = 'fadeIn 0.6s ease';
}

function startGame() {
    gameState.currentRoom = 0;
    gameState.solvedRooms = [];
    gameState.startTime = Date.now();
    updateMap();
    showScreen('screen-map');
}

function updateMap() {
    const solved = gameState.solvedRooms.length;

    // Update progress bar
    document.getElementById('progressFill').style.width = `${(solved / 6) * 100}%`;
    document.getElementById('progressText').textContent = `${solved} / 6`;

    for (let i = 1; i <= 6; i++) {
        const card = document.getElementById(`room${i}`);
        const status = document.getElementById(`status${i}`);
        const icon = card.querySelector('.room-icon');

        card.classList.remove('locked', 'solved');

        if (gameState.solvedRooms.includes(i)) {
            card.classList.add('solved');
            icon.textContent = '✅';
            status.textContent = 'Resolvida!';
        } else if (i <= solved + 1) {
            // Desbloqueada
            icon.textContent = '🔓';
            status.textContent = 'Disponível';
        } else {
            card.classList.add('locked');
            icon.textContent = '🔒';
            status.textContent = 'Trancada';
        }
    }
}

function openRoom(roomNum) {
    if (roomNum > gameState.solvedRooms.length + 1) return;
    if (gameState.solvedRooms.includes(roomNum)) return;

    gameState.currentRoom = roomNum;
    const challenge = challenges[roomNum - 1];

    document.getElementById('challengeRoomNumber').textContent = roomNum;
    document.getElementById('challengeTitle').textContent = challenge.title;
    document.getElementById('challengeDescription').textContent = challenge.description;
    document.getElementById('challengeFeedback').innerHTML = '';

    const content = document.getElementById('challengeContent');

    switch (challenge.type) {
        case 'code':
            renderCodeChallenge(content, challenge);
            break;
        case 'truefalse':
            renderTrueFalseChallenge(content, challenge);
            break;
        case 'multiselect':
            renderMultiSelectChallenge(content, challenge);
            break;
        case 'scenario':
            renderScenarioChallenge(content, challenge);
            break;
        case 'categorize':
            renderCategorizeChallenge(content, challenge);
            break;
        case 'fillin':
            renderFillInChallenge(content, challenge);
            break;
    }

    showScreen('screen-challenge');
}

function backToMap() {
    showScreen('screen-map');
}

function solveRoom(roomNum) {
    if (!gameState.solvedRooms.includes(roomNum)) {
        gameState.solvedRooms.push(roomNum);
    }

    if (gameState.solvedRooms.length === 6) {
        gameState.endTime = Date.now();
        setTimeout(() => showVictory(), 2000);
    } else {
        setTimeout(() => {
            updateMap();
            showScreen('screen-map');
        }, 2500);
    }
}

function showVictory() {
    const elapsed = Math.floor((gameState.endTime - gameState.startTime) / 1000);
    const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const secs = (elapsed % 60).toString().padStart(2, '0');

    document.getElementById('statTime').textContent = `${mins}:${secs}`;
    updateMap();
    showScreen('screen-victory');
}

function restartGame() {
    gameState.solvedRooms = [];
    gameState.currentRoom = 0;
    gameState.startTime = null;
    gameState.endTime = null;
    showScreen('screen-start');
}

// ---- RENDERIZADORES DE DESAFIOS ----

// === SALA 1: Código ===
function renderCodeChallenge(container, challenge) {
    let html = '';
    challenge._answered = 0;
    challenge._digits = ['', '', '', ''];

    challenge.questions.forEach((q, i) => {
        html += `
            <div class="challenge-question" id="codeQ${i}">
                <h3>Pergunta ${i + 1}</h3>
                <p>${q.question}</p>
                <div style="margin-top: 12px;">
                    ${q.options.map((opt, j) => `
                        <button class="btn-option" id="codeOpt${i}_${j}" 
                                onclick="answerCodeQuestion(${i}, ${j})">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
                <div id="codeExpl${i}" class="info-box success" style="display:none;"></div>
            </div>
        `;
    });

    html += `
        <div style="margin-top: 30px; text-align: center;">
            <h3 style="margin-bottom: 15px; color: var(--secondary);">🔐 Código da Porta</h3>
            <p style="color: var(--text-light); margin-bottom: 15px;">Introduz os 4 dígitos que descobriste:</p>
            <div class="code-input-container">
                <input type="text" class="code-digit" id="digit0" maxlength="1" oninput="moveToNext(0)" disabled>
                <input type="text" class="code-digit" id="digit1" maxlength="1" oninput="moveToNext(1)" disabled>
                <input type="text" class="code-digit" id="digit2" maxlength="1" oninput="moveToNext(2)" disabled>
                <input type="text" class="code-digit" id="digit3" maxlength="1" oninput="moveToNext(3)" disabled>
            </div>
            <button class="btn btn-success" id="btnCheckCode" onclick="checkCode()" style="margin-top: 20px; display: none;">
                <span class="btn-icon">🔓</span> Abrir Porta
            </button>
        </div>
    `;

    container.innerHTML = html;
    window._codeChallenge = challenge;
}

function answerCodeQuestion(qIndex, optIndex) {
    const challenge = window._codeChallenge;
    const q = challenge.questions[qIndex];
    const buttons = document.querySelectorAll(`[id^="codeOpt${qIndex}_"]`);

    buttons.forEach((btn, j) => {
        btn.disabled = true;
        if (j === q.correct) btn.classList.add('correct');
        else if (j === optIndex && j !== q.correct) btn.classList.add('wrong');
    });

    const expl = document.getElementById(`codeExpl${qIndex}`);
    expl.style.display = 'block';
    expl.innerHTML = `<strong>${optIndex === q.correct ? '✅ Correto!' : '❌ Incorreto!'}</strong><br>${q.explanation}<br><br>Dígito descoberto: <strong style="font-size: 1.3em; color: var(--primary);">${q.digit}</strong>`;

    if (optIndex === q.correct) {
        challenge._digits[qIndex] = q.digit;
        document.getElementById(`digit${qIndex}`).value = q.digit;
    }

    challenge._answered++;

    if (challenge._answered === 4) {
        for (let i = 0; i < 4; i++) {
            document.getElementById(`digit${i}`).disabled = false;
        }
        document.getElementById('btnCheckCode').style.display = 'inline-flex';
    }
}

function moveToNext(index) {
    const current = document.getElementById(`digit${index}`);
    current.value = current.value.replace(/[^0-9]/g, '');
    if (current.value && index < 3) {
        document.getElementById(`digit${index + 1}`).focus();
    }
}

function checkCode() {
    const challenge = window._codeChallenge;
    let entered = '';
    for (let i = 0; i < 4; i++) {
        entered += document.getElementById(`digit${i}`).value;
    }

    const feedback = document.getElementById('challengeFeedback');

    if (entered === challenge.code) {
        feedback.innerHTML = `
            <div class="feedback-message success">
                🎉 Código correto! A porta está aberta!<br>
                <small>A saúde mental é o nosso bem-estar emocional, psicológico e social.</small>
            </div>
        `;
        solveRoom(1);
    } else {
        feedback.innerHTML = `
            <div class="feedback-message error">
                ❌ Código incorreto. Revê as tuas respostas!
            </div>
        `;
    }
}

// === SALA 2: Mito ou Facto ===
function renderTrueFalseChallenge(container, challenge) {
    let html = '';
    challenge._score = 0;
    challenge._answered = 0;

    challenge.statements.forEach((s, i) => {
        html += `
            <div class="challenge-question" id="tfQ${i}">
                <h3>Afirmação ${i + 1} de ${challenge.statements.length}</h3>
                <p style="font-style: italic; font-size: 1.1rem;">${s.text}</p>
                <div style="margin-top: 15px; display: flex; gap: 10px;">
                    <button class="btn-option" style="flex: 1; text-align: center;" 
                            id="tfMito${i}" onclick="answerTF(${i}, 'mito')">
                        ❌ MITO
                    </button>
                    <button class="btn-option" style="flex: 1; text-align: center;" 
                            id="tfFacto${i}" onclick="answerTF(${i}, 'facto')">
                        ✅ FACTO
                    </button>
                </div>
                <div id="tfExpl${i}" class="info-box success" style="display:none;"></div>
            </div>
        `;
    });

    container.innerHTML = html;
    window._tfChallenge = challenge;
}

function answerTF(index, answer) {
    const challenge = window._tfChallenge;
    const s = challenge.statements[index];
    const isCorrect = answer === s.answer;

    document.getElementById(`tfMito${index}`).disabled = true;
    document.getElementById(`tfFacto${index}`).disabled = true;

    if (s.answer === 'mito') {
        document.getElementById(`tfMito${index}`).classList.add('correct');
        if (answer === 'facto') document.getElementById(`tfFacto${index}`).classList.add('wrong');
    } else {
        document.getElementById(`tfFacto${index}`).classList.add('correct');
        if (answer === 'mito') document.getElementById(`tfMito${index}`).classList.add('wrong');
    }

    if (isCorrect) challenge._score++;
    challenge._answered++;

    const expl = document.getElementById(`tfExpl${index}`);
    expl.style.display = 'block';
    expl.innerHTML = `<strong>${isCorrect ? '✅ Correto!' : '❌ Incorreto!'}</strong><br>${s.explanation}`;

    if (challenge._answered === challenge.statements.length) {
        const feedback = document.getElementById('challengeFeedback');
        if (challenge._score >= 4) {
            feedback.innerHTML = `
                <div class="feedback-message success">
                    🎉 Excelente! Acertaste ${challenge._score}/${challenge.statements.length}! Porta aberta!
                </div>
            `;
            solveRoom(2);
        } else {
            feedback.innerHTML = `
                <div class="feedback-message error">
                    Acertaste apenas ${challenge._score}/${challenge.statements.length}. Precisas de pelo menos 4. 
                    <br><button class="btn btn-primary" style="margin-top: 15px;" onclick="openRoom(2)">🔄 Tentar novamente</button>
                </div>
            `;
        }
    }
}

// === SALA 3: Multi Select ===
function renderMultiSelectChallenge(container, challenge) {
    let html = `
        <div class="challenge-question">
            <h3>Desafio</h3>
            <p>${challenge.instruction}</p>
        </div>
        <div class="info-box">
            💡 <strong>Dica:</strong> Existem <strong>${challenge.correctCount}</strong> sinais de alerta na lista. Seleciona todos e clica em "Verificar".
        </div>
    `;

    challenge.options.forEach((opt, i) => {
        html += `
            <button class="btn-option" id="msOpt${i}" onclick="toggleMultiSelect(${i})">
                <span id="msCheck${i}" style="margin-right: 8px;">⬜</span> ${opt.text}
            </button>
        `;
    });

    html += `
        <div style="text-align: center; margin-top: 20px;">
            <button class="btn btn-success" onclick="checkMultiSelect()">
                <span class="btn-icon">✅</span> Verificar Seleção
            </button>
        </div>
    `;

    container.innerHTML = html;
    window._msChallenge = challenge;
    window._msSelected = [];
}

function toggleMultiSelect(index) {
    const idx = window._msSelected.indexOf(index);
    const check = document.getElementById(`msCheck${index}`);
    const btn = document.getElementById(`msOpt${index}`);

    if (idx > -1) {
        window._msSelected.splice(idx, 1);
        check.textContent = '⬜';
        btn.classList.remove('selected');
    } else {
        window._msSelected.push(index);
        check.textContent = '✅';
        btn.classList.add('selected');
    }
}

function checkMultiSelect() {
    const challenge = window._msChallenge;
    const selected = window._msSelected;
    let correct = 0;
    let wrong = 0;

    challenge.options.forEach((opt, i) => {
        const btn = document.getElementById(`msOpt${i}`);
        btn.disabled = true;

        if (opt.correct && selected.includes(i)) {
            btn.classList.add('correct');
            correct++;
        } else if (opt.correct && !selected.includes(i)) {
            btn.style.borderColor = 'var(--warning)';
            btn.style.opacity = '0.7';
        } else if (!opt.correct && selected.includes(i)) {
            btn.classList.add('wrong');
            wrong++;
        }
    });

    const feedback = document.getElementById('challengeFeedback');

    if (correct >= 6 && wrong <= 1) {
        feedback.innerHTML = `
            <div class="feedback-message success">
                🎉 Muito bem! Identificaste ${correct} dos ${challenge.correctCount} sinais! Porta aberta!<br>
                <small>Reconhecer estes sinais pode ajudar-te a apoiar alguém que precise.</small>
            </div>
        `;
        solveRoom(3);
    } else {
        feedback.innerHTML = `
            <div class="feedback-message error">
                Identificaste ${correct}/${challenge.correctCount} sinais com ${wrong} erros. Tenta novamente!
                <br><button class="btn btn-primary" style="margin-top: 15px;" onclick="openRoom(3)">🔄 Tentar novamente</button>
            </div>
        `;
    }
}

// === SALA 4: Cenário ===
function renderScenarioChallenge(container, challenge) {
    const scenario = challenge.scenario;

    let html = `
        <div class="challenge-question">
            <h3>📖 A Situação</h3>
            <p style="line-height: 1.8;">${scenario.context}</p>
        </div>
    `;

    challenge._scenarioScore = 0;
    challenge._scenarioAnswered = 0;

    scenario.questions.forEach((q, i) => {
        html += `
            <div class="challenge-question" id="scQ${i}" ${i > 0 ? 'style="display:none;"' : ''}>
                <h3>Pergunta ${i + 1}</h3>
                <p>${q.question}</p>
                <div style="margin-top: 12px;">
                    ${q.options.map((opt, j) => `
                        <button class="btn-option" id="scOpt${i}_${j}" 
                                onclick="answerScenario(${i}, ${j})">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
                <div id="scFeedback${i}" class="info-box success" style="display:none;"></div>
            </div>
        `;
    });

    container.innerHTML = html;
    window._scChallenge = challenge;
}

function answerScenario(qIndex, optIndex) {
    const challenge = window._scChallenge;
    const q = challenge.scenario.questions[qIndex];
    const isCorrect = optIndex === q.correct;

    const buttons = document.querySelectorAll(`[id^="scOpt${qIndex}_"]`);
    buttons.forEach((btn, j) => {
        btn.disabled = true;
        if (j === q.correct) btn.classList.add('correct');
        else if (j === optIndex && !isCorrect) btn.classList.add('wrong');
    });

    if (isCorrect) challenge._scenarioScore++;
    challenge._scenarioAnswered++;

    const fb = document.getElementById(`scFeedback${qIndex}`);
    fb.style.display = 'block';
    fb.innerHTML = q.feedback;

    // Show next question or finish
    setTimeout(() => {
        const next = qIndex + 1;
        if (next < challenge.scenario.questions.length) {
            document.getElementById(`scQ${next}`).style.display = 'block';
            document.getElementById(`scQ${next}`).scrollIntoView({ behavior: 'smooth' });
        } else {
            const feedback = document.getElementById('challengeFeedback');
            if (challenge._scenarioScore >= 2) {
                feedback.innerHTML = `
                    <div class="feedback-message success">
                        🎉 Mostraste empatia e bom julgamento! Acertaste ${challenge._scenarioScore}/3. Porta aberta!<br>
                        <small>Lembra-te: estar presente e ouvir sem julgar pode fazer toda a diferença.</small>
                    </div>
                `;
                solveRoom(4);
            } else {
                feedback.innerHTML = `
                    <div class="feedback-message error">
                        Acertaste ${challenge._scenarioScore}/3. Reflete um pouco mais e tenta novamente.
                        <br><button class="btn btn-primary" style="margin-top: 15px;" onclick="openRoom(4)">🔄 Tentar novamente</button>
                    </div>
                `;
            }
        }
    }, 1000);
}

// === SALA 5: Categorizar ===
function renderCategorizeChallenge(container, challenge) {
    let html = `
        <div class="challenge-question">
            <h3>Desafio</h3>
            <p>${challenge.instruction}</p>
        </div>
        <div class="info-box">
            💡 Clica em cada ação para a classificar como <strong style="color: var(--success);">SAUDÁVEL</strong> ou 
            <strong style="color: var(--danger);">PREJUDICIAL</strong>.
        </div>
    `;

    // Shuffle items
    const shuffled = [...challenge.items].sort(() => Math.random() - 0.5);
    window._catItems = shuffled;
    window._catAnswers = {};

    shuffled.forEach((item, i) => {
        html += `
            <div class="match-item" id="catItem${i}" style="justify-content: space-between;">
                <span>${item.emoji} ${item.text}</span>
                <div style="display: flex; gap: 8px;" id="catBtns${i}">
                    <button class="btn" style="padding: 6px 14px; font-size: 0.85rem; background: rgba(68, 207, 108, 0.15); 
                            color: var(--success); border: 1px solid rgba(68, 207, 108, 0.3);"
                            onclick="categorize(${i}, 'saudavel')">
                        Saudável
                    </button>
                    <button class="btn" style="padding: 6px 14px; font-size: 0.85rem; background: rgba(255, 107, 107, 0.15); 
                            color: var(--danger); border: 1px solid rgba(255, 107, 107, 0.3);"
                            onclick="categorize(${i}, 'prejudicial')">
                        Prejudicial
                    </button>
                </div>
            </div>
        `;
    });

    html += `
        <div style="text-align: center; margin-top: 25px;">
            <button class="btn btn-success" id="btnCheckCat" onclick="checkCategories()" style="display: none;">
                <span class="btn-icon">✅</span> Verificar Respostas
            </button>
        </div>
    `;

    container.innerHTML = html;
}

function categorize(index, category) {
    window._catAnswers[index] = category;
    const item = document.getElementById(`catItem${index}`);
    const btns = document.getElementById(`catBtns${index}`);

    item.classList.add('selected');
    btns.innerHTML = `<span style="font-weight: 700; color: ${category === 'saudavel' ? 'var(--success)' : 'var(--danger)'};">
        ${category === 'saudavel' ? '✅ Saudável' : '❌ Prejudicial'}
    </span>`;

    // Check if all answered
    if (Object.keys(window._catAnswers).length === window._catItems.length) {
        document.getElementById('btnCheckCat').style.display = 'inline-flex';
    }
}

function checkCategories() {
    let correct = 0;
    const items = window._catItems;
    const answers = window._catAnswers;

    items.forEach((item, i) => {
        const el = document.getElementById(`catItem${i}`);
        el.classList.remove('selected');

        if (answers[i] === item.category) {
            el.classList.add('matched');
            correct++;
        } else {
            el.style.borderColor = 'var(--danger)';
            el.style.background = 'rgba(255, 107, 107, 0.08)';
        }
    });

    const feedback = document.getElementById('challengeFeedback');

    if (correct >= 8) {
        feedback.innerHTML = `
            <div class="feedback-message success">
                🎉 Excelente! Classificaste ${correct}/${items.length} corretamente! Porta aberta!<br>
                <small>Saber distinguir hábitos saudáveis de prejudiciais é essencial para cuidar da mente.</small>
            </div>
        `;
        solveRoom(5);
    } else {
        feedback.innerHTML = `
            <div class="feedback-message error">
                Classificaste ${correct}/${items.length} corretamente. Precisas de pelo menos 8.
                <br><button class="btn btn-primary" style="margin-top: 15px;" onclick="openRoom(5)">🔄 Tentar novamente</button>
            </div>
        `;
    }
}

// === SALA 6: Completar Frases ===
function renderFillInChallenge(container, challenge) {
    let html = '';
    challenge._fillScore = 0;
    challenge._fillAnswered = 0;

    challenge.questions.forEach((q, i) => {
        html += `
            <div class="challenge-question" id="fillQ${i}">
                <h3>Frase ${i + 1}</h3>
                <p style="font-size: 1.1rem;">${q.question}</p>
                <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 8px;">💡 Dica: ${q.hint}</p>
                <div style="margin-top: 15px; display: flex; flex-wrap: wrap; gap: 10px; align-items: center;">
                    ${q.blanks.map((_, j) => `
                        <input type="text" id="fill${i}_${j}" 
                               class="code-digit" 
                               style="width: 150px; height: 45px; font-size: 1rem; text-transform: lowercase;"
                               placeholder="...">
                    `).join('<span style="color: var(--text-light);">&</span>')}
                    <button class="btn btn-primary" style="padding: 10px 18px;" onclick="checkFillIn(${i})">Verificar</button>
                </div>
                <div id="fillFb${i}" class="info-box success" style="display: none;"></div>
            </div>
        `;
    });

    html += `
        <div id="finalMessageBox" style="display: none; text-align: center; margin-top: 30px;">
            <div class="victory-quote">
                <p style="font-size: 1.2rem;">${challenge.finalMessage}</p>
            </div>
        </div>
    `;

    container.innerHTML = html;
    window._fillChallenge = challenge;
}

function checkFillIn(qIndex) {
    const challenge = window._fillChallenge;
    const q = challenge.questions[qIndex];
    let allCorrect = true;

    q.blanks.forEach((blank, j) => {
        const input = document.getElementById(`fill${qIndex}_${j}`);
        const value = input.value.trim().toLowerCase();

        if (value === blank.toLowerCase()) {
            input.style.borderColor = 'var(--success)';
            input.style.color = 'var(--success)';
        } else {
            input.style.borderColor = 'var(--danger)';
            input.style.color = 'var(--danger)';
            allCorrect = false;
        }
        input.disabled = true;
    });

    const fb = document.getElementById(`fillFb${qIndex}`);
    fb.style.display = 'block';

    if (allCorrect) {
        fb.innerHTML = '✅ Correto! Excelente!';
        challenge._fillScore++;
    } else {
        fb.innerHTML = `❌ A resposta correta era: <strong>"${q.blanks.join('" e "')}"</strong>`;
    }

    challenge._fillAnswered++;

    if (challenge._fillAnswered === challenge.questions.length) {
        const feedback = document.getElementById('challengeFeedback');

        document.getElementById('finalMessageBox').style.display = 'block';

        if (challenge._fillScore >= 2) {
            feedback.innerHTML = `
                <div class="feedback-message success">
                    🎉 Completaste a última sala! A porta final está aberta!<br>
                    <strong>Parabéns — escapaste do Labirinto da Mente!</strong>
                </div>
            `;
            solveRoom(6);
        } else {
            feedback.innerHTML = `
                <div class="feedback-message error">
                    Acertaste ${challenge._fillScore}/${challenge.questions.length}. Precisas de pelo menos 2.
                    <br><button class="btn btn-primary" style="margin-top: 15px;" onclick="openRoom(6)">🔄 Tentar novamente</button>
                </div>
            `;
        }
    }
}

// ---- INICIALIZAÇÃO ----
document.addEventListener('DOMContentLoaded', () => {
    showScreen('screen-start');
});