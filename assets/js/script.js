var btn = document.querySelector("#btn");
var timerEl = document.querySelector("#timer");
var question = document.querySelector("#question");
var options = document.querySelector("#options");
var content = document.querySelector("#page-content");
var choiceOne = document.createElement("button");
var choiceTwo = document.createElement("button");
var choiceThree = document.createElement("button");
var choiceFour = document.createElement("button");
var time = null;
var count = 75;

function timeInterval() {
    timerEl.innerHTML = "<p> Time left:" + count + " seconds</p>"
    count--;
    if (count == 0) {
        endGame();
    }
}

function startTimer() {
    time = setInterval(timeInterval, 1000);
}
var startQuiz = function (event) {
    startTimer();

    var choiceId = "sopa";
    btn.parentNode.removeChild(btn);
    options.parentNode.removeChild(options);
    question.textContent = "What is an if/else statement";


    choiceOne.textContent = "choiceOne"
    content.appendChild(choiceOne);


    choiceTwo.textContent = "choiceTwo"
    content.appendChild(choiceTwo);


    choiceThree.textContent = "choiceThree"
    content.appendChild(choiceThree);


    choiceFour.textContent = "choiceFour"
    choiceFour.setAttribute("id", choiceId);
    content.appendChild(choiceFour);

    choiceOne.addEventListener("click", subtractTime);
    choiceTwo.addEventListener("click", subtractTime);
 choiceThree.addEventListener("click", subtractTime);
    
    choiceFour.addEventListener("click", questionTwo);


}

var subtractTime = function(){
    count -= 10;
    questionTwo();
}
var questionTwo = function () {
    choiceOne.removeEventListener("click",subtractTime);
    choiceTwo.removeEventListener("click",subtractTime);
    choiceThree.removeEventListener("click",subtractTime);
    choiceFour.removeEventListener("click",questionTwo);
    question.textContent = "What is an array";
    choiceOne.textContent = "Q2choiceOne"
    choiceTwo.textContent = "Q2choiceTwo"
    choiceThree.textContent = "Q2choiceThree"
    choiceFour.textContent = "Q2choiceFour"
    choiceThree.addEventListener("click", questionThree);
}
var questionThree = function () {
    choiceThree.removeEventListener("click",questionThree);
    question.textContent = "What is Dom?";
    choiceOne.textContent = "Q3choiceOne"
    choiceTwo.textContent = "Q3choiceTwo"
    choiceThree.textContent = "Q3choiceThree"
    choiceFour.textContent = "Q3choiceFour"
    choiceTwo.addEventListener("click", endGame);

}

var endGame = function(){
    alert("sopa dopa");
}

btn.addEventListener("click", startQuiz);