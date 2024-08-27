document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task"); 
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="complete-task">Complete</button>
                <button class="edit-task">Edit</button>
                <button class="remove-task">Remove</button>`;
 taskList.appendChild(li);
 taskInput.value = ""; 
 li.querySelector(".complete-task").addEventListener("click", () => {
 li.querySelector(".task-text").classList.toggle("completed");
            });
            li.querySelector(".edit-task").addEventListener("click", () => {
                const newTaskText = prompt("Edit your task:", taskText);
                if (newTaskText) {
                    li.querySelector(".task-text").textContent = newTaskText;
                }
            });
            li.querySelector(".remove-task").addEventListener("click", () => {
                taskList.removeChild(li);
            });
        }
    });

    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") { 
            addTaskButton.click();
        }
    });
});
