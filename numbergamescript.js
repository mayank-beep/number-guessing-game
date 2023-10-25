const guess = document.querySelector('.guess')
const score = document.querySelector('.score')
let highScore = document.querySelector('.highScore')
const result = document.querySelector('.result')
const check = document.querySelector('.check')
const number = document.querySelector('#number')
const again = document.querySelector('.again')
let guessNumber = document.querySelector('.RandomNo')

let Randomnumber = Math.floor(Math.random() * 20) + 1
let score1 = 20
check.addEventListener('click', function() {
    console.log(Randomnumber);

    if (number.value == '') {
        result.textContent = "please enter the number"

    } else if (number.value > Randomnumber) {
        result.textContent = "number is too big"
        if (score1 > 0) {
            score1 = score1 - 1
        }


    } else if (number.value < Randomnumber) {
        result.textContent = "number is too small"
            // score1 = score1 - 1
        if (score1 > 0) {
            score1 = score1 - 1
        }
    

    } else if (number.value == Randomnumber) {
        result.textContent = 'conratulations you are winner'
        document.querySelector('.GTN').textContent = 'conratulations you won'
        guessNumber.textContent = Randomnumber
        document.querySelector('.hero').style.backgroundColor = '#01ff70'
        
        if (score1 > highScore.textContent) {
            highScore.textContent = score1
        }

    }
    score.textContent = score1


    if (score1 == 0) {
        document.querySelector('.hero').style.backgroundColor = 'red'
        document.querySelector('.GTN').textContent = 'Game over try again to play'
        guessNumber.textContent = Randomnumber




    }
})




again.addEventListener('click', function() {
    document.querySelector('.hero').style.backgroundColor = 'black'
    Randomnumber = Math.trunc(Math.random() * 20);
    guessNumber.textContent = '?'
    score.textContent = 20
    score1 = 20
    number.value = ""
    document.querySelector('.GTN').textContent = 'guess the number!!'
    result.textContent = 'start guessing.....'



})
