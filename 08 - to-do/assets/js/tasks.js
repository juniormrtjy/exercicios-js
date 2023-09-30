// GET HTML TAGS
const inputTask = document.querySelector('#input__task')
const section = document.querySelector('section')

// CREATE HTML TAGS
function createTags(value1) {
  return `<div><span>${value1}</span><i class="ph ph-trash remove"></i></div>`
}

// ADD TASK
const taskList = []
export function createTask() {
  const task = inputTask.value
  if (!task) return alert('Please, write a task.')

  taskList.push({ task: task })
  localStorage.setItem('task', JSON.stringify(taskList))

  section.innerHTML += createTags(task)
  inputTask.value = ''
}

// REMOVE TASK

export function removeTasks(event) {
  const el = event.target

  if (el.classList.contains('remove')) {
    el.parentNode.remove()

    const index = taskList.findIndex(item => {
      return item.task == el.parentNode.childNodes[0].textContent
    })

    taskList.splice(index, 1)
    localStorage.setItem('task', JSON.stringify(taskList))
  }
}

// PRINT TASKS ON HTML
export function getTasksOnLoad() {
  const getStorageTasks = JSON.parse(localStorage.getItem('task'))

  getStorageTasks.forEach(element => {
    section.innerHTML += createTags(element.task)
    taskList.push(element)
  })
}
