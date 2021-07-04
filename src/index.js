document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let newTask = document.createElement('LI');
    newTask.textContent = e.target[0].value; 
    let newButton = document.createElement('BUTTON')
    console.log(newButton)
    newButton.setAttribute("data-description", e.target[0].value)
    newButton.setAttribute("id", 'taskButton');
    newButton.textContent = 'X'

    newButton.addEventListener('click', () => {
      console.log(document.querySelectorAll('li'));
      document.querySelectorAll('li').forEach(element => {
        element.remove();
      })
      document.querySelectorAll('#taskButton').forEach(element => {
        element.remove()
      })
    })
    
    newTask.contentEditable = true;
    //newTask.appendChild(newButton)
    document.querySelector("ul").append(newTask, newButton);
    document.querySelector("#create-task-form").reset();

  })

  
});
