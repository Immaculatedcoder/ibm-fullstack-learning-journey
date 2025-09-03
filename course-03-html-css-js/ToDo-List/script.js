



function addTask() {
    // Get what the User inputted
    const input = document.getElementById("taskinput");
    const newTask = input.value.trim(); // .trim() is to remove the white spacing before and after

    // We need to check if 
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

    

}

function editTask(HTML) {

}

function deleteTask(HTML) {

}