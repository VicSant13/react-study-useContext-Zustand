
import Core from './components/Core'
import Header from './components/Header'



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


const ReducerExampleWithParams = () => {

    

  return (
    <>
    {/**envuelve el componente Core, para que pueda ser utilizado el reducer correctamente */}
        
        <Header></Header>
        
        <Core></Core>
    
    </>
  )
}

export default ReducerExampleWithParams