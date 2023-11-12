import removeItem, { addTask, loadTasks } from './task.js'

const form = document.querySelector('form')
const addTaskBtn = document.querySelector('.add_task')

form.addEventListener('submit', e => {
  e.preventDefault()
})

addTaskBtn.addEventListener('click', addTask)

document.addEventListener('click', removeItem)

loadTasks()
