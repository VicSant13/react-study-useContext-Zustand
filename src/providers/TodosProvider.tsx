
import { ReactNode, useState } from "react";
import TodosContext from "../contexts/TodosContext";
import { Todo } from "../types/todo";
type Props = {
    children:ReactNode
}

export default function App({children}:Props) {

  
    const [todos,setTodos] = useState<Todo[]>([
      {id:0,name:'COCINAR',completed:false},
      {id:1,name:'ALMACENAR',completed:true},
    ]);
  
    const addTodo = (todo:Todo)=>{
      setTodos([todo,...todos])
    };
  
  
    return (
      <>
      {/** value es el valor inicial */}
      <TodosContext.Provider value={{todos,addTodo}}>
        {children}
      </TodosContext.Provider>
      </>
    )
  }