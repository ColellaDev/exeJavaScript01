let numberOne = Number(prompt(`Digite o primeiro número:`))
let numberTwo = Number(prompt(`Digite o segundo número:`))

alert(`A soma dos números é ${numberOne + numberTwo}`)
alert(`A subtração dos números é ${numberOne - numberTwo}`)
alert(`A multiplicação dos números é ${numberOne * numberTwo}`)
alert(`A divisão dos números é ${numberOne / numberTwo}`)
alert(`O resto da divisão dos números é ${numberOne % numberTwo}`)

let resto = (numberOne + numberTwo) % 2

if (resto == 0) {
  alert(`A soma dos números é par`)
} else {
  alert(`A soma dos números é impar`)
}

if (numberOne == numberTwo) {
  alert(`Os números inseridos são iguais`)
} else {
  alert(`Os números inseridos são diferentes`)
}

