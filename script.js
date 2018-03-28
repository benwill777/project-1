$(document).ready(function () {
    alert("Do you want to play Jeopordy ? Start Playing by selecting a question in the game board after clicking OK button")

    $("#music100").click(function () {
        //alert("you have selected Music for 100 ")
    });
});

let totalScore = 0;


let buttonQ1 = document.getElementById('eats100');
//on click of button 1/1
buttonQ1.addEventListener('click', openPrompt1);

function openPrompt1() {
    let question1 = prompt("Which restaurant in atlanta asks you what'll you have?")
    if (question1 != 'the varsity') {
        alert("wrong")
        totalScore = totalScore - 100
        console.log(totalScore)
    } else if (question1 = 'the varsity') {
        alert("correct")
        totalScore = totalScore + 100
        console.log(totalScore)
    }
    //find the "score" box
    $('#points').html('Total Points:' + totalScore)
    //push in new text
}
let buttonQ2 = document.getElementById('eats200');
//on click of button 1/1
buttonQ2.addEventListener('click', openPrompt2);

function openPrompt2() {
    let question2 = prompt("Which restaurant in Atlanta is on top of the Westin hotel?")
    if (question2 != 'the sundial') {
        alert("wrong")
        totalScore = totalScore - 200
        console.log(totalScore)
    } else if (question1 = 'the sundial') {
        alert("correct")
        totalScore = totalScore + 200
        console.log(totalScore)
    }
}
//find the "score" box
$('#points').html('Total Points:' + totalScore)