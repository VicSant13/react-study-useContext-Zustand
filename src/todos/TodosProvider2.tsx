import { ReactNode, useReducer } from "react"

import TodosContext2 from "./TodosContext2"

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


const todosReducer = (todos:Todo[],action:TodoAction)=>{
    
    switch(action.type){
        case "add":
            return [action.todo ,...todos,]
        case "delete":
            return todos.filter(t=> t.id !== action.todoId)
    }   
    return todos;
}


type Props = {
    children:ReactNode
}
export default function TodosProvider({children}:Props){
    const[todos,dispatch]=useReducer(todosReducer,[])
    return (
        <TodosContext2.Provider value={{todos,dispatch}}>
            {children}
        </TodosContext2.Provider>
    )
}