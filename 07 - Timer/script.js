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

// BUTTON START
button[0].addEventListener('click', () => {
  if (!timerIsRunning) {
    timerIsRunning = true
    getInterval = setInterval(() => {
      p.innerHTML = createTimer(++seconds)
    }, 1000)
  }
})

// BUTTON PAUSE
button[1].addEventListener('click', () => {
  if (timerIsRunning) {
    timerIsRunning = false
    clearInterval(getInterval)
  }
})

// BUTTON RESTART
button[2].addEventListener('click', () => {
  timerIsRunning = false
  clearInterval(getInterval)
  seconds = 0
  p.innerHTML = '00:00:00'
})
