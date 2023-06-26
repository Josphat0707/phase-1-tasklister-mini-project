document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskDescription = document.getElementById("new_task_description").value;

    if (taskDescription !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = taskDescription;

      let btn =document.createElement("button")
      btn.addEventListener(`click`, deleteTask)
      btn.textContent = `delete`

      taskList.appendChild(newTask );

      newTask.appendChild(btn)
    
      document.getElementById("new_task_description").value = "";
    }
    
  });
});

function deleteTask(e){
  e.target.parentNode.remove()
}
