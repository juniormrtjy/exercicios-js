const container = document.querySelector('.container')
const div = document.createElement('div')

const tags = [
  { tag: 'p', text: 'My Exercise' },
  { tag: 'div', text: 'Frase 2' },
  {
    tag: 'section',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium accusantium non dolore ea vitae, cum rem quia illo, expedita soluta et? Eligendi totam excepturi possimus consequuntur blanditiis at eum iusto.'
  },
  { tag: 'footer', text: 'Powered By Paulo' }
]

for (let i = 0; i < tags.length; i++) {
  let { tag, text } = tags[i]
  let elements = document.createElement(tag)

  elements.innerText = text
  div.classList.add('grid', 'gap-4')
  div.appendChild(elements)
}

container.appendChild(div)
