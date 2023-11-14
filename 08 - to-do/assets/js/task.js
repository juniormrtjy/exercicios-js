import { createTags, createDeleteMessage } from './tags.js'

const section = document.querySelector('section')
let inputTask = document.querySelector('#task')
const taskList = []

let isEdit = false
let editIndex = undefined
let isProgressActive = false

// ADD TASK FUNCTION
export function addTask() {
  const task = inputTask.value
  if (!task && !isProgressActive) {
    showUserMessage('Você precisa digitar algo.')
    return
  }

  if (!isEdit && !isProgressActive) {
    addTaskToDOM(task)
    taskList.push({ task, checked: false })
    showUserMessage('Você adicionou uma tarefa.')
  } else if (isProgressActive) {
    return
  } else {
    editTaskInDOM(task)
    taskList[editIndex].task = task
    isEdit = false
    editIndex = undefined
    showUserMessage('Você editou esta tarefa.')
  }

  inputTask.focus()
  inputTask.value = ''
  setLocalStorage()
}

// REMOVE TASK FUNCTION
export default function removeItem(event) {
  const el = event.target

  const taskIndex = getTaskIndex(el)

  if (el.classList.contains('remove') && !isProgressActive) {
    if (isEdit) {
      showUserMessage('Você não pode deletar enquanto edita uma tarefa.')
      return
    }
    el.parentNode.remove()
    showUserMessage('Você removeu esta tarefa.')

    taskList.splice(taskIndex, 1)
    setLocalStorage()
  }

  // EDIT TASK FUNCTION
  if (el.classList.contains('edit_task') && !isProgressActive) {
    const taskItem = el.parentNode
    inputTask.value = taskItem.firstChild.textContent
    editIndex = taskIndex
    isEdit = true
    inputTask.focus()
  }

  // CHECK TASK
  if (el.classList.contains('check') && !isProgressActive) {
    editIndex = taskIndex
    taskList[editIndex].checked = !taskList[editIndex].checked
    el.classList.toggle('checked')
    checkTaskInDOM()
  }
}

// LOAD TASK FUNCTION
export function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'))

  // PRINT TASK IN DOM
  if (tasks) {
    tasks.forEach(task => {
      addTaskToDOM(task.task, task.checked)
      taskList.push(task)
    })
  }

  createDeleteMessage()
}

function addTaskToDOM(task, checked) {
  const paragraph = createTags(task)
  if (checked) {
    paragraph.querySelector('.check').classList.add('checked')
  }
  section.appendChild(paragraph)
}

function editTaskInDOM(task) {
  const allParagraph = document.querySelectorAll('section p')
  allParagraph[editIndex].firstChild.textContent = task
}

function getTaskIndex(el) {
  return taskList.findIndex(
    element => element.task == el.parentNode.firstChild.textContent
  )
}

function setLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(taskList))
}

function checkTaskInDOM() {
  setLocalStorage()
}

function showUserMessage(message, time = 30) {
  isProgressActive = true
  const progress = document.querySelector('#file')
  const messageBox = document.querySelector('.delete-message')
  const paragraph = document.querySelector('.delete-message p')

  paragraph.textContent = message
  const progressBar = setInterval(() => {
    if (progress.value > 0) {
      messageBox.style.top = '10px'
      progress.value -= 1
    } else {
      messageBox.style.top = '-500px'
      isProgressActive = false
    }
  }, time)

  if (progress.value == 0) {
    progress.value = 100
    clearInterval(progressBar)
  }
}
