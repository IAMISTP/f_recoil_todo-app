import logo from './logo.svg';
import './App.css';
import TodoItemCreate from './components/TodoItemCreate';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListState } from './todoAtom';
import TodoItem from './components/TodoItem';
import TodoListFilters from './components/TodoListFilters';

function App() {
  const todoList = useRecoilValue(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState)
  console.log('todoList',todoList);
  console.log('filteredTodoList',filteredTodoList);
  return (
    <div className="App">
      <TodoListFilters />
      <TodoItemCreate />
      {filteredTodoList.map(todo => <TodoItem key={todo.id} item={todo} />)}
    </div>
  );
}

export default App;
