document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function() {
        this.querySelector('.dropdown-content').classList.toggle('show');
      });
    });
  
    window.addEventListener('click', function(e) {
      dropdowns.forEach(function(dropdown) {
        if (!dropdown.contains(e.target)) {
          dropdown.querySelector('.dropdown-content').classList.remove('show');
        }
      });
    });
  });
  


  /*   Slides  */
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  document.getElementById('nextSlide').addEventListener('click', nextSlide);
  document.getElementById('prevSlide').addEventListener('click', prevSlide);

  // Exibindo o primeiro slide ao carregar a página
  showSlide(currentSlide);





  // declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'Qual personagem falou essa frase? -Só quando um homem enfrenta seus medos é que ele se torna verdadeiramente forte.',
    answers: [
      {
        answer: 'Might Guy',
        correct: true,
      },
      {
        answer: 'Zaraki Kenpachi',
        correct: false,
      },
      {
        answer: 'Roronoa Zoro',
        correct: false,
      },
      {
        answer: 'Rock Lee',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual personagem falou essa frase? -Eu decidi ser forte. Se eu cair, se eu me perder, então estarei sozinho. Até lá, eu tenho que continuar correndo. É isso que eu decidi.',
    answers: [
      {
        answer: 'Itachi',
        correct: false,
      },
      {
        answer: 'Roronoa Zoro',
        correct: true,
      },
      {
        answer: 'Ichigo Kurosaki',
        correct: false,
      },
      {
        answer: 'Kabuto',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual personagem falou essa frase? -Eu não vou correr. Mesmo que isso signifique que vou morrer, não vou correr. Existem coisas pelas quais vale a pena morrer.',
    answers: [
      {
        answer: ' Brook',
        correct: false,
      },
      {
        answer: 'Jinbe',
        correct: false,
      },
      {
        answer: 'Rukia Kuchiki',
        correct: false,
      },
      {
        answer: 'Naruto Uzumaki',
        correct: true,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();




document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggleLinks");
  const navLinks = document.querySelector("nav ul");

  toggleButton.addEventListener("click", function() {
      if (navLinks.style.display === "none" || navLinks.style.display === "") {
          navLinks.style.display = "flex";
      } else {
          navLinks.style.display = "none";
      }
  });
});