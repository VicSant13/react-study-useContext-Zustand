
import useTitles from '../hooks/useTitles';
import TodoList from './TodoList'

type Props = {

}

function MainContent({}: Props) {
  console.log('Main Content')
  const {todosTitle} = useTitles();
  return (
    <>
      <div>
        <h2>{todosTitle}</h2>
        <TodoList/>
      </div>   
    </>
  )
}

export default MainContent