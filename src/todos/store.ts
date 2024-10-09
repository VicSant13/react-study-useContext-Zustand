import { create } from "zustand";

 type Todo = {
    id:number,
    name:string,

}

type TodosStore = {
    todos:Todo[];
    update:(id:number,todo:Todo)=>void;
    add: (todo:Todo)=>void;
    destroy:(id:number)=>void;
    total:number;
}

const useTodosStore = create<TodosStore>((set)=>({
    todos:[],
    total:0,
    add:(todo)=>set((state)=>({
        todos:[todo,...state.todos]
    })),
    destroy: (id)=>set((state)=>({
        todos:state.todos.filter(todo=>todo.id !== id)
    })),
    update:(id,newTodo)=>set((state)=> ({
        todos: state.todos.map((todo)=> todo.id == id ? newTodo : todo)
    }))
}))
export default useTodosStore;