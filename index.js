// import inquirer from "inquirer";
// let todos: string[] = [];
// let loop = true;
// while(loop){
//     const answers:{
//         TODO: string,
//         addmore: boolean
//     }= await inquirer.prompt([{
//         type:"input",
//         name:"TODO",
//         message: "What do you want to add in your todo?",
//     },
// {
//     type:"confrim",
//     name:"addmore",
//     message:"do you want to add more todo?(y/n)",
//     default: false,
// }])
// const {TODO, addmore} = answers;
// console.log(answers)
// loop = addmore
// if(TODO) {
//     todos.push(TODO)
// } else {
//     console.log("kindly add valid input")
// }
// }
// if(todos.length>0) {
//     console.log("Your Todos List: \n")
//  todos.forEach(todo => {
//     console.log(todo)
//  });
// } else {
//     console.log("No todos found")
// }
import inquirer from "inquirer";
const todos = [];
let loop = true;
async function main() {
    while (loop) {
        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "TODO",
                message: "What do you want to add to your todo?",
            },
            {
                type: "confirm",
                name: "addmore",
                message: "Do you want to add more todos? (y/n)",
                default: false,
            },
        ]);
        const { TODO, addmore } = answers;
        console.log(answers);
        if (TODO) {
            todos.push(TODO);
        }
        else {
            console.log("Kindly add a valid input.");
        }
        loop = addmore;
    }
    if (todos.length > 0) {
        console.log("Your Todos List:\n");
        todos.forEach((todo) => {
            console.log(todo);
        });
    }
    else {
        console.log("No todos found.");
    }
}
main();
