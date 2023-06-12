

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;

  // Add the task to the tasks array
  tasks.push(task);

  // Clear the input field
  taskInput.value = "";

  // Fetch and display the updated tasks
  fetchAndDisplayTasks();
}

// Function to delete a task
function deleteTask(index) {
  fetch('https://dummyjson.com/todos/add')
  // Remove the task at the specified index
  tasks.splice(index, 1);

  // Fetch and display the updated tasks
  fetchAndDisplayTasks();
}

// Attach event listener to the add button
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addTask);

// Initial fetch and display of tasks
fetchAndDisplayTasks();






