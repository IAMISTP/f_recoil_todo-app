import './App.css';
import React from'react';
import TodoItemCreate from './components/TodoItemCreate';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListState } from './todoAtom';
import TodoItem from './components/TodoItem';
import TodoListFilters from './components/TodoListFilters';
import TodoListStats from './components/TodoListStats';
import { currentUserNameQuery } from './UserAtoms';

function App() {
  const todoList = useRecoilValue(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState)
  console.log('todoList',todoList);
  console.log('filteredTodoList',filteredTodoList);
  return (
    <div className="App">
      <React.Suspense fallback={<div>loading...</div>}>
        <CurrentUserInfo />
      </React.Suspense>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreate />
      {filteredTodoList.map(todo => <TodoItem key={todo.id} item={todo} />)}
    </div>
  );
}

export default App;

function CurrentUserInfo(){
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>
}