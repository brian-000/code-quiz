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


    choiceOne.textContent = "a function"
    content.appendChild(choiceOne);


    choiceTwo.textContent = "an object"
    content.appendChild(choiceTwo);


    choiceThree.textContent = "a variable"
    content.appendChild(choiceThree);


    choiceFour.textContent = "a conditional statement"
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

var subtractTime2 = function(){
    count -= 10;
    questionThree();
}
var questionTwo = function () {
    choiceOne.removeEventListener("click",subtractTime);
    choiceTwo.removeEventListener("click",subtractTime);
    choiceThree.removeEventListener("click",subtractTime);
    choiceFour.removeEventListener("click",questionTwo);
    question.textContent = "What is an array";
    choiceOne.textContent = "a tag"
    choiceTwo.textContent = "a conditional statement"
    choiceThree.textContent = "a list of objects"
    choiceFour.textContent = "an api"
    choiceOne.addEventListener("click", subtractTime2);
    choiceTwo.addEventListener("click", subtractTime2);
    choiceThree.addEventListener("click", questionThree);
    choiceFour.addEventListener("click", subtractTime2);
}
var questionThree = function () {
    choiceOne.removeEventListener("click", subtractTime2);
    choiceTwo.removeEventListener("click", subtractTime2);
    choiceThree.removeEventListener("click",questionThree);
    choiceFour.removeEventListener("click", subtractTime2);
    question.textContent = "What is Dom?";
    choiceOne.textContent = "direct object module"
    choiceTwo.textContent = "document object model"
    choiceThree.textContent = "data object module"
    choiceFour.textContent = "data oriented model"
    choiceTwo.addEventListener("click", endGame);
}

var endGame = function(){
    alert("END GAME");
}

btn.addEventListener("click", startQuiz);