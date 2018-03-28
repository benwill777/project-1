$(document).ready(function () {
    alert("Do you want to play Jeopordy ? Start Playing by selecting a question in the game board after clicking OK button")

    $("#music100").click(function () {
        //alert("you have selected Music for 100 ")
    });
});
totalPoints = 0;
//get the element that pops open the modal
let modalButton1 = document.getElementById('eats100');
let modalButton2 = document.getElementById('eats200');
let modalButton3 = document.getElementById('eats300');
let modalButton4 = document.getElementById('eats400');
let modalButton5 = document.getElementById('eats500');

let modal = document.getElementById('modalQues');
//get close button
let closeBtn = document.getElementById('closeBtn');
let submitBtn = document.getElementById('submitButton');
//listening for click 
modalButton1.addEventListener('click', openModal);
modalButton2.addEventListener('click', openModal);
modalButton3.addEventListener('click', openModal);
modalButton4.addEventListener('click', openModal);
modalButton5.addEventListener('click', openModal);

//listening for click to close/submit modal
closeBtn.addEventListener('click', closeModal);
submitBtn.addEventListener('click', closeModal);


function openModal() {
    // console.log(123)
    // change the modal's display from none to block
    modal.style.display = 'block';
}
// hides the modal 
function closeModal() {
    modal.style.display = 'none';
}