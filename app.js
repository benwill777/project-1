$(function () {
    let totalScore = 0;
    //set the win condition 
    const winningScore = 3000;
    //set the lose condition
    const losingScore = -99;
    //define  all of my questions and answers... point values in an array
    const questions = [{
        questionId: 1,
        questionText: "Which restaurant in atlanta asks you what'll you have?",
        answer: "the varsity",
        pointValue: 100
    }, {
        questionId: 2,
        questionText: "what concert venue is closed, and close to PCM?",
        answer: "the masquerade",
        pointValue: 100
    }, {
        questionId: 3,
        questionText: "how do we say you guys?",
        answer: "y'all",
        pointValue: 100
    }, {
        questionId: 4,
        questionText: "you __ the door when people behind you need inside?*one word*",
        answer: "hold",
        pointValue: 100
    }, {
        questionId: 5,
        questionText: "Which famous civil rights activist has a center off of freedom parkway?",
        answer: "mlk jr",
        pointValue: 100
    }, {
        questionId: 6,
        questionText: "what did humpty dumpty eat?",
        answer: "eggs",
        pointValue: 200
    }, {
        questionId: 7,
        questionText: "which famous venue is on peachtree street?",
        answer: "yellowdays",
        pointValue: 200
    }, {
        questionId: 8,
        questionText: "the shortened term for the chatahoochee river?",
        answer: "the hooch",
        pointValue: 200
    }, {
        questionId: 9,
        questionText: "this park is the host of many cultural festivals?",
        answer: "piedmont park",
        pointValue: 200
    }, {
        questionId: 10,
        questionText: "general __ burned a lot of atlanta down many years ago?",
        answer: "general sherman",
        pointValue: 200
    }, {
        questionId: 11,
        questionText: "Which restaurant in Atlanta is on top of the Westin hotel?",
        answer: "the sundial",
        pointValue: 300
    }, {
        questionId: 12,
        questionText: "Who made the song oh atlanta?",
        answer: "Allison Krauss ",
        pointValue: 300
    }, {
        questionId: 13,
        questionText: "the univeral symbol of jquery?",
        answer: "$",
        pointValue: 300
    }, {
        questionId: 14,
        questionText: "if you want to walk from point a to point b within atlanta, this path helps?",
        answer: "the beltline",
        pointValue: 300
    }, {
        questionId: 15,
        questionText: "who are the best web devs-in training within the city of atlanta?",
        answer: "wdi15",
        pointValue: 300
    }, {
        questionId: 16,
        questionText: "name the ramen spot in PCM?",
        answer: "ton ton",
        pointValue: 400
    }, {
        questionId: 17,
        questionText: "name this ampitheatre in south ATL?",
        answer: "lakewood",
        pointValue: 400
    }, {
        questionId: 18,
        questionText: "whats the abbreviation for Atlanta?",
        answer: "ATL",
        pointValue: 400
    }, {
        questionId: 19,
        questionText: "name our newest sports team?",
        answer: "Atlanta United",
        pointValue: 400
    }, {
        questionId: 20,
        questionText: "wht is the name of this category?",
        answer: "people",
        pointValue: 400
    }, {
        questionId: 21,
        questionText: "what street is the krog market on?",
        answer: "krog st",
        pointValue: 500
    }, {
        questionId: 22,
        questionText: "which music venue in Atlanta is often refered to as tabby?",
        answer: "the tabernacle",
        pointValue: 500
    }, {
        questionId: 23,
        questionText: "who says you ones instead of y'all?",
        answer: "nobody",
        pointValue: 500
    }, {
        questionId: 24,
        questionText: "what are braves games good for?",
        answer: "tailgating",
        pointValue: 500
    }, {
        questionId: 25,
        questionText: "who wants to succeed in the wdi program in atlanta?",
        answer: "me",
        pointValue: 500
    }];
    //starting all of the event listeners on load 
    startEventListeners();
    //set init score
    updateScoreDisplay();

    //on click, call the queston
    function startEventListeners() {
        $(document).on(
            'click',
            '.question',
            askQuestion
        );
    }

    function askQuestion() {
        let $allButton = $(this);
        const questionId = $allButton.data('question-id');
        //jQuery.grep()Finds the elements of an array which satisfy a filter function. The original array is not affected.
        const question = $.grep(
            questions,
            function (question) {
                return question.questionId === questionId;
            }
        )[0];
        //make sure it doesnt matter if the correct or input answers are case-insensitive
        let answer = prompt(question.questionText);
        if (answer.toLowerCase() === question.answer.toLowerCase()) {
            alert("Correct!");
            totalScore += question.pointValue;
        } else {
            alert("Wrong!");
            totalScore -= question.pointValue;
        }
        //when the selected element is selected, disable the button  so it can't be clicked again
        $allButton.attr('disabled', 'disabled');
        updateScoreDisplay();

        checkWinCondition();
    }

    function updateScoreDisplay() {
        $('#points').html('Total Points:' + totalScore);
    }
    // if your score is greater than the "set" winning score then alert win..... lose if not
    function checkWinCondition() {
        if (totalScore >= winningScore) {
            alert('You win!!!!! Play Again!');
            restartGame();
            //when your score goes below the set losing score, you LOSE
        } else if (totalScore < losingScore) {
            alert('You lose!!!!! Play Again!');
            restartGame();
        }
    }
    //when game restart function fires, change all disabled btns back to orig state.resetscore
    function restartGame() {
        totalScore = 0;
        $('.question').removeAttr('disabled');
        updateScoreDisplay();
    }
});