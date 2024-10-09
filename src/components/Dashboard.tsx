
import useTodos from '../hooks/useTodos'
import useUser from '../hooks/useUser'

type Props = {
  
}

const Dashboard = ({}: Props) => {
  console.log('Dashboard')
  //const {todos,} = useContext(TodosContext)
  const {user,toggleLogin}=useUser()
   const {todos}= useTodos()
  return (
    <>
      <div>            
        {user.name}
        <div>{todos.length}</div>
        <button onClick={()=>toggleLogin()}>Login</button>
      </div>
    </>
    
  )
}

export default Dashboard