const [container, incrementBtn, decrementBtn, counter] = [
  document.createElement('section'),
  document.createElement('button'),
  document.createElement('button'),
  document.createElement('p'),
]

container.style.display = 'flex'
incrementBtn.textContent = '+'
decrementBtn.textContent = '-'
counter.textContent = '0'

incrementBtn.addEventListener('click', () => {
  counter.textContent = +counter.textContent + 1
})

decrementBtn.addEventListener('click', () => {
  counter.textContent = +counter.textContent - 1
})

container.append(incrementBtn, counter, decrementBtn)
document.body.appendChild(container)
