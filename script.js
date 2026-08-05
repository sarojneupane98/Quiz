let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 15;

// Web Audio API for built-in sound effects
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Unlock browser audio policy on user click
window.addEventListener('click', () => {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}, { once: true });

function playSound(type) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (type === 'correct') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(659.25, audioCtx.currentTime + 0.1, audioCtx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  } else if (type === 'wrong') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  }
}

// Level selection buttons
document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const level = e.target.getAttribute('data-level');
    startQuiz(level);
  });
});

async function startQuiz(level) {
  document.getElementById('startScreen').classList.add('hidden');
  document.getElementById('quiz-card').classList.remove('hidden');
  await loadQuestions(level);
}

// Fetch and filter questions
async function loadQuestions(level) {
  try {
    const res = await fetch('./questions.json');
    const data = await res.json();
    
    const filtered = data.filter(q => !q.level || q.level === level);
    questions = shuffleArray(filtered.length > 0 ? filtered : data);
    
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  } catch (err) {
    console.error('Error loading questions:', err);
    document.getElementById('question-title').innerText = "Failed to load questions.";
  }
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 15;
  updateTimerUI();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerUI() {
  const timerText = document.getElementById('timer-text');
  const progressBar = document.getElementById('progress-bar');
  if (timerText) timerText.innerText = `⏱️ ${timeLeft}s`;
  if (progressBar) {
    const percentage = (timeLeft / 15) * 100;
    progressBar.style.width = `${percentage}%`;
  }
}

function handleTimeout() {
  playSound('wrong');
  disableOptions();
  showFact();
}

function showQuestion() {
  const q = questions[currentQuestionIndex];
  if (!q) return showEndScreen();

  const container = document.getElementById('quiz-card');
  if (container) {
    container.classList.remove('fade-in');
    void container.offsetWidth; // Force CSS reflow
    container.classList.add('fade-in');
  }

  document.getElementById('question-title').innerText = q.question;
  document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
  document.getElementById('score-display').innerText = `Score: ${score}`;
  
  const factBox = document.getElementById('fact-box');
  factBox.style.display = 'none';
  factBox.innerText = '';

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(idx);
    optionsContainer.appendChild(btn);
  });

  startTimer();
}

function selectAnswer(selectedIndex) {
  clearInterval(timer);
  const q = questions[currentQuestionIndex];
  const buttons = document.querySelectorAll('.option-btn');

  // Support numeric index and string matching
  const isCorrect = selectedIndex === q.answer || q.options[selectedIndex] === q.answer || selectedIndex == q.answer;

  if (isCorrect) {
    playSound('correct');
    buttons[selectedIndex].classList.add('correct');
    score += 10;
  } else {
    playSound('wrong');
    buttons[selectedIndex].classList.add('wrong');
    
    // Highlight correct answer
    const correctIdx = typeof q.answer === 'number' ? q.answer : q.options.indexOf(q.answer);
    if (correctIdx !== -1 && buttons[correctIdx]) {
      buttons[correctIdx].classList.add('correct');
    }
  }

  document.getElementById('score-display').innerText = `Score: ${score}`;
  disableOptions();
  showFact();
}

function disableOptions() {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.disabled = true);
}

function showFact() {
  const q = questions[currentQuestionIndex];
  const factBox = document.getElementById('fact-box');
  if (factBox && q.fact) {
    factBox.innerText = q.fact;
    factBox.style.display = 'block';
  }
}

document.getElementById('next-btn').onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showEndScreen();
  }
};

function showEndScreen() {
  clearInterval(timer);
  const card = document.getElementById('quiz-card');
  card.innerHTML = `
    <h2>🎉 Quiz Completed!</h2>
    <p style="margin: 20px 0;">Your Final Score: <strong>${score}</strong> / ${questions.length * 10}</p>
    <button onclick="location.reload()" class="next-btn">Play Again</button>
  `;
}
