import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../todoAtom'

const TodoItemCreate = () => {
   const [inputValue , setInputValue] = useState('')
   const setTodoList = useSetRecoilState(todoListState)

   const changeHandler = (e) => {
    setInputValue(e.target.value);
   }

   const addItem = () => {
    setTodoList(orderTodoList => [
        ...orderTodoList, {
            id: getId(),
            text:inputValue,
            isComplete:false  
        }
    ])
    setInputValue('')
   }
  return (
    <div>
        <input type='text' value={inputValue} onChange={changeHandler} />
        <button onClick={addItem}>Add</button>
    </div>
  )
}

export default TodoItemCreate

let id = 0;
function getId(){
    id +=1;
    return id;
}