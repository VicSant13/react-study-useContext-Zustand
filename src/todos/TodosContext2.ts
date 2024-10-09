import { createContext, Dispatch, useContext } from "react";
import { Todo, TodoAction } from "./TodosProvider2";

type TodosContexType = {
    todos:Todo[],

    dispatch:Dispatch<TodoAction>
}
const TodosContext2 = createContext<TodosContexType>({} as TodosContexType)

export default TodosContext2;
export  function useTodos(){
    return useContext(TodosContext2);
}