import './App.css'
import Dashboard from './components/Dashboard';
import MainContent from './components/MainContent';
import TitlesProvider from './providers/TitlesProvider';

import TodosProvider from './providers/TodosProvider';
import UserProvider from './providers/UserProvider';

function App() {


  console.log('app')
  /*const [count, setCount] = useState(2);
  const [elements,setElements] = useState(['ARROZ','JITOMATE']);

  const [todos,setTodos] = useState<Todo[]>([
    {id:0,name:'COCINAR',completed:false},
    {id:1,name:'ALMACENAR',completed:true},
  ]);

  const addTodo = (todo:Todo)=>{
    setTodos([todo,...todos])
  };
*/

  return (
    <>
    {/** value es el valor inicial */}
    {/*<TodosContext.Provider value={{todos,addTodo}}>
        <Dashboard />
        <MainContent />
    </TodosContext.Provider>*/}
    {/**nueva implementacion como custom providers, toda la logica se envuele en TODOSPROVIDER */}
    <TodosProvider>
      <UserProvider>
        <TitlesProvider>        
        <Dashboard />
        <MainContent />
        </TitlesProvider>
      </UserProvider>
    </TodosProvider>
    </>
  )
}

export default App
