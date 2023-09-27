import { button } from './script.js'
import { divTimer } from './script.js'
import { p } from './script.js'

const head = document.querySelector('h1')

// BODY
document.body.style.background = '#171717'
document.body.style.color = '#e5e5e5'
document.body.style.fontFamily = 'sans-serif'
document.body.style.padding = '10px'

// HEADING 1
head.style.textAlign = 'center'
head.style.padding = '30px'

// DIV
divTimer.style.background = '#262626'
divTimer.style.display = 'grid'
divTimer.style.alignContent = 'center'
divTimer.style.minHeight = '400px'
divTimer.style.padding = '20px'

// <p>
p.style.textAlign = 'center'
p.style.padding = '10px'
p.style.fontSize = '3em'

// BUTTON
button.forEach(btns => {
  btns.style.fontSize = '1.5em'
  btns.style.color = '#fff'
  btns.style.background = '#2E57FA'
  btns.style.width = '200px'
  btns.style.margin = 'auto'
  btns.style.marginBlockStart = '10px'
  btns.style.padding = '8px 20px'
  btns.style.border = 'none'
  btns.style.borderRadius = '5px'
  btns.style.cursor = 'pointer'
})
