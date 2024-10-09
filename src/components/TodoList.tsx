
import useTodos from '../hooks/useTodos'

type Props = {
}

function TodoList({}: Props) {
  console.log('todo list')
  //const {todos,addTodo}=useContext(TodosContext)
  //accede al hook (función superior) para obtener la funcionalidad del contexto USeTodos
  const {todos,addTodo}= useTodos()
  return (
   <>
    <button
      onClick={()=>addTodo({id:Math.random(),name:'Correr v2',completed:false})}
    >
      Agregar
    </button>

    <ul>
      {todos.map((todo)=>(<li key={todo.id}>{todo.name}</li>))}
    </ul>
   </>
  )
}

export default TodoList