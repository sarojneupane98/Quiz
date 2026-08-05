let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 15;

// Web Audio API for built-in sound effects
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (type === 'correct') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, audioCtx.currentTime + 0.1, audioCtx.currentTime + 0.2); // E5
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

// Fetch & shuffle questions
async function loadQuestions() {
  try {
    const res = await fetch('./questions.json');
    const data = await res.json();
    questions = shuffleArray(data);
    showQuestion();
  } catch (err) {
    console.error('Error loading questions:', err);
  }
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
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
  if (timerText) timerText.innerText = `${timeLeft}s`;
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
    void container.offsetWidth; // Trigger CSS reflow
    container.classList.add('fade-in');
  }

  document.getElementById('question-title').innerText = q.question;
  document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
  document.getElementById('score-display').innerText = `Score: ${score}`;
  document.getElementById('fact-box').style.display = 'none';

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

  if (selectedIndex === q.answer) {
    playSound('correct');
    buttons[selectedIndex].classList.add('correct');
    score += 10;
  } else {
    playSound('wrong');
    buttons[selectedIndex].classList.add('wrong');
    buttons[q.answer].classList.add('correct');
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
    <p>Your Final Score: <strong>${score}</strong> / ${questions.length * 10}</p>
    <button onclick="location.reload()" class="next-btn">Play Again</button>
  `;
}

// Start quiz on load
loadQuestions();
