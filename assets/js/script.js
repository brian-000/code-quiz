var btn = document.querySelector("#btn");
var btn2 = document.querySelector("#btn2");
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
var input = document.createElement("input");
var tag = document.createElement("p"); // <p></p>
var myInitials = document.querySelector("#initials");
var val;
var scoresArray =  {
    name: val,
    score: count
};
var finalArray = [];




var finalButton = document.createElement("button");

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

var subtractTime = function () {
    count -= 10;
    questionTwo();
}

var subtractTime2 = function () {
    count -= 10;
    questionThree();
}
var questionTwo = function () {
    choiceOne.removeEventListener("click", subtractTime);
    choiceTwo.removeEventListener("click", subtractTime);
    choiceThree.removeEventListener("click", subtractTime);
    choiceFour.removeEventListener("click", questionTwo);
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
    choiceThree.removeEventListener("click", questionThree);
    choiceFour.removeEventListener("click", subtractTime2);
    question.textContent = "What is Dom?";
    choiceOne.textContent = "direct object module"
    choiceTwo.textContent = "document object model"
    choiceThree.textContent = "data object module"
    choiceFour.textContent = "data oriented model"
    choiceTwo.addEventListener("click", endGame);
}


var endGame = function () {
    alert("END GAME");

    var text = document.createTextNode("Your final score is " + count + " Enter Initials: ");
    finalButton.textContent = "Submit";
    input.type = "text";

    question.textContent = "All Done!";
    choiceOne.parentNode.removeChild(choiceOne);
    choiceTwo.parentNode.removeChild(choiceTwo);
    choiceThree.parentNode.removeChild(choiceThree);
    choiceFour.parentNode.removeChild(choiceFour);
    tag.appendChild(text); // <p>TEST TEXT</p>
    input.setAttribute("id", "initials");
    input.setAttribute("onblur", "getVal()")
    content.appendChild(tag);
    content.appendChild(input);

    content.appendChild(finalButton);
    finalButton.addEventListener("click", highScores);
    //    var  val = document.querySelector('initials').value;
    //     console.log(val);

}

function getVal() {

    //console.log("inside getVal()");

    loadTasks();
 

   
   
    scoresArray.name = document.querySelector("#initials").value;
    scoresArray.score= count;
    //var sizeOfArray = finalArray.length()+1;
    finalArray.push(scoresArray);

    
    //scoresArray.push(scoresArray);
    //console.log(finalArray);
    saveTasks();
    //console.log(scoresArray);
}
var saveTasks = function () {
    
    localStorage.setItem("finalArray", JSON.stringify(finalArray));

}
var loadTasks = function () {
    var savedTasks = localStorage.getItem("finalArray");
    savedTasks = JSON.parse(savedTasks);
   // console.log('retrivedOjects: ', JSON.parse(savedTasks));

   finalArray.push(savedTasks);

    
}
var highScores = function () {
    //loadTasks();
    //console.log(val);
    //yourContainer.innerHTML = JSON.stringify(lineChartData);
    // var taskNameInput = document.querySelector("input[name='task-name']").value;
    //var x = yourContainer.innerHTML = JSON.stringify(lineChartData);
    //console.log(scoresArray);
    var str = JSON.stringify(finalArray, null, 4); 
        var text2 = document.createTextNode(str);
        //text2.replace('{','aa');
        content.appendChild(text2);


    

    
    //    for(var i = 0; i < scoresArray.length; i++){
    //        alert("my"+scoresArray[i].name);
    //    }
    //    localStorage.setItem("text2", JSON.stringify(scoresArray));
    //    var savedTasks = localStorage.getItem("text2");

    //    if (!savedTasks) {
    //      return false;
    //    }

    //    savedTasks = JSON.parse(savedTasks);

    //    for (var i = 0; i < savedTasks.length; i++) {
    //     // pass each task object into the `createTaskEl()` function
    //     console.log(savedTasks[i]);
    // }
    //document.createTextNode(savedTasks);
    
    content.removeChild(tag);
    content.removeChild(input);
    content.removeChild(finalButton);
    question.textContent = "High Scores";



}
btn.addEventListener("click", startQuiz);
//btn2.addEventListener("click", highScores);

/*
var tasks = [];
var taskDataObj = {
            name: taskNameInput,
            type: taskTypeInput,
            status: "to do"
        };

tasks.push(taskDataObj);
*/