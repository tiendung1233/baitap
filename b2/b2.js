const dataTodo =
{
    "todoList":
        [
            {
                "taskBlock": "Home", "tasks":
                    [
                        { "task": "Clean room", "done": false },
                        { "task": "Get storage unit", "done": false }
                    ]
            },
            {
                "taskBlock": "Work", "tasks":
                    [
                        { "task": "Analysis", "done": false },
                        {
                            "task": "Sorting", "done": false, "subtasks":
                                [
                                    {
                                        "task": "Save files", "done": false, "subtasks":
                                            [
                                                { "task": "Pull from computer 1", "done": false },
                                                { "task": "Walk to computer 2", "done": false },
                                                { "task": "Save on computer 2", "done": false }
                                            ]
                                    },
                                    { "task": "Sort files", "done": false },
                                    { "task": "Plot data", "done": false }
                                ]
                        }
                    ]
            }
        ]
}

const list = document.querySelector('.todo_list');

const todoListHome = dataTodo.todoList[0].tasks;
const todoListWork = dataTodo.todoList[1].tasks;

console.log(todoListWork[0].task);


// window.addEventListener("DOMContentLoaded", ()=>{
//     render(todoListHome);
//     render(todoListWork);
// })

function render(data) {
    let html = data.map(e => {
        let status = "Chua hoan thanh";
        if(e.done){
            status="Da hoan thanh";
        }
        return `
            <div class="todo">
                <div class="name">${e.task}</div>
                <div class="status">${status}</div>
                <input type="checkbox" class="check">
            </div>
        `
    })
    list.innerHTML += html.join('');
}

render(todoListHome);
render(todoListWork);


// let statusTodo = document.querySelectorAll('.status');
const checkTodo = document.querySelectorAll('.todo');
console.log(checkTodo)


checkTodo.forEach(e=>{
    e.addEventListener('change',el=>{
        // console.log(e);
        if(el.target.checked){
            e.querySelector('.status').innerHTML="Da hoan thanh"
            e.querySelector('.status').style.color = "green"
        }
        else{
            e.querySelector('.status').innerHTML="Chua hoan thanh"
            e.querySelector('.status').style.color = "red"
        }
    })
})

