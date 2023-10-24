// import inquirer from "inquirer";

// const todos: string[] = [];
// let loop = true;

// async function main() {
//   while (loop) {
//     const answers = await inquirer.prompt([
//       {
//         type: "input",
//         name: "TODO",
//         message: "What do you want to add to your todo?",
//       },
//       {
//         type: "confirm",
//         name: "addmore",
//         message: "Do you want to add more todos? (y/n)",
//         default: false,
//       },
//     ]);

//     const { TODO, addmore } = answers;
//     console.log(answers);

//     if (TODO) {
//       todos.push(TODO);
//     } else {
//       console.log("Kindly add a valid input.");
//     }

//     loop = addmore;
//   }

//   if (todos.length > 0) {
//     console.log("Your Todos List:\n");
//     todos.forEach((todo) => {
//       console.log(todo);
//     });
//   } else {
//     console.log("No todos found.");
//   }
// }

// main();
import inquirer from "inquirer";

const todos: string[] = [];
let loop = true;

async function main() {
  while (loop) {
    const actionAnswers = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "Choose an action:",
        choices: ["Add Task", "Edit Task", "View Tasks", "Quit"],
      },
    ]);

    const { action } = actionAnswers;

    if (action === "Add Task") {
      const addTaskAnswers = await inquirer.prompt([
        {
          type: "input",
          name: "TODO",
          message: "What do you want to add to your todo?",
        },
      ]);

      const { TODO } = addTaskAnswers;

      if (TODO) {
        todos.push(TODO);
        console.log(`Task "${TODO}" added to your todo list.`);
      } else {
        console.log("Kindly add a valid input.");
      }
    } else if (action === "Edit Task") {
      if (todos.length === 0) {
        console.log("No tasks to edit. Add tasks first.");
      } else {
        const editTaskAnswers = await inquirer.prompt([
          {
            type: "list",
            name: "taskIndex",
            message: "Select a task to edit:",
            choices: todos,
          },
          {
            type: "input",
            name: "newTask",
            message: "Enter the new task description:",
          },
        ]);

        const { taskIndex, newTask } = editTaskAnswers;
        const index = todos.indexOf(taskIndex);

        if (index !== -1) {
          todos[index] = newTask;
          console.log(`Task "${taskIndex}" updated to "${newTask}".`);
        } else {
          console.log("Task not found in the list.");
        }
      }
    } else if (action === "View Tasks") {
      if (todos.length > 0) {
        console.log("Your Todos List:\n");
        todos.forEach((todo) => {
          console.log(todo);
        });
      } else {
        console.log("No tasks found.");
      }
    } else if (action === "Quit") {
      loop = false;
    }
  }
}

main();
