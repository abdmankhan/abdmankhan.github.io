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
        question: 'What is the syntax to declare a pointer in C++?',
        choice1: 'int *ptr;',
        choice2: 'ptr int;',
        choice3: 'ptr;',
        choice4: 'pointer int *;',
        answer: 1,
    },
    {
        question: 'Which of the following is a correct way to initialize an integer variable in C++?',
        choice1: 'int num = 10;',
        choice2: 'num = 10;',
        choice3: 'int num(10);',
        choice4: 'num(10);',
        answer: 1,
    },
    {
        question: 'What is the time complexity of accessing an element in an array?',
        choice1: 'O(1)',
        choice2: 'O(n)',
        choice3: 'O(log n)',
        choice4: 'O(n^2)',
        answer: 1,
    },
    {
        question: 'Which sorting algorithm has the worst-case time complexity of O(n^2)?',
        choice1: 'Merge Sort',
        choice2: 'Heap Sort',
        choice3: 'Bubble Sort',
        choice4: 'Quick Sort',
        answer: 3,
    },
    {
        question: 'What is the correct syntax for a do-while loop in C++?',
        choice1: 'do { // code } while (condition);',
        choice2: 'while (condition) { // code } do;',
        choice3: 'do (condition) { // code } while;',
        choice4: 'do (condition) while { // code };',
        answer: 1,
    },
    {
        question: 'Which data structure follows the Last In First Out (LIFO) principle?',
        choice1: 'Queue',
        choice2: 'Stack',
        choice3: 'Linked List',
        choice4: 'Tree',
        answer: 2,
    },
    {
        question: 'What is the purpose of the `break` statement in a switch-case block?',
        choice1: 'To skip the remaining code in the block',
        choice2: 'To exit the switch-case block',
        choice3: 'To continue to the next case',
        choice4: 'To restart the loop',
        answer: 2,
    },
    {
        question: 'What is the output of the following code snippet?\nint x = 5;\nint y = 3;\nint result = x++ * y--;',
        choice1: '15',
        choice2: '18',
        choice3: '16',
        choice4: '12',
        answer: 1,
    },
    {
        question: 'Which keyword is used to dynamically allocate memory in C++?',
        choice1: 'new',
        choice2: 'malloc',
        choice3: 'alloc',
        choice4: 'mallocate',
        answer: 1,
    },
    {
        question: 'What is the purpose of the \'const\' keyword in C++?',
        choice1: 'To declare a constant variable',
        choice2: 'To declare a variable as mutable',
        choice3: 'To define a function as constant',
        choice4: 'To make a variable private',
        answer: 1,
    },
    {
        question: 'Which sorting algorithm is based on the divide and conquer strategy?',
        choice1: 'Selection Sort',
        choice2: 'Bubble Sort',
        choice3: 'Merge Sort',
        choice4: 'Insertion Sort',
        answer: 3,
    },
    {
        question: 'What does the \'sizeof\' operator return in C++?',
        choice1: 'Size of a variable',
        choice2: 'Size of a data type',
        choice3: 'Size of a function',
        choice4: 'Size of a class',
        answer: 2,
    },
    {
        question: 'Which of the following is not a fundamental data type in C++?',
        choice1: 'int',
        choice2: 'float',
        choice3: 'string',
        choice4: 'char',
        answer: 3,
    },
    {
        question: 'What is the correct way to access the third element of an array in C++?',
        choice1: 'arr[2]',
        choice2: 'arr[3]',
        choice3: 'arr[4]',
        choice4: 'arr[1]',
        answer: 1,
    },
    {
        question: 'What is the output of the following code snippet?\nint arr[] = {1, 2, 3, 4};\nint *ptr = arr;\ncout << *ptr++;',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        answer: 1,
    },
    {
        question: 'Which data structure uses First In First Out (FIFO) order?',
        choice1: 'Stack',
        choice2: 'Queue',
        choice3: 'Linked List',
        choice4: 'Tree',
        answer: 2,
    },
    {
        question: 'What does the `nullptr`` keyword represent in C++?',
        choice1: 'A null pointer',
        choice2: 'An empty object',
        choice3: 'A placeholder for a function',
        choice4: 'A reserved keyword',
        answer: 1,
    },
    {
        question: 'What is the purpose of the `virtual` keyword in C++?',
        choice1: 'To define a static member',
        choice2: 'To allow dynamic binding in inheritance',
        choice3: 'To declare a constant member',
        choice4: 'To create an abstract class',
        answer: 2,
    },
    {
        question: 'Which algorithm is used to find the shortest path in a graph?',
        choice1: 'DFS (Depth First Search)',
        choice2: 'BFS (Breadth First Search)',
        choice3: 'Dijkstra’s Algorithm',
        choice4: 'Prim’s Algorithm',
        answer: 3,
    },
    {
        question: 'What is the purpose of the `endl` manipulator in C++?',
        choice1: 'To print a newline character',
        choice2: 'To flush the output buffer',
        choice3: 'To skip to the next line',
        choice4: 'To end the program execution',
        answer: 1,
    },
    {
        question: 'Which of the following is a valid way to define a class in C++?',
        choice1: 'class MyClass { };',
        choice2: 'MyClass { };',
        choice3: 'class { };',
        choice4: 'MyClass();',
        answer: 1,
    },
    {
        question: 'What is the output of the following code snippet?\nint i = 10;\nint *p = &i;\ncout << p;',
        choice1: '10',
        choice2: 'Memory address of i',
        choice3: 'Error',
        choice4: '0',
        answer: 2,
    },
    {
        question: 'Which of the following is true about references in C++?',
        choice1: 'References can be null',
        choice2: 'References can be re-assigned',
        choice3: 'References are aliases',
        choice4: 'References are stored in a separate memory location',
        answer: 3,
    },
    {
        question: 'What is the purpose of the `static` keyword in C++?',
        choice1: 'To allocate memory dynamically',
        choice2: 'To define a constant',
        choice3: 'To declare a class member as shared among all instances',
        choice4: 'To create an object',
        answer: 3,
    },
    {
        question: 'What is the correct syntax to define a function outside the class in C++?',
        choice1: 'void MyClass::myFunction() { // code }',
        choice2: 'void MyClass.myFunction() { // code }',
        choice3: 'void myFunction() { // code }',
        choice4: 'void myFunction::MyClass() { // code }',
        answer: 1,
    },
    {
        question: 'What is the output of the following code snippet?\nint x = 10;\nint &y = x;\ncout << y++;',
        choice1: '10',
        choice2: '11',
        choice3: '12',
        choice4: 'Error',
        answer: 2,
    },
    {
        question: 'Which of the following is true about the `delete` operator in C++?',
        choice1: 'It frees memory allocated by `new` operator',
        choice2: 'It deallocates memory from the stack',
        choice3: 'It deletes a class member',
        choice4: 'It deletes an object',
        answer: 1,
    },
    {
        question: 'What is the purpose of the try-catch block in C++?',
        choice1: 'To handle errors at compile-time',
        choice2: 'To handle errors at runtime',
        choice3: 'To create custom exceptions',
        choice4: 'To skip execution of code',
        answer: 2,
    },
    {
        question: 'Which algorithm is used to sort elements in an array in C++ STL?',
        choice1: 'Merge Sort',
        choice2: 'Bubble Sort',
        choice3: 'Quick Sort',
        choice4: 'Sort',
        answer: 4,
    },
    {
        question: 'What is the correct way to open a file in C++ for writing?',
        choice1: 'ofstream file("filename.txt");',
        choice2: 'ifstream file("filename.txt");',
        choice3: 'fstream file("filename.txt", ios::out);',
        choice4: 'file.open("filename.txt", ios::write);',
        answer: 3,
    },
    {
        question: 'What is the output of the following code snippet?\nint arr[5];\narr[0] = 1;\narr[1] = 2;\narr[2] = 3;\narr[3] = 4;\narr[4] = 5;\ncout << arr[2];',
        choice1: '3',
        choice2: '5',
        choice3: '4',
        choice4: '2',
        answer: 1,
    },
    {
        question: 'What is the purpose of the const qualifier in a member function?',
        choice1: 'To make the function a class member',
        choice2: 'To prevent modification of member variables',
        choice3: 'To allow modification of member variables',
        choice4: 'To specify a default value for a parameter',
        answer: 2,
    },
    {
        question: 'Which of the following is a valid way to declare a pointer in C++?',
        choice1: 'int *ptr;',
        choice2: 'int ptr;',
        choice3: 'ptr *int;',
        choice4: 'pointer int *;',
        answer: 1,
    },
    {
        question: 'What is the purpose of the this pointer in C++?',
        choice1: 'To refer to the current instance of a class',
        choice2: 'To access global variables',
        choice3: 'To delete a pointer',
        choice4: 'To declare a constant',
        answer: 1,
    },
];
//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = prompt('How many you want to practice this session.. (max 34)');

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
        return window.location.assign('/project/QuizApp/html/end.html');
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
