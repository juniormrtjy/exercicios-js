export const divTimer = document.querySelector('#timer')
export const p = document.querySelector('p')
export const button = document.querySelectorAll('button')

function createTimer(seconds) {
  const data = new Date(seconds * 1000)

  return data.toLocaleString('pt-br', { timeStyle: 'medium', timeZone: 'gmt' })
}

let seconds = 0
let getInterval
let timerIsRunning = false

document.addEventListener('click', e => {
  const el = e.target

  if (el.classList.contains('iniciar')) {
    if (!timerIsRunning) {
      timerIsRunning = true
      getInterval = setInterval(() => {
        p.innerHTML = createTimer(++seconds)
      }, 1000)
    }
  }

  if (el.classList.contains('pausar')) {
    if (timerIsRunning) {
      timerIsRunning = false
      clearInterval(getInterval)
    }
  }

  if (el.classList.contains('zerar')) {
    timerIsRunning = false
    clearInterval(getInterval)
    seconds = 0
    p.innerHTML = '00:00:00'
  }
})
