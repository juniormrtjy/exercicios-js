function setDate() {
  const data = new Date()
  const p = document.querySelector('section p')

  const options = {
    dateStyle: 'full',
    timeStyle: 'medium'
  }

  p.innerHTML = data.toLocaleString('pt-BR', options)
}

setDate()
