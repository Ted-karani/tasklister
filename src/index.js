document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (event)=>{

    event.preventDefault();
    const data = document.querySelector("#new-task-description").value;
    function buildToDo(data){
      const tasks = document.querySelector("#tasks")
      const li = document.createElement("li")
      li.textContent = data;

      tasks.appendChild(li)
    }

    
    buildToDo(data)
  });


});











