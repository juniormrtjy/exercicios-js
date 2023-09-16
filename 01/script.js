// nome
// const nome = prompt('Digite o seu nome completo:')

function printName() {
  const form = document.querySelector('#form')
  const nome = document.querySelector('#nome')
  const result = document.querySelector('#content')
  function escopo(e) {
    e.preventDefault()

    // const nome = 'Paulo Roberto de Souza Tavares Junior'
    result.innerHTML += `<p>O seu nome é: <span>${nome.value}</span>.</p>`
    result.innerHTML += `<p>Seu nome tem <span>${nome.value.length}</span> letras</p>`
    result.innerHTML += `<p>A segunda letra do seu nome é <span>${nome.value.slice(
      1,
      2
    )}</span></p>`
    result.innerHTML += `<p>Qual o primeiro índice da letra a no seu nome? <span>${nome.value.indexOf(
      'a'
    )}</span></p>`
    result.innerHTML += `<p>Qual é o último índice da letra a no seu nome? <span>${nome.value.lastIndexOf(
      'a'
    )}</span></p>`
    result.innerHTML += `<p>As últimas 3 letras do seu nome são: <span>${nome.value.slice(
      -3
    )}</span></p>`
    result.innerHTML += `<p>As palavras do seu nome são: <span>${nome.value.split(
      ' '
    )}</span></p>`
    result.innerHTML += `<p>Seu nome com letras maiúsculas: <span>${nome.value.toUpperCase()}</span></p>`
    result.innerHTML += `<p>Seu nome com letras minúsculas: <span>${nome.value.toLocaleLowerCase()}</span></p>`
    result.innerHTML += `<hr>`
  }

  form.addEventListener('submit', escopo)
}

printName()
