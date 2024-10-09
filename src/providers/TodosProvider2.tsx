import { ReactNode, useReducer } from "react"
import todosReducer from "../reducers/todosReducer"
import TodosContext2 from "../contexts/TodosContext2"

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