const prompt = require("prompt-sync")();
let tasks = [];
let currentId = 1;
let running = true;

while (running) {
  console.log("\nTask Manager");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Complete Task");
  console.log("4. Delete Task");
  console.log("5. Exit");

  let choice = prompt("Choose an option: ");

  if (choice === "1") {
    let title = prompt("Enter task Title: ");
    tasks.push({ id: currentId++, title, completed: false });
    console.log("Task added successfully.");

    // let description = prompts("Enter task description: ");
    // tasks.push({ id: currentId++, description, completed: false });
    // console.log("Task added.");
  } 
  else if (choice === "2") {
    if (tasks.length === 0) {
      console.log("No tasks available.");
    } else {
      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.completed === true) {
            console.log(`${task.id}. ${task.title} [x]`);
        } else {
            console.log(`${task.id}. ${task.title} [-]`);
        }
    }
  }

}
}

console.log("Exiting Task Manager. Goodbye!");