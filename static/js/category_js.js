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
    img.src = 'images/d2.jpg';
});

buttonTwo.addEventListener('click', function() {
    img.src = 'images/d3.jpg';
})
buttonTwo.addEventListener('click', function() {
    style.backgroundColor = '#7d9dbd';
    style.color = '#fff';
});
buttonThree.addEventListener('click', function() {
    img.src = 'images/shd.jpg';
})
buttonFour.addEventListener('click', () => {
    img.src = 'images/d2.jpg';
})
buttonFive.addEventListener('click', () => {
    img.src = 'images/d3.jpg';
})
buttonSix.addEventListener('click', () => {
    img.src = 'images/shd.jpg';
})