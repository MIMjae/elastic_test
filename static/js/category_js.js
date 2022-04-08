let img = document.querySelector('img');
/*let buttonOne = document.querySelector('#buttonOne');
let buttonTwo = document.querySelector('#buttonTwo');
let buttonThree = document.querySelector('#buttonThree');
let buttonFour = document.querySelector('#buttonFour');
let buttonFive = document.querySelector('#buttonFive');
let buttonSix = document.querySelector('#buttonSix');*/

buttonOne = document.getElementById('buttonOne');
buttonTwo = document.getElementById('buttonTwo');
buttonThree = document.getElementById('buttonThree');
buttonFour = document.getElementById('buttonFour');
buttonFive = document.getElementById('buttonFive');
buttonSix = document.getElementById('buttonSix');

function changeColor(){
    document.body.style.backgroundColor = '#7d9dbd';
    document.body.style.color = '#fff';
}

buttonOne.addEventListener('click', function(){
    img.src = 'images/schoolzone.jpg';
});

buttonTwo.addEventListener('click', function() {
    img.src = 'images/pedestrian.jpg';
})

buttonThree.addEventListener('click', function() {
    img.src = 'images/elder.jpg';
})
buttonFour.addEventListener('click', () => {
    img.src = 'images/bicycle.jpg';
})
buttonFive.addEventListener('click', () => {
    img.src = 'images/bike.jpg';
})
buttonSix.addEventListener('click', () => {
    img.src = 'images/car.jpg';
})