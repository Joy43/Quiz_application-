const questions=[
    // q.w 1
   {
    question:"which is larget animal in the world ?",
    answers:[
        {
            text:"shark",correct:false
        },
        {
            text:"blue whale",correct:true
        },
        {
            text:"Elephant",correct:false
        },
        {
            text:"giffer",correct:false
        },
    ]
   },

//    q.w 2

{
    question:"Which one is Common Noun  ?",
answers:[
    {
        text:"light",correct:false
    },
    {
        text:"Cat",correct:false
    },
    {
        text:"good",correct:false
    },
    {
        text:"Length",correct:true
    },
    
]

},

// q.whiteSpace: 3 


{
    question:"which is largest country in the world ?",
answers:[
    {
        text:"Russia",correct:true
    },
    {
        text:"Catmodo",correct:false
    },
    {
        text:"newyork",correct:false
    },
    {
        text:"ciwl",correct:false
    },
    
]

},


// q.w 4

{
    question:"which is largest population in the world ?",
answers:[
    {
        text:"Russia",correct:false
    },
    {
        text:"china",correct:true
    },
    {
        text:"newyork",correct:false
    },
    {
        text:"canada",correct:false
    },
    
]

},

// q.w 5
{
question:" Have you ever - - - Sundarbans ?  [ BDBL - 2012 ] ?",
answers:[
    {
        text:" traveled , within , forest",correct:false
    },
    {
        text:"been , to , the",correct:true
    },
    {
        text:"been , to , the",correct:false
    },
    {
        text:" looked , on , to",correct:false
    },
    
]

}

]

// end q.whiteSpace: 

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion () {
    resetState();
    let currentQuestion=
    questions[currentQuestionIndex];

let questionNo=currentQuestionIndex +1;

questionElement.innerHTML=questionNo +" ."+ currentQuestion.question;

currentQuestion.answers.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click", selectAnswer);
});

}

// import { createSelector } from 'reselect'
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect=selectedBtn.dataset.correct==="true"; 
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play again Quiz"
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex<questions.length){
        showQuestion();

    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
if(currentQuestionIndex<questions.length){
    handleNextButton();
}
else{
    startQuiz();
}
});

startQuiz()
