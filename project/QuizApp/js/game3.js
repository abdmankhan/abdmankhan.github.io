const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
// console.log(choices);
const questionCounterText = document.getElementById('questionCounter');
const socreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What is the correct spelling?',
        choice1: 'Accomodate',
        choice2: 'Accommodate',
        choice3: 'Acommodate',
        choice4: 'Accommodatte',
        answer: 2,
    },
    {
        question: 'Choose the synonym for "happy":',
        choice1: 'Sad',
        choice2: 'Excited',
        choice3: 'Angry',
        choice4: 'Tired',
        answer: 2,
    },
    {
        question: 'Which sentence is grammatically correct?',
        choice1: 'She go to the store every day.',
        choice2: 'She goes to the store every day.',
        choice3: 'She is go to the store every day.',
        choice4: 'She gone to the store every day.',
        answer: 2,
    },
    {
        question: 'What does the phrase "break a leg" mean?',
        choice1: 'Good luck',
        choice2: 'Bad luck',
        choice3: 'Stay safe',
        choice4: 'Get well soon',
        answer: 1,
    },
    {
        question: 'Which word is a noun?',
        choice1: 'Run',
        choice2: 'Running',
        choice3: 'Ran',
        choice4: 'Runner',
        answer: 4,
    },
    {
        question: 'What is the past tense of "eat"?',
        choice1: 'Ate',
        choice2: 'Eaten',
        choice3: 'Eating',
        choice4: 'Eats',
        answer: 1,
    },
    {
        question: 'Which sentence is correct?',
        choice1: 'I have been here since two hours.',
        choice2: 'I have been here for two hours.',
        choice3: 'I am here since two hours.',
        choice4: 'I am here for two hours.',
        answer: 2,
    },
    {
        question: 'What is the opposite of "fast"?',
        choice1: 'Quick',
        choice2: 'Slow',
        choice3: 'Rapid',
        choice4: 'Speedy',
        answer: 2,
    },
    {
        question: 'Choose the correct preposition: "He is good ___ playing guitar."',
        choice1: 'at',
        choice2: 'in',
        choice3: 'on',
        choice4: 'with',
        answer: 1,
    },
    {
        question: 'What is the plural of "child"?',
        choice1: 'Childrens',
        choice2: 'Childs',
        choice3: 'Childes',
        choice4: 'Children',
        answer: 4,
    },
    {
        question: 'Which word is a verb?',
        choice1: 'Jump',
        choice2: 'Jumping',
        choice3: 'Jumped',
        choice4: 'Jumper',
        answer: 3,
    },
    {
        question: 'Choose the correct form of the verb: "She ___ to school every day."',
        choice1: 'Goes',
        choice2: 'Go',
        choice3: 'Going',
        choice4: 'Gone',
        answer: 1,
    },
    {
        question: 'What is the superlative form of "good"?',
        choice1: 'Gooder',
        choice2: 'Better',
        choice3: 'Best',
        choice4: 'Goodest',
        answer: 3,
    },
    {
        question: 'What is the correct past participle of "swim"?',
        choice1: 'Swam',
        choice2: 'Swum',
        choice3: 'Swing',
        choice4: 'Swimming',
        answer: 2,
    },
    {
        question: 'Choose the correct article: "___ apple a day keeps the doctor away."',
        choice1: 'An',
        choice2: 'A',
        choice3: 'The',
        choice4: 'None needed',
        answer: 2,
    },
    {
        question: 'What is the plural of "mouse"?',
        choice1: 'Mouses',
        choice2: 'Mice',
        choice3: 'Micees',
        choice4: 'Mouse',
        answer: 2,
    },
    {
        question: 'Which sentence is correct?',
        choice1: 'He plays piano very good.',
        choice2: 'He plays piano very well.',
        choice3: 'He plays piano very goodly.',
        choice4: 'He plays piano very nice.',
        answer: 2,
    },
    {
        question: 'What is the comparative form of "far"?',
        choice1: 'Farther',
        choice2: 'Further',
        choice3: 'More far',
        choice4: 'Farest',
        answer: 1,
    },
    {
        question: 'Choose the correct conjunction: "I want coffee ___ tea."',
        choice1: 'Or',
        choice2: 'And',
        choice3: 'But',
        choice4: 'Nor',
        answer: 2,
    },
    {
        question: 'What does the idiom "hit the nail on the head" mean?',
        choice1: 'Miss the target',
        choice2: 'Avoid the issue',
        choice3: 'Do something well',
        choice4: 'Lose interest',
        answer: 3,
    },
    {
        question: 'Which word is an adjective?',
        choice1: 'Run',
        choice2: 'Running',
        choice3: 'Ran',
        choice4: 'Runny',
        answer: 4,
    },
    {
        question: 'What is the correct order of adjectives?',
        choice1: 'Size, shape, color, material, origin, purpose',
        choice2: 'Color, size, shape, origin, material, purpose',
        choice3: 'Shape, size, color, material, origin, purpose',
        choice4: 'Material, color, shape, size, origin, purpose',
        answer: 1,
    },
    {
        question: 'Choose the correct past form: "She ___ the book yesterday."',
        choice1: 'Buy',
        choice2: 'Buys',
        choice3: 'Bought',
        choice4: 'Buying',
        answer: 3,
    },
    {
        question: 'What is the plural of "man"?',
        choice1: 'Mans',
        choice2: 'Mens',
        choice3: 'Men',
        choice4: 'Manes',
        answer: 3,
    },
    {
        question: 'Which sentence is correct?',
        choice1: 'I am very interesting in this book.',
        choice2: 'I am very interested in this book.',
        choice3: 'I am very interest in this book.',
        choice4: 'I am very interests in this book.',
        answer: 2,
    },
    {
        question: 'What is the correct comparative form of "bad"?',
        choice1: 'Worse',
        choice2: 'Baddest',
        choice3: 'Badder',
        choice4: 'Badly',
        answer: 1,
    },
    {
        question: 'Choose the correct preposition: "The book is ___ the table."',
        choice1: 'In',
        choice2: 'On',
        choice3: 'At',
        choice4: 'Under',
        answer: 2,
    },
    {
        question: 'What is the correct plural of "knife"?',
        choice1: 'Knifes',
        choice2: 'Knives',
        choice3: 'Knife',
        choice4: 'Knived',
        answer: 2,
    },
    {
        question: 'Which word is a conjunction?',
        choice1: 'Because',
        choice2: 'Quick',
        choice3: 'Happy',
        choice4: 'Run',
        answer: 1,
    },
    {
        question: 'Choose the correct form of the verb: "He ___ to school every day."',
        choice1: 'Goes',
        choice2: 'Go',
        choice3: 'Going',
        choice4: 'Gone',
        answer: 1,
    },
    {
        question: 'What is the superlative form of "good"?',
        choice1: 'Gooder',
        choice2: 'Better',
        choice3: 'Best',
        choice4: 'Goodest',
        answer: 3,
    },
];

console.log(questions);



//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = prompt('How many Questions you want to be presented... (upto 29)');

startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];   //used for splicing
    // console.log(availableQuestions);
    getNewQuestion();
};
getNewQuestion = () =>{
    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS)
    {
        localStorage.setItem('mostRecentScore',score);
        //go to end page,,
        //when all questions are over...
        return window.location.assign('../html/end3.html');
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;//5th.. can use $
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex,1);

    acceptingAnswers = true;
};
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        //from 4th video & 5th video
        const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if(classToApply === 'correct'){
            incrementScore(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 500);
        //ends here
        
    });
});

incrementScore = num => {
    score += num;
    socreText.innerText = score;
}
startGame();
