export type Todo = {
    id:number,
    name:string,

}
//se definen cada una de las acciones, AddAction y DeleteAction para que automaticamente en el reducer sepa que action tiene
type AddAction = {
    type:'add';
    todo:Todo;
}

type DeleteAction = {
    type:'delete';
    todoId:number;
}

export type TodoAction = AddAction | DeleteAction;


export default (todos:Todo[],action:TodoAction)=>{
    
    switch(action.type){
        case "add":
            return [action.todo ,...todos,]
        case "delete":
            return todos.filter(t=> t.id !== action.todoId)
    }   
    return todos;
}
