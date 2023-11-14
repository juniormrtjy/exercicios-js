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
  if (!task) return alert('Você precisa digitar algo.')

  if (!isEdit) {
    if (!isProgressActive) {
      addTaskToDOM(task)
      taskList.push({ task: task, checked: false })
      alertMessage('Você adicionou uma tarefa.')
    }
  } else {
    if (!isProgressActive) {
      editTaskInDOM(task)
      taskList[editIndex].task = task
      isEdit = false
      editIndex = undefined
      alertMessage('Você editou esta tarefa.')
    }
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
    if (!isProgressActive) {
      if (isEdit)
        return alert('Você não pode deletar enquanto edita uma tarefa.')
      el.parentNode.remove()
      alertMessage('Você removeu esta tarefa.')
    }

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

  // CHECK TASK
  if (el.classList.contains('check')) {
    editIndex = taskIndex
    const isChecked = taskList[editIndex].checked
    if (!isChecked) {
      el.classList.toggle('checked')
      checkTaskInDOM()
      return
    }

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
      addTaskToDOM(task.task)
      taskList.push(task)
    })
  }

  for (let i in taskList) {
    const check = document.querySelectorAll('.check')
    if (tasks[i].checked) check[i].classList.add('checked')
  }

  createDeleteMessage()
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
    element => element.task == el.parentNode.firstChild.textContent
  )
}

function setLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(taskList))
}

function checkTaskInDOM() {
  let checkBtn = taskList[editIndex].checked
  !checkBtn
    ? (taskList[editIndex].checked = true)
    : (taskList[editIndex].checked = false)

  setLocalStorage()
}

/* 

Se na taskList estiver true, o icon referente precisa ser marcado. Como eu faço isso?
eu preciso retornar todos os buttons disponíveis no load, ok. Eles vão poder ser acessados através do index deles e então, eu tenho controle sobre o que marcar.

se taskList[0] == true ? check[0].classList.add('checked')


*/

function alertMessage(txt) {
  isProgressActive = true
  const progress = document.querySelector('#file')
  const messageBox = document.querySelector('.delete-message')
  const paragraph = document.querySelector('.delete-message p')

  paragraph.textContent = txt
  const progressBar = setInterval(() => {
    if (progress.value > 0) {
      messageBox.style.top = '10px'
      progress.value -= 1
    } else {
      messageBox.style.top = '-500px'
      isProgressActive = false
    }
  }, 15)

  if (progress.value == 0) {
    progress.value = 100
    clearInterval(progressBar)
  }
}
