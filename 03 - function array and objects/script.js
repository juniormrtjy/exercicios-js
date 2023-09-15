// Pegando os ID's

function printForm() {
  // FORM ID
  const form = document.querySelector('#form')

  const pessoas = []

  function recebForm(event) {
    event.preventDefault()

    //INPUT's ID
    const name = document.querySelector('#f-name')
    const lastName = document.querySelector('#f-lname')
    const weight = document.querySelector('#f-peso')
    const height = document.querySelector('#f-altura')

    const criarPessoa = {
      nome: name.value,
      peso: weight.value,
      altura: height.value
    }

    pessoas.push(criarPessoa)
    console.log(pessoas)

    // SECTION ID
    const printResult = document.querySelector('#result')

    printResult.innerHTML += `<p><span><strong>Nome:</strong> ${criarPessoa.nome} </span>  <span><strong>Peso:</strong> ${criarPessoa.peso} </span> <span><strong>Altura:</strong> ${criarPessoa.altura} </span>  </p>`
  }
  form.addEventListener('submit', recebForm)
}

printForm()
