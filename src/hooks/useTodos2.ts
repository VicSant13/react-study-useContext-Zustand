import { useContext } from "react";
import TodosContext2 from "../contexts/TodosContext2";

export default function useTodos(){
    return useContext(TodosContext2);
}