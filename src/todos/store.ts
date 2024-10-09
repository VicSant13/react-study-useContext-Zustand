import { create } from "zustand";

 type Todo = {
    id:number,
    name:string,

}

type TodosStore = {
    todos:Todo[];
    add: (todo:Todo)=>void;
    destroy:(id:number)=>void;

}

const useTodosStore = create<TodosStore>((set)=>({
    todos:[],
    add:(todo)=>set((state)=>({
        todos:[todo,...state.todos]
    })),
    destroy: (id)=>set((state)=>({
        todos:state.todos.filter(todo=>todo.id !== id)
    }))
}))
export default useTodosStore;