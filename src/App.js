import logo from './logo.svg';
import './App.css';
import TodoItemCreate from './components/TodoItemCreate';
import { useRecoilValue } from 'recoil';
import { todoListState } from './todoAtom';
import TodoItem from './components/TodoItem';

function App() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);
  return (
    <div className="App">
      <TodoItemCreate />
      {todoList.map(todo => <TodoItem key={todo.id} item={todo} />)}
    </div>
  );
}

export default App;
