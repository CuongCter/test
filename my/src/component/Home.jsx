import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { addTodo, deleteTodo } from '../redux/action';
import { useSelector } from 'react-redux';
import { addTodo, deleteTodo, getAllTodos } from '../redux/tokit/todoSlice';

const Home = (props) => {
    const dispatch = useDispatch()
    const todoList = useSelector(state => state.todoList)
    const [value, setValue] = useState('')

    useEffect(() => {
        dispatch(getAllTodos())
    }, [])


    const handleAdd = () => {
        dispatch(addTodo(value))
        setValue('')
    }
    console.log(value)
    const handleDeleteTodo = (todo) => {
        dispatch(deleteTodo(todo))
    }
    console.log(todoList.map(item => item.title))
    return (
        <div>
            <div>
                <div>LOGIN</div>
                <input type='text' placeholder='To do' value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={handleAdd}>ADD</button>
            </div>
            {
                todoList && (
                    todoList.map(item => (
                        <ul key={item}>
                            <li>{item}</li>
                            <span onClick={() => handleDeleteTodo(item)}>x</span>
                        </ul>
                    ))
                )
            }
        </div>

    )
}

export default Home 