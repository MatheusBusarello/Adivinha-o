//Variaveis

const screen1 = document.querySelector(".Screen1")
const screen2 = document.querySelector(".Screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//EVENTOS
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', e)

//Função callback - função que é passada como argumento de outra função e que será chamada em outro momento.
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText =  `acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = ""
    xAttempts++

}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function e() {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}


