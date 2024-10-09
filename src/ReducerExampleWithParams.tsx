import React, { useReducer } from 'react'
import todosReducer from './reducers/todosReducer'
import TodosProvider2 from './providers/TodosProvider2'
import Core from './components/Core'

type Props = {}

/*
//CODIGO ANTES DE LA REFACTORIZACIÓN DE ORGANIZACION DE CÓDIGO REDUCERS
type Todo = {
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

type Action = AddAction | DeleteAction;


const reducer = (todos:Todo[],action:Action)=>{
    
    switch(action.type){
        case "add":
            return [action.todo ,...todos,]
        case "delete":
            return todos.filter(t=> t.id !== action.todoId)
    }   
    return todos;
}*/


const ReducerExampleWithParams = (props: Props) => {

    

  return (
    <>
    {/**envuelve el componente Core, para que pueda ser utilizado el reducer correctamente */}
    <TodosProvider2>
        <Core></Core>
    </TodosProvider2>
    </>
  )
}

export default ReducerExampleWithParams