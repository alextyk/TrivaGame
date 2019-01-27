// on click button "start game" reset the game, so we need a reset function
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var questions = ["Who was the highest paid actor of 2018?", "What was the highest grossing film of 2018?", "Who was the highest grossing actress of 2018?", "Who is the richest movie director of all time?", "Who is the richest movie producer of all time?"];
var answers = ["George Clooney", "Black Panther", "Sofia Vergara", "George Lucas", "George Lucas" ];
var answers1 = ["George Clooney", "The Rock", "Mark Wahlberg", "Robert Downey Jr."]
var answers2 = ["Jurassic World: Fallen Kingdom", "Incredibles 2", "Avengers: Infinity War", "Black Panther"]
var answers3 = ["Jennifer Lawrence", "Sofia Vergara", "Scarlett Johansson", "Julia Roberts" ];
var answers4 = ["Steven Spielberg", "George Lucas", "James Cameron", "Martin Scorcese"];
var answers5 = ["Steven Spielberg", "George Lucas", "James Cameron", "Jerry Bruckheimer"];
var number = 30;
var intervalId;

$(".btn-primary").on("click", function(){
    
    reset();
    

});
// in reset function, all scores for correct answers, incorrect answers, and unanswered, are 0, time remaining is 30s
function reset () {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    number = 30;
    $(".quizbox").empty();
    questionAsk1();
}
// Everything for first question
function questionAsk1() {
    timer1();
    $(".quizbox").text(questions[0]);
    $("#box1").text(answers1[0]);
    $("#box2").text(answers1[1]);
    $("#box3").text(answers1[2]);
    $("#box4").text(answers1[3]);
    $(".answerbox").hover(function(){
        $(this).css("background-color", "pink");
        }, function(){
        $(this).css("background-color", "yellow");
    });
    $("#box1").on("click", function () {
        $(".timerbox").html("Time Remaining: " + number);
        $(".quizbox").text("Correct!");
        $(".answerbox").empty();
        correct++;
        clearInterval(intervalId);
        intervalId = setInterval(questionAsk2, 5000);
        
    })
    $("#box2, #box3, #box4").on("click", function () {
        $(".timerbox").html("Time Remaining: " + number);
        $(".quizbox").text("Incorrect! The correct answer was: " + answers1[0]);
        $(".answerbox").empty();
        clearInterval(intervalId);
        intervalId = setInterval(questionAsk2, 5000);
     
    })
    
    }
    



function timer1() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement1, 1000);
}
function decrement1() {
    number--;
    $(".timerbox").html("Time Remaining: " + number);
    if (number === 0) {
      outOfTime1();
    }
}

function outOfTime1() {
    $(".timerbox").html("Time Remaining: 0 seconds");
    $(".quizbox").text("Out of Time!");
    $("#responsebox").text("The correct answer was: " + answers1[0]);
    $(".answerbox").empty();
    unanswered++;
    clearInterval(intervalId);
    intervalId = setInterval(questionAsk2, 5000);
}

// Everything for second question
function questionAsk2() {
    number = 30;
    $("#responsebox").empty();
    timer2();
    $(".quizbox").text(questions[1]);
    $("#box1").text(answers2[0]);
    $("#box2").text(answers2[1]);
    $("#box3").text(answers2[2]);
    $("#box4").text(answers2[3]);
    $(".answerbox").hover(function(){
        $(this).css("background-color", "pink");
        }, function(){
        $(this).css("background-color", "yellow");
    });
    $("#box4").on("click", function () {
        $(".timerbox").html("Time Remaining: " + number);
        $(".quizbox").text("Correct!");
        $(".answerbox").empty();
        correct++;
        clearInterval(intervalId);
        intervalId = setInterval(questionAsk3, 5000);
        
    })
    $("#box2, #box3, #box1").on("click", function () {
        $(".timerbox").html("Time Remaining: " + number);
        $(".quizbox").text("Incorrect! The correct answer was: " + answers2[3]);
        $(".answerbox").empty();
        clearInterval(intervalId);
        intervalId = setInterval(questionAsk3, 5000);
        
        
    })


    
}

function timer2() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement2, 1000);
}
function decrement2() {
    number--;
    $(".timerbox").html("Time Remaining: " + number);
    if (number === 0) {
      outOfTime2();
    }
}

function outOfTime2() {
    $(".timerbox").html("Time Remaining: 0 seconds");
    $(".quizbox").text("Out of Time!");
    $("#responsebox").text("The correct answer was: " + answers2[3]);
    $(".answerbox").empty();
    unanswered++;
    clearInterval(intervalId);
    intervalId = setInterval(questionAsk3, 5000);
}
// Everything for third question
function questionAsk3() {
    number = 30;
    $("#responsebox").empty();
    timer3();
    $(".quizbox").text(questions[2]);
    $("#box1").text(answers3[0]);
    $("#box2").text(answers3[1]);
    $("#box3").text(answers3[2]);
    $("#box4").text(answers3[3]);
    $(".answerbox").hover(function(){
        $(this).css("background-color", "pink");
        }, function(){
        $(this).css("background-color", "yellow");
    });
    $("#box2").on("click", function () {
        $(".timerbox").html("Time Remaining: " + number);
        $(".quizbox").text("Correct!");
        $(".answerbox").empty();
        correct++;
        clearInterval(intervalId);
        intervalId = setInterval(questionAsk4, 5000);
        
    })
    $("#box1, #box3, #box4").on("click", function () {
        $(".timerbox").html("Time Remaining: " + number);
        $(".quizbox").text("Incorrect! The correct answer was: " + answers3[1]);
        $(".answerbox").empty();
        clearInterval(intervalId);
        intervalId = setInterval(questionAsk4, 5000);
    })

    
}

function timer3() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement3, 1000);
}
function decrement3() {
    number--;
    $(".timerbox").html("Time Remaining: " + number);
    if (number === 0) {
      outOfTime3();
    }
}

function outOfTime3() {
    $(".timerbox").html("Time Remaining: 0 seconds");
    $(".quizbox").text("Out of Time!");
    $("#responsebox").text("The correct answer was: " + answers3[1]);
    $(".answerbox").empty();
    unanswered++;
    clearInterval(intervalId);
    intervalId = setInterval(questionAsk4, 5000);
}
// Everything for fourth question
function questionAsk4() {
    number = 30;
    $("#responsebox").empty();
    timer4();
    $(".quizbox").text(questions[3]);
    $("#box1").text(answers4[0]);
    $("#box2").text(answers4[1]);
    $("#box3").text(answers4[2]);
    $("#box4").text(answers4[3]);
    $(".answerbox").hover(function(){
        $(this).css("background-color", "pink");
        }, function(){
        $(this).css("background-color", "yellow");
    });
    $("#box2").on("click", function () {
        $(".timerbox").html("Time Remaining: " + number);
        $(".quizbox").text("Correct!");
        $(".answerbox").empty();
        
        clearInterval(intervalId);
        intervalId = setInterval(questionAsk5, 5000);
        
    })
    $("#box1, #box3, #box4").on("click", function () {
        $(".timerbox").html("Time Remaining: " + number);
        $(".quizbox").text("Incorrect! The correct answer was: " + answers4[1]);
        $(".answerbox").empty();
        
        clearInterval(intervalId);
        intervalId = setInterval(questionAsk5, 5000);
        
    })
   
    

}

function timer4() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement4, 1000);
}
function decrement4() {
    number--;
    $(".timerbox").html("Time Remaining: " + number);
    if (number === 0) {
      outOfTime4();
    }
}

function outOfTime4() {
    $(".timerbox").html("Time Remaining: 0 seconds");
    $(".quizbox").text("Out of Time!");
    $("#responsebox").text("The correct answer was: " + answers4[1]);
    $(".answerbox").empty();
    unanswered++;
    clearInterval(intervalId);
    intervalId = setInterval(questionAsk5, 5000);
}

// Everything for fifth question
function questionAsk5() {
    number = 30;
    $("#responsebox").empty();
    timer5();
    $(".quizbox").text(questions[4]);
    $("#box1").text(answers5[0]);
    $("#box2").text(answers5[1]);
    $("#box3").text(answers5[2]);
    $("#box4").text(answers5[3]);
    $(".answerbox").hover(function(){
        $(this).css("background-color", "pink");
        }, function(){
        $(this).css("background-color", "yellow");
    });
    $("#box2").on("click", function () {
        $(".timerbox").html("Time Remaining: " + number);
        $(".quizbox").text("Correct!");
        $(".answerbox").empty();
        
        clearInterval(intervalId);
        intervalId = setInterval(endGame, 5000);
        
    })
    $("#box1, #box3, #box4").on("click", function () {
        $(".timerbox").html("Time Remaining: " + number);
        $(".quizbox").text("Incorrect! The correct answer was: " + answers5[1]);
        $(".answerbox").empty();
        clearInterval(intervalId);
        intervalId = setInterval(endGame, 5000);
        
    })
    
    
    
}

function timer5() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement5, 1000);
}
function decrement5() {
    number--;
    $(".timerbox").html("Time Remaining: " + number);
    if (number === 0) {
      outOfTime5();
    }
}

function outOfTime5() {
    $(".timerbox").html("Time Remaining: 0 seconds");
    $(".quizbox").text("Out of Time!");
    $("#responsebox").text("The correct answer was: " + answers5[1]);
    $(".answerbox").empty();
    unanswered++;
    clearInterval(intervalId);
    intervalId = setInterval(endGame, 5000);
}
function endGame() {
    $(".quizbox").text("Game over");
    $("#box1").text("Correct: " + correct);
    $("#box2").text("Incorrect: " + (5 - correct - unanswered));
    $("#box3").text("Unanswered: " + unanswered);
    $("#box4").text("Start over?");

    $("#box4").on("click", function() {
        reset();
    });

}
// 5 questions with timer going down from 30 and the user must select the right answer
// if they select the right answer, display correct for 3 seconds, and add one to correct answers var, and then next question
// else if they select wrong answer, display incorrect and say right answer, and add one to incorrect
// else if they don't answer, display you ran out of time and say right answer, then add one to unanswered
// after 5th question, dislay correct incorrect and unanswered, and "start over" button