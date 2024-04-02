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
        question: 'What does HTML stand for?',
        choice1: 'Hyperlinks and Text Markup Language',
        choice2: 'Home Tool Markup Language',
        choice3: 'Hyper Text Markup Language',
        choice4: 'Hyper Text Markup Leveler',
        answer: 3,
    },
    {
        question: 'What does CSS stand for?',
        choice1: 'Creative Style Sheets',
        choice2: 'Cascading Style Sheets',
        choice3: 'Computer Style Sheets',
        choice4: 'Colorful Style Sheets',
        answer: 2,
    },
    {
        question: 'Which of the following is NOT a JavaScript data type?',
        choice1: 'String',
        choice2: 'Boolean',
        choice3: 'Float',
        choice4: 'Number',
        answer: 3,
    },
    {
        question: 'What keyword is used to declare a variable in JavaScript?',
        choice1: 'dim',
        choice2: 'var',
        choice3: 'let',
        choice4: 'int',
        answer: 2,
    },
    {
        question: 'What is the result of 10 + "5" in JavaScript?',
        choice1: '15',
        choice2: '105',
        choice3: 'Error',
        choice4: '1050',
        answer: 2,
    },
    {
        question: 'Which function is used to print content in the console?',
        choice1: 'console.print()',
        choice2: 'console.write()',
        choice3: 'console.log()',
        choice4: 'print()',
        answer: 3,
    },
    {
        question: 'Which method is used to remove the last element from an array in JavaScript?',
        choice1: 'pop()',
        choice2: 'removeLast()',
        choice3: 'deleteLast()',
        choice4: 'splice()',
        answer: 1,
    },
    {
        question: 'What does NaN stand for in JavaScript?',
        choice1: 'Not a Null',
        choice2: 'Not a Number',
        choice3: 'Not a Name',
        choice4: 'No Access Needed',
        answer: 2,
    },
    {
        question: 'Which symbol is used for single-line comments in JavaScript?',
        choice1: '//',
        choice2: '/* */',
        choice3: '--',
        choice4: '#',
        answer: 1,
    },
    {
        question: 'Which built-in method reverses the order of elements in an array in JavaScript?',
        choice1: 'changeOrder()',
        choice2: 'reverse()',
        choice3: 'sort(order)',
        choice4: 'arrange(order)',
        answer: 2,
    },
    {
        question: 'What is the result of typeof null in JavaScript?',
        choice1: 'Null',
        choice2: 'Undefined',
        choice3: 'Object',
        choice4: 'Number',
        answer: 3,
    },
    {
        question: 'What is the purpose of the break statement in JavaScript?',
        choice1: 'To exit a loop',
        choice2: 'To skip to the next iteration of a loop',
        choice3: 'To define a new block of code',
        choice4: 'To stop script execution',
        answer: 1,
    },
    {
        question: 'Which operator is used to combine two or more strings in JavaScript?',
        choice1: '+',
        choice2: '&',
        choice3: '|',
        choice4: '*',
        answer: 1,
    },
    {
        question: 'What does JSON stand for?',
        choice1: 'JavaScript Object Notation',
        choice2: 'JavaScript Oriented Network',
        choice3: 'JavaScript Operations Network',
        choice4: 'Java Serialized Object Notation',
        answer: 1,
    },
    {
        question: 'What is the result of 2 + 2 * 3 in JavaScript?',
        choice1: '12',
        choice2: '8',
        choice3: '10',
        choice4: '6',
        answer: 3,
    },
    {
        question: 'Which method is used to add new elements to the end of an array in JavaScript?',
        choice1: 'push()',
        choice2: 'append()',
        choice3: 'add()',
        choice4: 'insert()',
        answer: 1,
    },
    {
        question: 'What does the keyword "this" refer to in JavaScript?',
        choice1: 'The current function',
        choice2: 'The global object',
        choice3: 'The parent object',
        choice4: 'The current object',
        answer: 4,
    },
    {
        question: 'Which built-in method returns the length of a string in JavaScript?',
        choice1: 'length()',
        choice2: 'size()',
        choice3: 'getLength()',
        choice4: 'length',
        answer: 4,
    },
    {
        question: 'What is the purpose of the parseFloat() function in JavaScript?',
        choice1: 'To convert a string to an integer',
        choice2: 'To convert a string to a floating-point number',
        choice3: 'To round a floating-point number',
        choice4: 'To find the largest integer less than or equal to a number',
        answer: 2,
    },
    {
        question: 'Which statement is used to declare a function in JavaScript?',
        choice1: 'function myFunction()',
        choice2: 'declare function myFunction()',
        choice3: 'function = myFunction()',
        choice4: 'function: myFunction()',
        answer: 1,
    },
    {
        question: 'What is the purpose of the clearInterval() function in JavaScript?',
        choice1: 'To clear an interval set by setInterval()',
        choice2: 'To clear a timeout set by setTimeout()',
        choice3: 'To clear a timeout set by setInterval()',
        choice4: 'To stop script execution',
        answer: 1,
    },
    {
        question: 'Which statement is used to exit a switch statement in JavaScript?',
        choice1: 'stop',
        choice2: 'exit',
        choice3: 'break',
        choice4: 'end',
        answer: 3,
    },
    {
        question: 'What does the keyword "const" do in JavaScript?',
        choice1: 'Declares a variable',
        choice2: 'Defines a constant',
        choice3: 'Creates a function',
        choice4: 'Executes a statement',
        answer: 2,
    },
    {
        question: 'Which method is used to convert a string to uppercase in JavaScript?',
        choice1: 'toUpperCase()',
        choice2: 'upperCase()',
        choice3: 'toUpper()',
        choice4: 'toUpperCaseCase()',
        answer: 1,
    },
    {
        question: 'What is the purpose of the parseFloat() function in JavaScript?',
        choice1: 'To convert a string to an integer',
        choice2: 'To convert a string to a floating-point number',
        choice3: 'To round a floating-point number',
        choice4: 'To find the largest integer less than or equal to a number',
        answer: 2,
    },
    {
        question: 'Which statement is used to declare a function in JavaScript?',
        choice1: 'function myFunction()',
        choice2: 'declare function myFunction()',
        choice3: 'function = myFunction()',
        choice4: 'function: myFunction()',
        answer: 1,
    },
    {
        question: 'What is the purpose of the clearInterval() function in JavaScript?',
        choice1: 'To clear an interval set by setInterval()',
        choice2: 'To clear a timeout set by setTimeout()',
        choice3: 'To clear a timeout set by setInterval()',
        choice4: 'To stop script execution',
        answer: 1,
    },
    {
        question: 'Which statement is used to exit a switch statement in JavaScript?',
        choice1: 'stop',
        choice2: 'exit',
        choice3: 'break',
        choice4: 'end',
        answer: 3,
    },
    {
        question: 'What is the result of 10 == "10" in JavaScript?',
        choice1: 'true',
        choice2: 'false',
        choice3: 'Error',
        choice4: 'NaN',
        answer: 1,
    },
    {
        question: 'What does the keyword "const" do in JavaScript?',
        choice1: 'Declares a variable',
        choice2: 'Defines a constant',
        choice3: 'Creates a function',
        choice4: 'Executes a statement',
        answer: 2,
    },
    {
        question: 'Which method is used to convert a string to uppercase in JavaScript?',
        choice1: 'toUpperCase()',
        choice2: 'upperCase()',
        choice3: 'toUpper()',
        choice4: 'toUpperCaseCase()',
        answer: 1,
    },
    {
        question: 'What is the result of typeof undefined in JavaScript?',
        choice1: 'Undefined',
        choice2: 'Null',
        choice3: 'String',
        choice4: 'Number',
        answer: 1,
    },
    {
        question: 'Which operator is used to assign a default value to a variable in JavaScript?',
        choice1: '||',
        choice2: '??',
        choice3: '==',
        choice4: '&&',
        answer: 2,
    },
    {
        question: 'What is the result of 5 + 2 + "3" in JavaScript?',
        choice1: '73',
        choice2: '10',
        choice3: 'Error',
        choice4: '523',
        answer: 4,
    },
    {
        question: 'Which method is used to find the index of a specified element in an array in JavaScript?',
        choice1: 'findIndex()',
        choice2: 'indexOf()',
        choice3: 'searchIndex()',
        choice4: 'contains()',
        answer: 2,
    },
];


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
        return window.location.assign('../html/end2.html');
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
