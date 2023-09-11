// const num = parseFloat(prompt('Escolha um número:'))
const num = 55
document.body.innerHTML += `<p>Raíz quadrada: <span>${num ** 0.5}</span></p>`
document.body.innerHTML += `<p>${num} é inteiro? <span>${Number.isInteger(
  num
)}</span></p>`
document.body.innerHTML += `<p> <span></span></p>`
document.body.innerHTML += `<p>Arredondando para baixo: <span>${Math.floor(
  num
)}</span></p>`
document.body.innerHTML += `<p>Arredondando para cima <span>${Math.ceil(
  num
)}</span></p>`
document.body.innerHTML += `<p>Com duas casas decimais <span>${Number(
  num
).toFixed(2)}</span></p>`
document.body.innerHTML += `<p> <span></span></p>`

let nadda = document.getElementById('nada')
console.log(nadda.innerHTML)
