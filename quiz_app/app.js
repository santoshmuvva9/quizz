function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("HTML is what type of language ?", ["Scripting Language", "Markup Language","Programming Language", "Network Protocol"], "B"),
    new Question("  HTML uses ?", ["User defined tags", "Pre-specified tags", "Fixed tags defined by the language", "Tags only for linking"], "C"),
    new Question("The year in which HTML was first proposed _______.", ["1990", "1980","2000", "1995"], "A"),
    new Question("  Fundamental HTML Block is known as ___________.", ["HTML Body", "HTML Tag", "HTML Attribute", "HTML Element"], "B"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework"),
    new Question("HTML is what type of language ?", ["Scripting Language", "Markup Language","Programming Language", "Network Protocol"], "B"),
    new Question("  HTML uses ?", ["User defined tags", "Pre-specified tags", "Fixed tags defined by the language", "Tags only for linking"], "C"),
    new Question("The year in which HTML was first proposed _______.", ["1990", "1980","2000", "1995"], "A"),
    new Question("  Fundamental HTML Block is known as ___________.", ["HTML Body", "HTML Tag", "HTML Attribute", "HTML Element"], "B"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework"),
    new Question("HTML is what type of language ?", ["Scripting Language", "Markup Language","Programming Language", "Network Protocol"], "B"),
    new Question("  HTML uses ?", ["User defined tags", "Pre-specified tags", "Fixed tags defined by the language", "Tags only for linking"], "C"),
    new Question("The year in which HTML was first proposed _______.", ["1990", "1980","2000", "1995"], "A"),
    new Question("  Fundamental HTML Block is known as ___________.", ["HTML Body", "HTML Tag", "HTML Attribute", "HTML Element"], "B"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework"),
    new Question("HTML is what type of language ?", ["Scripting Language", "Markup Language","Programming Language", "Network Protocol"], "B"),
    new Question("  HTML uses ?", ["User defined tags", "Pre-specified tags", "Fixed tags defined by the language", "Tags only for linking"], "C"),
    new Question("The year in which HTML was first proposed _______.", ["1990", "1980","2000", "1995"], "A"),
    new Question("  Fundamental HTML Block is known as ___________.", ["HTML Body", "HTML Tag", "HTML Attribute", "HTML Element"], "B"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





