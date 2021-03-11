// TASK MANAGER

// Initialization of variables.
const InputPrompt = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;
let managerActive = true;
let userInput;
const tasks = [`Charge MacBook`, `Master JavaScript`];
let taskList;
let taskName;
let removeInput;
let num;

// Task Manager loop: does not close until told to.
while (managerActive === true) {
    // Prompts the user for input.
    userInput = prompt(InputPrompt).toUpperCase();
    // Input case: TASKS.
    if (userInput === `TASKS`) {
        // Initializing the string used to output.
        taskList = ``;
        // Going through the array of tasks, adding each item to the display.
        for (item of tasks) {
            taskList += `${item}\n`
        }
        // Outputs the display.
        alert(taskList);

    // Input case: NEW
    } else if (userInput === `NEW`) {
        // Prompts user for a new task name.
        taskName = prompt(`Please enter the new task:`);
        // Verifies to ensure the task is not empty.  If it is, queries the user until they provide a non-empty task name.
        while (taskName === ``) {
            taskName = prompt(`Please enter the new task:`);
        }
        // Adds the selected task onto the end of the array.
        tasks.push(taskName);
        alert(`"${taskName}" has been added!`);
    // Input case: REMOVE
    } else if (userInput === `REMOVE`) {
        // If the list is empty, throws an error and returns the user to the main menu.
        if (tasks.length < 1) {
            alert(`There are no tasks to remove.`);
        } else {
            // Initializes (or re-initializes) the taskList.
            taskList = ``;
            // Counter variable.
            num = 1;
            // Goes through the array of tasks, collecting them to display in a list.
            for (item of tasks) {
                taskList += `${num}: ${item}\n`;
                num++;
            }
            // Queries the user for an input on which task to remove.
            // Addition: WILL TRUNCATE DECIMAL ENTRIES.
            removeInput = Math.floor(parseInt(prompt(`Please enter a number to remove:\n${taskList}`)));
            // Verifies that the user entry is valid.  If not, will throw an error and re-query the user until a valid entry is given.
            while (!removeInput || removeInput < 1 || removeInput > tasks.length) {
                alert(`Not a valid entry`);
                removeInput = parseInt(prompt(`Please enter a number to remove:\n${taskList}`));
            }
            // Displaying the name of the removed task in an alert.
            alert(`"${tasks[removeInput-1]}" has been removed`);
            // Removing the selected task from the array.
            tasks.splice(removeInput - 1, 1);
        }
    // Input case: CLOSE
    } else if (userInput === `CLOSE`) {
        // Throws an alert to the user, and then sets the loop to end, functionally quitting the task manager.
        alert(`Thank you for using Task Manager!`);
        managerActive = false;
    }
}