// INPUTS
const form = document.querySelector('form')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
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

  //
  // ENVIANDO AS MENSAGENS
  let imc = Number(peso.value / Math.pow(altura.value, 2))

  if (imc > 0 && imc < 18.5) {
    console.log(`Seu IMC é de ${imc}, Abaixo do peso`, imc)
    paragraph.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, Abaixo do peso`
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é de ${imc.toFixed(2)}, Peso normal`, typeof imc)
    paragraph.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, Peso normal`
  } else if (imc >= 25 && imc <= 29.9) {
    console.log(`Seu IMC é de ${imc.toFixed(2)}, Sobrepeso`)
    paragraph.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, Sobrepeso`
  } else if (imc >= 30 && imc <= 34.9) {
    console.log(`Seu IMC é de ${imc.toFixed(2)},Obesidade grau 1`)
    paragraph.innerHTML = `Seu IMC é de ${imc.toFixed(2)},Obesidade grau 1`
  } else if (imc >= 35 && imc <= 39.9) {
    console.log(`Seu IMC é de ${imc.toFixed(2)}, Obesidade grau 2`)
    paragraph.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, Obesidade grau 2`
  } else if (imc >= 40 && imc < Infinity) {
    console.log(`Seu IMC é de ${imc.toFixed(2)}, Obesidade grau 3`)
    paragraph.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, Obesidade grau 3`
  } else if (imc == Infinity) {
    console.log('Valor da altura inválido')
    paragraph.innerHTML = `Valor da altura inválido`
  } else if (imc == 0) {
    console.log('Valor do peso inválido')
    paragraph.innerHTML = `Valor do peso inválido`
  } else {
    paragraph.innerHTML = `Você não digitou um valor válido`
  }
}
