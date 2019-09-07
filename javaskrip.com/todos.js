const todos = [
    {
        id: 1,
        text: 'take trash out',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with the boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appointment',
        isCompleted: true
    },
];

//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

//For
/*
for(let i = 0; i<=10; i++) {
    console.log('for loop number:'+i);
}

//while
let i = 0;
while(i<10) {
    console.log('while loop number:'+i);
    i++
}
*/

//for each
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
}) 

console.log(todoCompleted);