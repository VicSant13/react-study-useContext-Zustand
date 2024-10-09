import { createContext, Dispatch } from "react";
import { Todo, TodoAction } from "../reducers/todosReducer";

type TodosContexType = {
    todos:Todo[],

    dispatch:Dispatch<TodoAction>
}
export default createContext<TodosContexType>({} as TodosContexType)