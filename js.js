


const toDo = { 
    /**
     * this function add a task on the list
     * @e an event parameter that retur the value of the input
     */
    addTodo: function(e){
        e.preventDefault();
        let errorMessage = document.getElementById('error-message')
        if(!e.target.parentNode.firstElementChild.value.trim()){
                    errorMessage.style.display = "block"
                    errorMessage.innerText = "the note shoudln't be empty!"
                }else{
            errorMessage.style.display = "none"
            document.getElementById("task-list").
                appendChild(this.createTodoListElement(e.target.parentNode.firstElementChild.value));
        }
        e.target.parentNode.firstElementChild.value = ""
    }, 

    htmlElementWithClass: function(...classValues){
        let element = document.createElement(classValues[0])
        if(classValues.length > 1){
            for(let v= 1; v < classValues.length; v++){
                element.classList.add(classValues[v])
            }  
        }
        return element     

    },

    /**
     * This function create a div HTML element that contains
     * an input element and three functional buttons.
     * 
     * @userdata is the data to be placed in the input element.
     */
    createTodoListElement: function(userData){ 
        let div1 = this.htmlElementWithClass("div")
        let div = this.htmlElementWithClass("div", "task")
        let input = this.htmlElementWithClass("input", "user-data")
        let button = this.htmlElementWithClass("button","allButtons")
        let button1 = this.htmlElementWithClass("button","allButtons")
        let button2 = this.htmlElementWithClass("button","allButtons")

        input.value = userData
        input.type = "text"
        input.setAttribute("disabled","")

        button.innerText = "Ändra"
        button.insertBefore(this.htmlElementWithClass("i","fa-regular", "fa-pen-to-square"), button.firstChild)
        button.addEventListener('click',(e)=>this.updateTask(e))
        
        button1.innerText = "Radera"
        button1.insertBefore(this.htmlElementWithClass("i","fa-regular", "fa-trash-can"), button1.firstChild)
        button1.addEventListener('click',(e)=>this.deleteTask(e))

        button2.innerText = "Färdig"
        button2.insertBefore(this.htmlElementWithClass("i", "fa-regular", "fa-square-check"), button2.firstChild)
        button2.addEventListener('click',(e)=>this.completedTask(e))
        
        div.style.animationName = "show"
        div.style.animationDuration = "1s"
        div.append(input, button, button2, button1)
        
        return div1.appendChild(div)
    },

    /**
     * this function remove the task from the todo list
     * and add it to the completed list. It also remove 
     * the complete button functionality from the task. 
     * @e an event parameter
     */
    completedTask: function(e) {
        e.target.parentNode.remove()
        document.getElementById("task-list-completed").
                            appendChild(e.target.parentNode)
        e.target.parentNode.children[2].remove()
    },

    /**
     * this function update the input element
     * @e an event parameter
     */
    updateTask: function(e) {
        e.preventDefault()
        let input = e.target.parentNode.firstElementChild
        console.log(e.target.innerText) 
        if(e.target.innerText.trim() == "Ändra"){
            e.target.innerHTML = `<i class="fa-regular fa-pen-to-square"></i> Update`
            input.removeAttribute("disabled")
            input.focus()
        }else if(e.target.innerText.trim() == "Update"){
            e.target.innerHTML = `<i class="fa-regular fa-pen-to-square"></i> Ändra`
            input.setAttribute("disabled","")
            input.blur()
        }
    },

    /**
     * this function delete the task from the list
     * @e an event parameter
     */
    deleteTask: function(e){
        let parent = e.target.parentNode
        parent.style.animationName = "hide"
        parent.style.animationDuration = "1.1s"
        setTimeout(()=>parent.remove(), 1000);
    }

}

//call addTo to add a task to the list
toDo.addTask = document.getElementById("addTask")
toDo.addTask.addEventListener('click', (e)=> toDo.addTodo(e))  

//Repond to a key Enter event to add a task
toDo.getTask = document.getElementById("getTask")
toDo.getTask.addEventListener('keydown', (e)=> {
                    if(e.code == "Enter"){toDo.addTodo(e)}})

