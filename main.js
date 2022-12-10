let tasks=[]

loadFromStorage()


function loadFromStorage(){
    const json2= localStorage.getItem("tasks")
    if(json2){
        tasks=JSON.parse(json2)
        addNote(true)
    }
    
}
    
function addTask(){
    let taskAreaBox=document.getElementById("taskarea")
    let taskArea=taskAreaBox.value
    let taskDateBox=document.getElementById("taskDate")
    let taskDate=taskDateBox.value
    let taskTimeBox=document.getElementById("taskTime")
    let taskTime=taskTimeBox.value
    event.preventDefault()

    let newTask={
        taskArea:taskArea,
        taskDate:taskDate,
        taskTime:taskTime,
    }
    tasks.push(newTask)

    saveInLocal()
    addNote(false)
    
    clear()

}

function saveInLocal(){
    let json=JSON.stringify(tasks)
    localStorage.setItem("tasks",json) 
}

function addNote(specificClass){
    
    let notes=document.getElementById("notes")
    let html=""
    let i=0
    for(let task of tasks){
        html+=`<div class="${specificClass?'note':'note animationNote'}">
               <i class="bi bi-file-x-fill"></i><svg xmlns="http://www.w3.org/2000/svg" onclick="deleteNote(${i})"  width="16" height="16" fill="currentColor" class="icon bi bi-file-x-fill" viewBox="0 0 16 16">
               <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z"/>
               </svg>
               <p class="taskContect">${task.taskArea}</p>
               <p class="date">${task.taskDate}</p>
               <p class="time">${task.taskTime}</p>
               </div>`
        i++
    }
notes.innerHTML=html
}

function deleteNote(index){
 tasks.splice(index,1)
 addNote(true)
 saveInLocal()
}

function clear(){
    let taskAreaBox=document.getElementById("taskarea")
    let taskDateBox=document.getElementById("taskDate")
    let taskTimeBox=document.getElementById("taskTime")


    taskAreaBox.value=""
    taskDateBox.value=""
    taskTimeBox.value=""
}




