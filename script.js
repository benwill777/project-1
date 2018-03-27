$(document).ready(function () {
    alert("Do you want to play Jeopordy ? Start Playing by selecting a question in the game board after clicking OK button")

    $("#music100").click(function () {
        //alert("you have selected Music for 100 ")
    });
});
//get the element that pops open the modal
let modalButton = document.getElementById('eats100');

let modal = document.getElementById('modalQues');
//get close button
let closeBtn = document.getElementById('closeBtn');
//listening for click 
modalButton.addEventListener('click', openModal);
//listening for click to close/submit modal
modalButton.addEventListener('click', closeModal);

function openModal() {
    // console.log(123)
    // change the modal's display from none to block
    modal.style.display = 'block';
}