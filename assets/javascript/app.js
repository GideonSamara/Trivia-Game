$(document).ready(function () {

    //index.html page --> Button to start the Game and start the counter-ticking down.
    $("#start").on("click", function (startGame) {
        alert("Time Starts Now!");
    });

    //Doesnt work...

    // Timer function set at 60 seconds, decrement 1 second and when the timer hits 0, alerts Time's Up and then opens the done html window -- ?Not working!
    // var number = 100; //sets Timer to 100
    // var intervalID;
    // function run() {
    //    clearInterval(intervalId);
    //      intervalId = setInterval(decrement, 1000);
    //    }
    // function decrement() {
    //    number--;
    // $("#timer").html(number);
    // };

    // var timeleft = 60;
    // var downloadTimer = setInterval(function(){
    //  document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
    //  timeleft -= 1;
    //  if(timeleft <= 0){
    //    clearInterval(downloadTimer);
    //    document.getElementById("countdown").innerHTML = "Finished"
    //  }
    // }, 1000);

    // if (number === 0) { //when timer hits 0, alerts Timeup, and then goes to the end.html
    //    stop();
    //    alert("Time Up!");
    //    }
    // function stop() {
    //    clearInterval(intervalID);
    //    window.open("./done.html", "_self");
    // }

    //for question, if it matches answer, then win++
    var questions = [
        { //Question 1
            q: "In a full-stack bootcamp, you learn which of the following:",
            ans: ["Back-End", "Front-End", "Both", "Neither"],
            name: "option",
            correct: "Both",
        },

        { //Question 2
            q: "My favorite color is",
            ans: ["Blue", "Pink", "Green", "White"],
            name: "color",
            correct: "Green",
        },

        { //Question 3
            q: "Before class, I typically go to which of these coffee shops:",
            ans: ["Starbucks", "Coffee Bean", "Peet's Coffee", "I don't drink coffee"],
            name: "coffee",
            correct: "Coffee Bean",
        },

        { //Question 4
            q: "If I had to choose between my computer, phone, car, or tv, which would I choose?",
            ans: ["Phone", "TV", "Computer", "Car"],
            name: "electronic",
            correct: "TV",
        },

        { //Question 5
            q: "I have which of the following pets:",
            ans: ["Dog", "Cat", "Bird", "Fish"],
            name: "pet",
            correct: "Dog",
        },
    ];

    var labels = ["first", "second", "third", "fourth"];

    // function for displaying questions
    var questionDisplay = function () {
        $("#questions").empty();
        for (var i = 0; i < 4; i++) {
            $('.questions').prepend('<div class="' + q[i].name + '"></div>');
            $(q[i].divClass).append('<div class ="ques-title">' + q[i].q + '</div>');

            // loops through answers for each radio button
            for (var i = 0; i <= 3; i++) {
                $(questions[i].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + q[i].a[i] + '"/><label for="' + labels[i] + '">' + questions[i].ans[i] + '</label>');
            }
            $('.questions').prepend('<hr />');
        }
    }

    //conditional statement for wins and losses and unanswered
    var correctAnswer;
    var userAnswer;
    var numCorrect = 0;
    var numIncorrect = 0;
    var numUnanswered = 0;

    if (userAnswer === correctAnswer) {
        numCorrect++;
    } else if (userAnswer === "") {
        numUnanswered++;
    } else if (userAnswer !== correctAnswer) {
        {
            numIncorrect++;
        }
    }

}); //closes jquery tag