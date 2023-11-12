import { createTags } from './tags.js'

const section = document.querySelector('section')
let inputTask = document.querySelector('#task')
const taskList = []

let isEdit = false
let editIndex = undefined

// ADD TASK FUNCTION
export function addTask() {
  const task = inputTask.value
  if (!task) return alert('Você precisa digitar algo.')

  if (!isEdit) {
    addTaskToDOM(task)
    taskList.push(task)
  } else {
    editTaskInDOM(task)
    taskList[editIndex] = task
    isEdit = false
    editIndex = undefined
  }

  inputTask.focus()
  inputTask.value = ''
  setLocalStorage()
}

// REMOVE TASK FUNCTION
export default function removeItem(event) {
  const el = event.target

  const taskIndex = getTaskIndex(el)

  if (el.classList.contains('remove')) {
    el.parentNode.remove()

    taskList.splice(taskIndex, 1)
    setLocalStorage()
  }

  // EDIT TASK FUNCTION
  if (el.classList.contains('edit_task')) {
    const taskItem = el.parentNode
    inputTask.value = taskItem.firstChild.textContent
    editIndex = taskIndex
    isEdit = true
    inputTask.focus()
  }
}

// LOAD TASK FUNCTION
export function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'))

  if (tasks) {
    tasks.forEach(task => {
      addTaskToDOM(task)
      taskList.push(task)
    })
  }
}

function addTaskToDOM(task) {
  const paragraph = createTags(task)
  section.appendChild(paragraph)
}

function editTaskInDOM(task) {
  const allParagraph = document.querySelectorAll('section p')
  allParagraph[editIndex].firstChild.textContent = task
}

function getTaskIndex(el) {
  return taskList.findIndex(
    element => element == el.parentNode.firstChild.textContent
  )
}

function setLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(taskList))
}
