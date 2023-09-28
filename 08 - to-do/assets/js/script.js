const form = document.querySelector('form')
const inputTask = document.querySelector('#input__task')
const submit = document.querySelector('.add__task')
const section = document.querySelector('section')

form.addEventListener('submit', e => {
  e.preventDefault()
})

// CREATE HTML TAGS
function createTags(value1) {
  return `<div><span>${value1}</span><i class="ph ph-trash remove"></i></div>`
}

const taskList = []
function createTask() {
  const task = inputTask.value
  if (!task) return alert('Please, write a task.')
  if (
    task.includes('pedro') ||
    task.includes('Pedro') ||
    task.includes('pascal') ||
    task.includes('Pascal')
  ) {
    return alert('Nada de pedro')
  }
  taskList.push({ task: task })
  localStorage.setItem('task', JSON.stringify(taskList))

  section.innerHTML += createTags(task)
  inputTask.value = ''
}

function getTasksOnLoad() {
  const getStorageTasks = JSON.parse(localStorage.getItem('task'))

  getStorageTasks.forEach(element => {
    section.innerHTML += createTags(element.task)
    taskList.push(element)
  })
}

document.addEventListener('click', event => {
  const el = event.target

  if (el.classList.contains('remove')) {
    el.parentNode.remove()

    const index = taskList.findIndex(item => {
      return item.task == el.parentNode.childNodes[0].textContent
    })

    taskList.splice(index, 1)
    localStorage.setItem('task', JSON.stringify(taskList))
  }
})
