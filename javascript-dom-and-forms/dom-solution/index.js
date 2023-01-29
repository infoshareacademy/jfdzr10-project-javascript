// 0
console.log('DOM API')

// 1
const header = document.getElementById('header')
console.log(header)

// 2
header.classList.add('header')

// 3
header.innerText = 'Jestem nagłówkiem'

// 4
const bodyWrapper = document.querySelector('body')

const listItems = ['a', 'b', 'c', 'd']

const list = document.createElement('ol')

listItems.forEach(item => {
  const listItem = document.createElement('li')
  listItem.innerText = item
  list.append(listItem)
})

bodyWrapper.append(list)

// 5
const items = document.querySelectorAll('li')

items.forEach(item => {
  item.classList.add('listItem')
})

// 6
header.classList.remove('header')

// 7
header.remove()

// 8
function toggleBackgroundColor() {
  !bodyWrapper.style.backgroundColor
    ? (bodyWrapper.style.backgroundColor = '#123123')
    : (bodyWrapper.style.backgroundColor = '')
}

const toggleButton = document.createElement('button')
toggleButton.innerText = 'KLIKNIJ MNIE'

toggleButton.addEventListener('click', toggleBackgroundColor)

bodyWrapper.append(toggleButton)
