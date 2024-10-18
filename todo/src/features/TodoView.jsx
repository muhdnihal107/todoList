import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, doneTodo } from './todoSlice';

const TodoView = () => {
    const [task,setTask] = useState('');
    const todo = useSelector((state)=>state.todo);
    const dispatch = useDispatch();

    const handleAdd = ()=>{
        if(task.trim()){
           dispatch(addTodo(task));
           setTask('')
        }
    }

    const handleDone =(id)=>{
      dispatch(doneTodo(id));

    }
  return (
    <div>
        <h1>todo list</h1>

        <div>
            <input type="text"
                   value={task}
                   onChange={(e)=>setTask(e.target.value)} 
                   placeholder='Enter tudo'
                   />
            <button onClick={handleAdd}>Add</button>
        </div>
        <div>
            <ul>
                {todo.map((item)=>(
                     <>
                     <li key={item.id} style={item.done?{backgroundColor: "blue"}:{backgroundColor: "red"}}>
                        {item.text}
                    </li>
                        <button onClick={()=>handleDone(item.id)}>Done</button>
                     </>
                ))}
            </ul>
        </div>


    </div>
  )
}

export default TodoView