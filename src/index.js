document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form')

  form.addEventListener('submit',(e) => {
  e.preventDefault()
  let li = document.createElement('li')

  li.textContent = form.children[1].value
  document.querySelector('#tasks').appendChild(li)
  let delBtn = document.createElement('button')

  li.appendChild(delBtn)
  delBtn.textContent = "X"
  delBtn.addEventListener('click', ()=>(li.remove()))
  document.getElementById("create-task-form").reset()
  })

});
