

let addTask = document.getElementById("addTask")


addTask.addEventListener('click',(e)=> addTodo(e))



function addTodo(e){
    e.preventDefault()
    let input = e.target.parentNode.firstElementChild
    document.getElementById('task-list').
                    appendChild(createTodoListElement(input.value))
}


function createTodoListElement(userData){
    let li = document.createElement("li")
    let div = document.createElement("div")
    let input = document.createElement("input")
    let button = document.createElement("button")
    let button1 = document.createElement("button")
    let button2 = document.createElement("button")

    input.value = userData
    input.type = "text"
    input.classList.add("user-data")
    input.setAttribute("disabled","")

    button.innerText = "amend"
    button.addEventListener('click',(e)=>updateTask(e))
    button1.innerText = "delete"
    button1.addEventListener('click',(e)=>deleteTask(e))
    button2.innerText = "Complete"
    button2.addEventListener('click',(e)=>completedTask(e))
    
    div.classList.add("task")
    div.append(input, button, button1, button2)
    
    return li.appendChild(div)
    
}

function completedTask(e){
    e.target.parentNode.remove()
    document.getElementById("task-list-completed").
                        appendChild(e.target.parentNode)
    e.target.parentNode.lastElementChild.remove()
}

function updateTask(e){
    e.preventDefault()
    let input = e.target.parentNode.firstElementChild
    if(e.target.innerText == "amend"){
        e.target.innerText = "update"
        input.removeAttribute("disabled")
    }else if(e.target.innerText == "update"){
        e.target.innerText = "amend"
        input.setAttribute("disabled","")
    }

}
function deleteTask(e){
    e.target.parentNode.remove()
}