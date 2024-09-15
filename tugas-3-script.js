document.getElementById("NewTaskBtn").addEventListener("click",newtask);

function newtask() {
  let task = prompt("Enter new task: ");

  if(task) {
    let newList = document.createElement("li");
    newList.className = "list-group-item d-flex align-items-center list-style";
    
    let taskName = document.createElement("span");
    taskName.className = "flex-grow-1";
    taskName.textContent = task;

    let delBtn = document.createElement("button");
    delBtn.className = "btn btn-outline-danger btn-sm";
    delBtn.style = "margin: 1px;"
    delBtn.textContent = " Delete";

    let delIcon = document.createElement("i");
    delIcon.className = "bi bi-x-circle";
    delBtn.prepend(delIcon);

    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-outline-success btn-sm";
    editBtn.style = "margin: 1px;"
    editBtn.textContent = " Edit";

    let editIcon = document.createElement("i");
    editIcon.className = "bi bi-pencil";
    editBtn.prepend(editIcon);
    
    newList.appendChild(taskName);
    newList.appendChild(editBtn);
    newList.appendChild(delBtn);

    document.getElementById("taskList").appendChild(newList);

    delBtn.addEventListener("click",function (){
      newList.remove();
    });

    editBtn.addEventListener("click",function(){
      let editTask = prompt("Edit task:", newList.childNodes[0].textContent.trim());
      newList.childNodes[0].textContent = editTask;
    });
  }
}