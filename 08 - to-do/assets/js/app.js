import { createTask, getTasksOnLoad, removeTasks } from './tasks.js'

export function initialize() {
  const form = document.querySelector('form')
  const addTask = document.querySelector('.add__task')

  // PREVENT DEFAULT
  form.addEventListener('submit', e => {
    e.preventDefault()
  })

  // CREATE TASK
  addTask.addEventListener('click', () => {
    createTask()
  })

  // REMOVE TASK
  document.addEventListener('click', event => {
    removeTasks(event)
  })

  // LOAD TASK
  getTasksOnLoad()
}
