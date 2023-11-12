// PARAGRAPH
export function createTags(task) {
  const paragraph = document.createElement('p')
  const span = document.createElement('span')
  span.textContent = task

  const editBtn = document.createElement('i')
  editBtn.setAttribute('class', 'ph ph-pencil-simple-line edit_task')

  const removeBtn = document.createElement('i')
  removeBtn.setAttribute('class', 'ph ph-trash remove')

  paragraph.appendChild(span)
  paragraph.appendChild(editBtn)
  paragraph.appendChild(removeBtn)

  return paragraph
}
