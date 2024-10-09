import useTodos from '../hooks/useTodos2'

type Props = {}

const Core = (props: Props) => {
    //utilizamos el useContext y destructuramos en las constantes para que puedan ser utilizadas en el componente
    //const {todos,dispatch}=useContext(TodosContext2)
    //para simpplificar mas se utiliza un customHook
    const {todos,dispatch} = useTodos()
  return (
    <>
        <h1>Hola mundo</h1>
        <button onClick={()=>dispatch({type:'add',todo:{id:Math.random(),name:'clear my room'}})}>Add TODO</button>

        <ul>
            {todos.map((todo)=>
                (
                <li key={todo.id}>{todo.name} <button onClick={()=>dispatch({type:'delete',todoId:todo.id})}>Delete Todo</button></li>
                )
                )}
        </ul>
    </>
  )
}

export default Core