/* ======================
   QUIZ DATA (LEVELS)
====================== */
const quizData = {
  easy: [
    {
      type: "mcq",
      question: "Which of these is NOT a basic part of a computer system?",
      options: ["Monitor", "Keyboard", "Power Plug", "System Unit"],
      answer: 2,
      explanation: "A power plug is an accessory; the four basic parts are keyboard, mouse, monitor, and system unit."
    },
    {
      type: "truefalse",
      question: "The word 'Computer' is derived from a Latin word meaning 'to calculate'.",
      answer: true,
      explanation: "It comes from the Latin word 'COMPUTARE'."
    },
    {
      type: "mcq",
      question: "What is the smallest unit of data in a computer?",
      options: ["Byte", "Nibble", "Bit", "Kilobyte"],
      answer: 2,
      explanation: "A bit (0 or 1) is the smallest measurement unit."
    },
    {
      type: "mcq",
      question: "In MS-Paint, which tool is used to erase parts of a drawing?",
      options: ["Pencil", "Eraser", "Brush", "Magnifier"],
      answer: 1,
      explanation: "The Eraser tool is specifically designed to remove portions of a drawing."
    },
    {
      type: "truefalse",
      question: "A computer can work without electricity.",
      answer: false,
      explanation: "A computer is an electronic machine that requires power to operate."
    },
    {
      type: "mcq",
      question: "How many bits make up one nibble?",
      options: ["2 bits", "4 bits", "8 bits", "16 bits"],
      answer: 1,
      explanation: "A collection of 4 bits is called a nibble."
    },
    {
      type: "mcq",
      question: "Which part of the computer is known as its 'brain'?",
      options: ["Monitor", "CPU", "RAM", "Hard Disk"],
      answer: 1,
      explanation: "The CPU (Central Processing Unit) performs all processing operations."
    },
    {
      type: "truefalse",
      question: "GIGO stands for Garbage In, Garbage Out.",
      answer: true,
      explanation: "This means if you give wrong input, the computer produces a wrong output."
    },
    {
      type: "mcq",
      question: "Which number system uses only two digits, 0 and 1?",
      options: ["Decimal", "Octal", "Hexadecimal", "Binary"],
      answer: 3,
      explanation: "The binary system has base 2 and uses only 0 and 1."
    },
    {
      type: "mcq",
      question: "What is the base of the Decimal number system?",
      options: ["2", "8", "10", "16"],
      answer: 2,
      explanation: "Decimal system uses 10 digits (0-9)."
    },
    {
      type: "truefalse",
      question: "Computers have feelings and emotions.",
      answer: false,
      explanation: "Computers are machines and lack human emotions or intelligence."
    },
    {
      type: "mcq",
      question: "Which software is used for drawing in Windows?",
      options: ["MS-Word", "MS-Excel", "MS-Paint", "MS-PowerPoint"],
      answer: 2,
      explanation: "MS-Paint is a common drawing and painting program."
    },
    {
      type: "mcq",
      question: "ICT stands for:",
      options: ["Internal Computer Task", "Information and Communication Technology", "International Computing Trust", "Integrated Circuit Tool"],
      answer: 1,
      explanation: "ICT refers to technologies used for processing and communicating information."
    },
    {
      type: "truefalse",
      question: "1024 Kilobytes is equal to 1 Megabyte.",
      answer: true,
      explanation: "The standard measurement for 1MB is 1024KB."
    },
    {
      type: "mcq",
      question: "In MS-Paint, which tool fills an entire closed shape with color?",
      options: ["Pencil", "Fill with color", "Pick color", "Airbrush"],
      answer: 1,
      explanation: "The 'Fill with color' tool is used to color selected portions of a figure."
    },
    {
      type: "mcq",
      question: "Which is a 'High Level Language'?",
      options: ["Machine Language", "Assembly Language", "QBASIC", "Binary Code"],
      answer: 2,
      explanation: "QBASIC is a high-level language easy for humans to read."
    },
    {
      type: "truefalse",
      question: "A person who develops computer programs is called a programmer.",
      answer: true,
      explanation: "Programming is the process, and the person doing it is the programmer."
    },
    {
      type: "mcq",
      question: "Which key is used to start the 'Run' dialog box?",
      options: ["Ctrl + R", "Alt + R", "Windows + R", "Shift + R"],
      answer: 2,
      explanation: "Windows + R is the shortcut to open the Run box."
    },
    {
      type: "mcq",
      question: "What is the result of adding 0 + 0 in binary?",
      options: ["0", "1", "10", "2"],
      answer: 0,
      explanation: "In binary arithmetic, 0 + 0 = 0."
    },
    {
      type: "truefalse",
      question: "Hardware refers to the physical parts of a computer.",
      answer: true,
      explanation: "Hardware includes everything you can touch, like the monitor and keyboard."
    },
    {
      type: "mcq",
      question: "Which device is an output device?",
      options: ["Keyboard", "Mouse", "Scanner", "Monitor"],
      answer: 3,
      explanation: "A monitor displays the processed information as output."
    },
    {
      type: "mcq",
      question: "The binary digit 1 represents which electrical state?",
      options: ["OFF", "ON", "Low", "Neutral"],
      answer: 1,
      explanation: "In computer logic, 1 means ON and 0 means OFF."
    },
    {
      type: "truefalse",
      question: "A computer can work without an Operating System.",
      answer: false,
      explanation: "The OS is the platform that allows hardware and software to interact."
    },
    {
      type: "mcq",
      question: "Which tool allows you to see a larger view of your drawing in MS-Paint?",
      options: ["Pencil", "Eraser", "Magnifier", "Text tool"],
      answer: 2,
      explanation: "The Magnifier is used to zoom in on specific parts."
    },
    {
      type: "mcq",
      question: "Which language is also called '1GL' (First Generation Language)?",
      options: ["Assembly", "Machine", "QBASIC", "Java"],
      answer: 1,
      explanation: "Machine language is the most basic, 1st generation language."
    }
  ],

  medium: [
    {
      type: "mcq",
      question: "Which number system uses the digits 0-7?",
      options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
      answer: 1,
      explanation: "The Octal system has base 8 and uses digits 0 through 7."
    },
    {
      type: "truefalse",
      question: "High-level languages are machine-dependent.",
      answer: false,
      explanation: "High-level languages are machine-independent; low-level ones are dependent."
    },
    {
      type: "mcq",
      question: "In Hexadecimal, what letter represents the number 10?",
      options: ["A", "B", "C", "F"],
      answer: 0,
      explanation: "Hexadecimal uses A=10, B=11, ..., F=15."
    },
    {
      type: "mcq",
      question: "Which translator converts a high-level program into machine code line by line?",
      options: ["Compiler", "Assembler", "Interpreter", "Editor"],
      answer: 2,
      explanation: "An interpreter translates and executes code one line at a time."
    },
    {
      type: "truefalse",
      question: "Assembly language uses 'mnemonics' like ADD and SUB.",
      answer: true,
      explanation: "Mnemonics are shorter form instructions that replace binary codes."
    },
    {
      type: "mcq",
      question: "What is the measurement of 1 Gigabyte?",
      options: ["1024 Bytes", "1024 Kilobytes", "1024 Megabytes", "1024 Terabytes"],
      answer: 2,
      explanation: "1 GB = 1024 MB."
    },
    {
      type: "mcq",
      question: "Which MS-Paint tool is used to pick a color from one part of a picture to use it elsewhere?",
      options: ["Fill with color", "Color picker", "Brushes", "Shapes"],
      answer: 1,
      explanation: "The 'Pick color' tool selects a color from an existing image."
    },
    {
      type: "truefalse",
      question: "Computers in ICU are used for monitoring patients.",
      answer: true,
      explanation: "Hospitals use specialized computers for real-time patient health tracking."
    },
    {
      type: "mcq",
      question: "The process of writing instructions in a programming language is called:",
      options: ["Processing", "Computing", "Programming", "Compiling"],
      answer: 2,
      explanation: "Writing code in a specific language is defined as computer programming."
    },
    {
      type: "mcq",
      question: "What is the binary equivalent of the decimal number 2?",
      options: ["1", "10", "11", "100"],
      answer: 1,
      explanation: "Decimal 2 converted to binary is 10."
    },
    {
      type: "truefalse",
      question: "1 nanosecond is one-billionth of a second.",
      answer: true,
      explanation: "Speed is measured in milliseconds, microseconds, nanoseconds, and picoseconds."
    },
    {
      type: "mcq",
      question: "Which file extension is common for computer graphics?",
      options: [".exe", ".txt", ".jpg", ".doc"],
      answer: 2,
      explanation: ".jpg (Joint Photographic Experts Group) is a standard image format."
    },
    {
      type: "mcq",
      question: "Who developed the QBASIC programming language?",
      options: ["Apple", "Microsoft", "Google", "IBM"],
      answer: 1,
      explanation: "Microsoft Corporation developed QBASIC in 1985."
    },
    {
      type: "truefalse",
      question: "A bit consists of two nibbles.",
      answer: false,
      explanation: "Actually, a nibble is 4 bits, and a byte (8 bits) consists of two nibbles."
    },
    {
      type: "mcq",
      question: "Which type of software is an Operating System?",
      options: ["Application Software", "System Software", "Utility Software", "Malware"],
      answer: 1,
      explanation: "An OS is system software that manages hardware resources."
    },
    {
      type: "mcq",
      question: "Which number system has a base of 16?",
      options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
      answer: 3,
      explanation: "Hexadecimal uses digits 0-9 and letters A-F (base 16)."
    },
    {
      type: "truefalse",
      question: "The 'Select' tool in MS-Paint can only select rectangular areas.",
      answer: false,
      explanation: "There is both 'Select' (rectangular) and 'Free-form select'."
    },
    {
      type: "mcq",
      question: "What does BASIC stand for?",
      options: ["Beginners All Purpose Symbolic Instruction Code", "Binary Apple Software Instruction Center", "Basic Academic Science in Computers", "Business And Statistical Information Center"],
      answer: 0,
      explanation: "It was developed as a simple code for beginners."
    },
    {
      type: "mcq",
      question: "Telecommunication is the transmission of messages over:",
      options: ["A short distance", "A significant distance", "Only through wires", "Only through air"],
      answer: 1,
      explanation: "It involves moving messages over long distances via various mediums."
    },
    {
      type: "truefalse",
      question: "An Assembler is a type of language processor.",
      answer: true,
      explanation: "Assemblers, Compilers, and Interpreters are all language processors."
    },
    {
      type: "mcq",
      question: "In binary addition, what is 1 + 1?",
      options: ["1", "2", "10", "11"],
      answer: 2,
      explanation: "1 + 1 equals 10 in binary (0 with a carry of 1)."
    },
    {
      type: "mcq",
      question: "Which area in MS-Paint is used for drawing and coloring?",
      options: ["Ribbon", "Title bar", "Status bar", "Canvas"],
      answer: 3,
      explanation: "The white blank space is called the drawing area or Canvas."
    },
    {
      type: "truefalse",
      question: "Computer graphics can only be created with specialized hardware.",
      answer: false,
      explanation: "They require both special hardware and software (like MS-Paint)."
    },
    {
      type: "mcq",
      question: "Which of these is a Nepalese online payment gateway?",
      options: ["PayPal", "eSewa", "Stripe", "Venmo"],
      answer: 1,
      explanation: "eSewa and Khalti are reliable online payment providers in Nepal."
    },
    {
      type: "mcq",
      question: "What is the result of 1 - 0 in binary subtraction?",
      options: ["0", "1", "10", "Error"],
      answer: 1,
      explanation: "1 - 0 = 1 in binary."
    }
  ],

  hard: [
    {
      type: "mcq",
      question: "Convert the binary number 101 to decimal.",
      options: ["3", "4", "5", "6"],
      answer: 2,
      explanation: "(1*2^2) + (0*2^1) + (1*2^0) = 4 + 0 + 1 = 5."
    },
    {
      type: "truefalse",
      question: "The processing speed of a computer is close to the speed of light.",
      answer: true,
      explanation: "Computers can perform millions of instructions in a single second."
    },
    {
      type: "mcq",
      question: "Which generation of language is Assembly Language?",
      options: ["1GL", "2GL", "3GL", "4GL"],
      answer: 1,
      explanation: "Machine code is 1GL; Assembly is 2GL."
    },
    {
      type: "mcq",
      question: "Which translator converts the entire high-level program into machine code at once?",
      options: ["Interpreter", "Compiler", "Assembler", "Linker"],
      answer: 1,
      explanation: "A compiler translates the whole program before execution."
    },
    {
      type: "truefalse",
      question: "Low-level languages require a programmer to know the processor's architecture.",
      answer: true,
      explanation: "Low-level languages are machine-dependent and tied to hardware structure."
    },
    {
      type: "mcq",
      question: "In binary addition, 1 + 1 + 1 equals:",
      options: ["10", "11", "21", "111"],
      answer: 1,
      explanation: "1 + 1 + 1 equals 11 (1 with a carry of 1)."
    },
    {
      type: "mcq",
      question: "What is the decimal value of the Hexadecimal digit 'F'?",
      options: ["10", "14", "15", "16"],
      answer: 2,
      explanation: "A=10, B=11, C=12, D=13, E=14, F=15."
    },
    {
      type: "truefalse",
      question: "QBASIC is a machine-dependent language.",
      answer: false,
      explanation: "QBASIC is a high-level language, which is machine-independent."
    },
    {
      type: "mcq",
      question: "Which measurement unit is 1/1,000,000,000,000th of a second?",
      options: ["Microsecond", "Nanosecond", "Picosecond", "Millisecond"],
      answer: 2,
      explanation: "A picosecond is 1 trillionth of a second."
    },
    {
      type: "mcq",
      question: "What is the binary result of 10 - 1?",
      options: ["0", "1", "10", "11"],
      answer: 1,
      explanation: "In binary, 2 - 1 = 1, represented as 10 - 1 = 1."
    },
    {
      type: "truefalse",
      question: "A computer program is a set of instructions telling the computer what to do.",
      answer: true,
      explanation: "This is the fundamental definition of software or a program."
    },
    {
      type: "mcq",
      question: "Who developed the first decimal number system in the 5th century?",
      options: ["Greek Philosophers", "Hindu Philosophers", "Roman Emperors", "Chinese Scholars"],
      answer: 1,
      explanation: "History records Hindu philosophers as the developers of the decimal system."
    },
    {
      type: "mcq",
      question: "The Octal number system has how many digits?",
      options: ["2", "8", "10", "16"],
      answer: 1,
      explanation: "Octal uses digits 0-7, totaling 8 symbols."
    },
    {
      type: "truefalse",
      question: "A computer can learn from its past experiences.",
      answer: false,
      explanation: "Standard computers lack the ability to learn unless specifically programmed (limitations of computer)."
    },
    {
      type: "mcq",
      question: "Which software is used for professional graphics like Adobe Photoshop or Freehand?",
      options: ["Word Processor", "Spreadsheet", "Graphics Software", "Database"],
      answer: 2,
      explanation: "Photoshop and Corel Draw are specialized graphics programs."
    },
    {
      type: "mcq",
      question: "What is the base of the Hexadecimal number system?",
      options: ["2", "8", "10", "16"],
      answer: 3,
      explanation: "Hexadecimal (Hex) is base 16."
    },
    {
      type: "truefalse",
      question: "The binary number system is also called the computer's native language.",
      answer: true,
      explanation: "Computers only directly understand binary (0s and 1s)."
    },
    {
      type: "mcq",
      question: "Which part of MS-Paint displays frequently used commands at the top left?",
      options: ["Status bar", "Quick access toolbar", "Ribbon", "Scroll bar"],
      answer: 1,
      explanation: "The Quick Access Toolbar provides fast access to common commands."
    },
    {
      type: "mcq",
      question: "How many nibbles are in one byte?",
      options: ["1", "2", "4", "8"],
      answer: 1,
      explanation: "A byte (8 bits) is made of two nibbles (4 bits each)."
    },
    {
      type: "truefalse",
      question: "The processing speed of a computer is measured in Hertz.",
      answer: true,
      explanation: "Clock speed (processing speed) is measured in Hertz (Hz, MHz, GHz)."
    },
    {
      type: "mcq",
      question: "Convert decimal 10 to binary.",
      options: ["1001", "1010", "1100", "1111"],
      answer: 1,
      explanation: "Decimal 10 is 8+2, which is 1010 in binary."
    },
    {
      type: "mcq",
      question: "Which tool in MS-Paint is used to draw a free-form line?",
      options: ["Line tool", "Curve tool", "Pencil", "Rectangle"],
      answer: 2,
      explanation: "The pencil tool allows freehand drawing."
    },
    {
      type: "truefalse",
      question: "1024 Terabytes make up 1 Petabyte.",
      answer: true,
      explanation: "1 PB = 1024 TB in the memory hierarchy."
    },
    {
      type: "mcq",
      question: "What is the maximum number of digits in an octal system?",
      options: ["7", "8", "9", "10"],
      answer: 1,
      explanation: "Though the digits go up to 7, there are 8 digits total (0-7)."
    },
    {
      type: "mcq",
      question: "Which generation of language is QBASIC?",
      options: ["1GL", "2GL", "3GL", "4GL"],
      answer: 2,
      explanation: "QBASIC is a 3rd Generation (High Level) Language."
    }
  ]
};
// This triggers the randomization every time the script loads
shuffleArray(quizData.easy);
shuffleArray(quizData.medium);
shuffleArray(quizData.hard);

/* ======================
   VARIABLES
====================== */
let currentLevel = "";
let questions = [];
let index = 0;
let score = 0;
let timer;
let timeLeft = 10;

/* ======================
   ELEMENTS
====================== */
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const questionEl = document.getElementById("question");
const optionsEl = document.querySelector(".options");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");
const nextBtn = document.getElementById("next-btn");

/* ======================
   LEVEL SELECTION
====================== */
document.querySelectorAll(".level-btn").forEach(btn => {
  btn.onclick = () => {
    currentLevel = btn.dataset.level;
    questions = quizData[currentLevel];
    startQuiz();
  };
});

/* ======================
   START QUIZ
====================== */
function startQuiz() {
  index = 0;
  score = 0;
  scoreEl.textContent = "Score: 0";
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQuestion();
}

/* ======================
   LOAD QUESTION
====================== */
function loadQuestion() {
  clearInterval(timer);
  timeLeft = 10;
  timerEl.textContent = `⏱️ ${timeLeft}s`;
  startTimer();

  const q = questions[index];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  nextBtn.classList.add("hidden");

  progressEl.textContent = `Question ${index + 1} / ${questions.length}`;

  if (q.type === "mcq") {
    q.options.forEach((opt, i) => createOption(opt, () => checkAnswer(i === q.answer)));
  }

  if (q.type === "truefalse") {
    createOption("True", () => checkAnswer(q.answer === true));
    createOption("False", () => checkAnswer(q.answer === false));
  }
}

/* ======================
   OPTION BUTTON
====================== */
function createOption(text, handler) {
  const btn = document.createElement("button");
  btn.className = "option";
  btn.textContent = text;
  btn.onclick = handler;
  optionsEl.appendChild(btn);
}

/* ======================
   CHECK ANSWER
====================== */
function checkAnswer(correct) {
  clearInterval(timer);

  document.querySelectorAll(".option").forEach(btn => btn.disabled = true);

  if (correct) {
    score++;
    scoreEl.textContent = `Score: ${score}`;
  }

  showExplanation();
  nextBtn.classList.remove("hidden");
}

/* ======================
   EXPLANATION
====================== */
function showExplanation() {
  const p = document.createElement("p");
  p.textContent = questions[index].explanation;
  p.style.marginTop = "10px";
  p.style.fontStyle = "italic";
  p.style.color = "#2980b9";
  optionsEl.appendChild(p);
}

/* ======================
   NEXT / FINISH
====================== */
nextBtn.onclick = () => {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

/* ======================
   RESULT SCREEN
====================== */
function showResult() {
  questionEl.textContent = "🎉 Quiz Completed!";
  optionsEl.innerHTML = `
    <h3>Your Score: ${score} / ${questions.length}</h3>
    <button class="play-again" onclick="location.reload()">Play Again</button>
  `;
  nextBtn.classList.add("hidden");
}

/* ======================
   TIMER
====================== */
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏱️ ${timeLeft}s`;
    if (timeLeft === 0) {
      clearInterval(timer);
      nextBtn.classList.remove("hidden");
    }
  }, 1000);
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


