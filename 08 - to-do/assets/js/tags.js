// PARAGRAPH
export function createTags(task) {
  const paragraph = document.createElement('p')
  const span = document.createElement('span')
  span.textContent = task

  const editBtn = document.createElement('i')
  editBtn.setAttribute('class', 'ph ph-pencil-simple-line edit_task')

  const removeBtn = document.createElement('i')
  removeBtn.setAttribute('class', 'ph ph-trash remove')

  const checkBtn = document.createElement('button')
  checkBtn.setAttribute('class', 'ph ph-check check')

  paragraph.appendChild(span)
  paragraph.appendChild(editBtn)
  paragraph.appendChild(removeBtn)
  paragraph.appendChild(checkBtn)

  return paragraph
}

export function createDeleteMessage() {
  const main = document.querySelector('main')

  const div = document.createElement('div')
  div.setAttribute('class', 'delete-message')

  const paragraph = document.createElement('p')
  const progress = document.createElement('progress')

  paragraph.textContent = 'Você deletou esta task.'
  progress.setAttribute('value', '100')
  progress.setAttribute('max', '100')
  progress.setAttribute('id', 'file')
  div.appendChild(paragraph)
  div.appendChild(progress)

  main.appendChild(div)
}
