
import useTodosStore from '../todos/store'



const Core = () => {
    //utilizamos el useContext y destructuramos en las constantes para que puedan ser utilizadas en el componente
    //const {todos,dispatch}=useContext(TodosContext2)
    //para simpplificar mas se utiliza un customHook
    //const {todos,dispatch} = useTodos()
    const {todos,add,destroy}=useTodosStore()
    
  return (
    <>
        <h1>Hola mundo</h1>
        <button onClick={()=> add({id:Math.random(),name:'clear my room'})}>Add TODO</button>

        <ul>
            {todos.map((todo)=>
                (
                <li key={todo.id}>{todo.name} <button onClick={()=>destroy(todo.id)}>Delete Todo</button></li>
                )
                )}
        </ul>
    </>
  )
}

export default Core