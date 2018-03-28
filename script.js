$(document).ready(function () {
    alert("Do you want to play Jeopordy ? Start Playing by selecting a question in the game board after clicking OK button")

    $("#music100").click(function () {
        //alert("you have selected Music for 100 ")
    });
});

//get the element that pops open the modal
// let modalButton = document.getElementById('eats100');


// let modal = document.getElementById('modalQues');
// //get close button
// let closeBtn = document.getElementById('closeBtn');
// let submitBtn = document.getElementById('submitButton');
// //listening for click 
// modalButton.addEventListener('click', openModal);


// //listening for click to close/submit modal

// closeBtn.addEventListener('click', closeModal);
// submitBtn.addEventListener('click', closeModal);


// function openModal() {
//     // console.log(123)
//     // change the modal's display from none to block
//     modal.style.display = 'block';
// }
// // hides the modal 
// function closeModal() {
//     modal.style.display = 'none';
// }

let totalScore = 0;
score = []

let buttonQ1 = document.getElementById('eats100');
//on click of button 1/1
buttonQ1.addEventListener('click', openPrompt);

function openPrompt() {
    let question1 = prompt("Which restaurant in atlanta asks you what'll you have?")
    if (question1 != 'the varsity') {
        alert("wrong")
        totalScore = totalScore - 100
        console.log(totalScore)
    } else if (question1 = 'the varsity') {
        alert("correct")
        totalScore = totalScore + 100
        score.push = totalScore

        console.log(score)
    }
}