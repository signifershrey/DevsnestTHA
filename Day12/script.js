//on refreshing
showTask();

let addTaskInput = document.getElementById("addtaskinput");
let addTaskBtn = document.getElementById("addtaskbtn");
// console.log(addTaskBtn);

addTaskBtn.addEventListener("click", function () {
  addTaskInputValue = addTaskInput.value;

  //checking if the value is entered or not
  if (addTaskInputValue.trim() != 0) {
    let webTask = localStorage.getItem("localtask");
    if (webTask == null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(webTask);
    }

    //adding values in array
    taskObj.push({ task_name: addTaskInputValue, completeStatus: false });
    //adding to local
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addTaskInput.value = "";
  }
  showTask();
});

function showTask() {
  //getting items
  let webTask = localStorage.getItem("localtask");
  if (webTask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webTask);
  }
  let html = "";
  let addedTaskList = document.getElementById("addedtasklist");

  taskObj.forEach((item, index) => {
    if (item.completeStatus == true) {
      taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
    } else {
      taskCompleteValue = `<td>${item.task_name}</td>`;
    }
    html += `<tr>
                    <th scope="row">${index + 1}</th>
                    ${taskCompleteValue}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                  
                     <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
               </tr>`;
    //  <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
  });
  addedTaskList.innerHTML = html;
}

// edittask
function edittask(index) {
  let saveIndex = document.getElementById("saveindex");
  let addTaskBtn = document.getElementById("addtaskbtn");
  let saveTaskBtn = document.getElementById("savetaskbtn");
  saveIndex.value = index;

  let webTask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webTask);
  addTaskInput.value = taskObj[index]["task_name"];
  addTaskBtn.style.display = "none";
  saveTaskBtn.style.display = "block";
}

//savetask
let saveTaskBtn = document.getElementById("savetaskbtn");
saveTaskBtn.addEventListener("click", function () {
  let webTask = localStorage.getItem("localtask");
  let addTaskBtn = document.getElementById("addtaskbtn");
  let taskObj = JSON.parse(webTask);
  let saveIndex = document.getElementById("saveindex").value;

  for (keys in taskObj[saveIndex]) {
    if (keys == "task_name") {
      taskObj[saveIndex].task_name = addTaskInput.value;
    }
  }

  // taskObj[saveIndex] = addTaskInput.value;
  saveTaskBtn.style.display = "none";
  addTaskBtn.style.display = "block";
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  addTaskInput.value = "";
  showTask();
});

//delete
function deleteitem(index) {
  let webTask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webTask);

  taskObj.splice(index, 1);
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  showTask();
}

//delete all
let deleteAllBtn = document.getElementById("deleteallbtn");
deleteAllBtn.addEventListener("click", function () {
  let saveTaskBtn = document.getElementById("savetaskbtn");
  let addTaskBtn = document.getElementById("addtaskbtn");

  let webTask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webTask);
  if (webTask == null) {
    taskObj = null;
  } else {
    taskObj = JSON.parse(webTask);
    taskObj = [];
  }

  saveTaskBtn.style.display = "none";
  addTaskBtn.style.display = "block";
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  showTask();
});
