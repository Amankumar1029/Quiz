const questions=[
    {
        question : "Which is largest animal in the world ?",
        answers:[
            {text:"Shark", correct: false},
            {text:"Blue-whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Giraffe", correct: false}
        ]
    },
    {
        question : "Which is largest continent in the world ?",
        answers:[
            {text:"Asia", correct: true},
            {text:"Australia", correct: false},
            {text:"Africa", correct: false},
            {text:"Arctic", correct: false}
        ]
    },
    {
        question : "Which is largest Bird in the world ?",
        answers:[
            {text:"Parrot", correct: false},
            {text:"Owl", correct: false},
            {text:"Ostrich", correct: true},
            {text:"Sparrow", correct: false}
        ]
    },
    {
        question : "Which is largest river in the world ?",
        answers:[
            {text:"Ganga", correct: false},
            {text:"Nile", correct: true},
            {text:"Godawri", correct: false},
            {text:"Satluj", correct: false}
        ]
    },
    {
        question : "How many colors in the flag of India ?",
        answers:[
            {text:"2", correct: false},
            {text:"1", correct: false},
            {text:"3", correct: true},
            {text:"5", correct: false}
        ]
    },
    {
        question : "What is the capital city of India ?",
        answers:[
            {text:"Delhi", correct: true},
            {text:"Mumbai", correct: false},
            {text:"Kolkata", correct: false},
            {text:"Chennai", correct: false}
        ]
    },
    {
        question : "Which is largest gulf in the world ?",
        answers:[
            {text:"Gulf of Mexico", correct: true},
            {text:"Persian Gulf", correct: false},
            {text:"Gulf of Carpentaria", correct: false},
            {text:"Gulf of Mannar", correct: false}
        ]
    },
    {
        question : "Who was the first Prime Minister of India ?",
        answers:[
            {text:"Jawaharlal Nehru", correct: true},
            {text:"Indira Gandhi", correct: false},
            {text:"Mahatma Gandhi", correct: false},
            {text:"Rajendra Prasad", correct: false}
        ]
    },
    {
        question : "What is the national flower of India ?",
        answers:[
            {text:"Rose", correct: false},
            {text:"Sunflower", correct: false},
            {text:"Lotus", correct: true},
            {text:"Jasmine", correct: false}
        ]
    },
    {
        question : "Which festival is known as the 'Festival of Light' in India ?",
        answers:[
            {text:"Navratri", correct: false},
            {text:"Durga puja", correct: false},
            {text:"Holi", correct: false},
            {text:"Diwali", correct: true}
        ]
    }
];

const questionElement = document.getElementById("ques");
const answerButtons = document.getElementById("ans-buttons");
const nextButton = document.getElementById("next");

let currentIndex = 0;
let score = 0;

function startQuiz(){
    currentIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentIndex];
    let questionNo = currentIndex+1;
    questionElement.innerHTML= questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    }); 
    
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    if(e.target.dataset.correct==="true"){
        e.target.classList.add("correct");
        score++;
    }
    else{
        e.target.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length} !`; 
    nextButton.innerHTML = "Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentIndex++;
    if(currentIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",() => {
    if(currentIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();
