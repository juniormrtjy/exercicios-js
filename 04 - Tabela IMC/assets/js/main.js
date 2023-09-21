// INPUTS
const form = document.querySelector('form')
const pesoInput = document.querySelector('#peso')
const alturaInput = document.querySelector('#altura')
const paragraph = document.querySelector('form p')

//
//
// preventDefault()
function preventRefresh() {
  form.addEventListener('submit', e => {
    e.preventDefault()
  })
}

preventRefresh()

//
//
//

// CALC IMC
function calcImc() {
  // paragraph.innerHTML = `<p>Paulo</p>`
  const peso = Number(pesoInput.value)
  const altura = Number(alturaInput.value)

  if (!peso) {
    console.log('Peso inválido')
    displayMessage('Peso Inválido')
    return
  }

  if (!altura) {
    console.log('Altura inválida')
    displayMessage('Altura Inválida')
    return
  }

  //
  // ENVIANDO AS MENSAGENS
  let imc = Number(peso / Math.pow(altura, 2))
  const message = getMessage(imc)

  displayMessage(`Seu IMC é de ${imc.toFixed(2)} (${message})`)
}

function getMessage(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso'
  } else if (imc <= 24.9) {
    return 'Peso normal'
  } else if (imc <= 29.9) {
    return 'Sobrepeso'
  } else if (imc <= 34.9) {
    return 'Obesidade grau 1'
  } else if (imc <= 39.9) {
    return 'Obesidade grau 2'
  } else if (imc >= 40) {
    return 'Obesidade grau 3'
  } else {
    return `Você não digitou um valor válido`
  }
}

function displayMessage(message) {
  paragraph.innerHTML = message
}
