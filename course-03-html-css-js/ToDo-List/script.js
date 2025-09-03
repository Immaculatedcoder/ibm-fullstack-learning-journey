



function addTask() {
    // Get what the User inputted
    const input = document.getElementById("taskinput");
    const newTask = input.value.trim(); // .trim() is to remove the white spacing before and after

    // We need to check if the TextArea is empty
    if (newTask === "") {
        alert("Please enter a valid task!")
    } else {
        console.log(newTask)

        // Create new list, span, button

        // List
        const li = document.createElement("li");
        
        // Span (Text Area for newTask)
        const span = document.createElement("span");
        span.textContent = newTask; // .textContent grabs what ever is inside an element
        // .textContent still grabs text from elements hidden with CSS (display: none), unlike .innerText

        // Edit
        const editButton = document.createElement("button")
        editButton.textContent = "Edit";
        editButton.onclick = (function () {
            editTask(span);
        });

        // Delete
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = (function () {
            deleteTask(li)
        });
        
        // --- Append buttons and text to the list item
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        // Now add the li to the ul
        const ul = document.getElementById("todoList");
        ul.appendChild(li);

        // Clean the text area and ask the user to enter another text
        input.value = "";
        if (newTask !== "") {
            input.placeholder = "Enter another task!";
        } 
    }

}

function editTask(span) {
    // Prompt the user to enter a new description
    // prompt(message, defaultValue)
    const newTask = prompt("Edit your task", span.textContent);

    // Update the task if the input is not null or empty
    // We are using .trim() to remove white spaces.
    if (newTask !== null && newTask.trim() !== ""){
        span.textContent = newTask.trim();
    }
}

function deleteTask(li) {
    // Get the UL because we wanna modify a list
    const ul = document.getElementById("todoList");

    const result = confirm("Do you want to proceed?");
    if (result) {
        ul.removeChild(li)

        // Reset the place holder
        if (document.getElementById("todoList").querySelectorAll('li').length === 0) {
            document.getElementById("taskinput").placeholder = "Add a new task";
        }
    } 
    
}