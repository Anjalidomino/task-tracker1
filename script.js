let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();

  if (taskName === "") return;

  const task = {
    id: Date.now(),
    name: taskName,
    completed: false
  };

  tasks.push(task);
  input.value = "";

  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.name;
    span.onclick = () => toggleTask(task.id);

    if (task.completed) {
      span.classList.add("completed");
    }

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => deleteTask(task.id);

    li.appendChild(span);
    li.appendChild(delBtn);

    list.appendChild(li);
  });

  document.getElementById("totalTasks").textContent = tasks.length;
  document.getElementById("completedTasks").textContent =
    tasks.filter(task => task.completed).length;
}

