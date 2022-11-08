const Questions = [
    {
        Question: `What is the best programming language in the world?`,
        A: `Javascript`,
        B: `Java`,
        C: `Python`,
        D: `C`,
        correct: `A`
    },
    {
        Question: `Which programming language used in Front-End development?`,
        A: `Java`,
        B: `Python`,
        C: `Flutter`,
        D: `Javascript`,
        correct: `D`
    },
    {
        Question: `Who rules the world`,
        A: `Johnny Bravo`,
        B: `Avengers`,
        C: `Ak Parti`,
        D: `Recep Tayyip Erdoğan`,
        correct: `D`
    },
    {
        Question: `Who takes the one-ring from Isıldur?`,
        A: `Aragorn`,
        B: `Gollum`,
        C: `Isildur`,
        D: `Theoden`,
        correct: `B`
    },
    {
        Question: `Who directed the movie triology of Lord of the Rings?`,
        A: `Peter Jackson`,
        B: `Gandalf`,
        C: `Burak Aksak`,
        D: `Eren Özlü`,
        correct: `A`
    },

]
const Options = document.querySelectorAll(".Option")
const Question = document.getElementById("Question")
const ChoiceAText = document.getElementById("ChoiceAText")
const ChoiceBText = document.getElementById("ChoiceBText")
const ChoiceCText = document.getElementById("ChoiceCText")
const ChoiceDText = document.getElementById("ChoiceDText")
const DisplayQuestions = document.getElementById("DisplayQuestions")
const Submit = document.getElementById("Submit")
let Answer
let Score = 0
let CurrentQuestion = 0

function StartQuiz() {

    DisplayQuestions.style = `visibility:visible;`
    Answer = RetrieveAnswer()
    console.log(Answer)
    console.log(Questions[CurrentQuestion].correct)

    if (Answer) {
        if (Answer === Questions[CurrentQuestion].correct) {
            Score += 1
        }
        CurrentQuestion += 1
    }

    if (CurrentQuestion < Questions.length) {
        LoadQuiz()
    } else {
        Submit.style = "visibility:hidden;"
        DisplayQuestions.style = `visibility:hidden;`
        Question.innerHTML = `Your quiz has finished. You have answered ${Score} true questions out of ${Questions.length} questions <button id="Refresh" onclick="location.reload()">Refresh</button>`
        
    }
    
    Deselect()
    
    Submit.innerHTML = `Submit`
   
}

function LoadQuiz() {
    Deselect()
    Question.innerHTML = Questions[CurrentQuestion].Question
    ChoiceAText.innerHTML = Questions[CurrentQuestion].A
    ChoiceBText.innerHTML = Questions[CurrentQuestion].B
    ChoiceCText.innerHTML = Questions[CurrentQuestion].C
    ChoiceDText.innerHTML = Questions[CurrentQuestion].D
}

function Deselect() {

    Options.forEach(Option => {
        Option.checked = false
    })

}

function RetrieveAnswer() {

    Answer = undefined

    Options.forEach((Option) => {
        if (Option.checked) {
            Answer = Option.id
            console.log(Option.value)
        }
    })
    return Answer
}

RetrieveAnswer()
