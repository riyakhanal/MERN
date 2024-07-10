localStorage.setItem('name','riya')
console.log(localstorage.getItem("name"));

const todos =["learn css,html&js","learn larabel"];
localStorage.setItem('todos',JSON,stringify(todos))
const todosFormLS = localstorage.getItem('todos')
console.log(JSON.parse(todoFormLS))