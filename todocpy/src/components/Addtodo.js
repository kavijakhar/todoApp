import React, { useContext, useState } from 'react'
import '../style/Addnote.css'
import todoContext from '../context/todo/TodoContext'

const Addtodo = (props) => {
    const context = useContext(todoContext);
    // console.log(context)
    const { addTodo } = context;
    const [todo, setTodo] = useState({ title: "", description: "" })


    const handleClick = (e) => {
        e.preventDefault();
        addTodo(todo.title, todo.description);
        setTodo({ title: "", description: "", })
        // props.showAlert("YOur note has added successfully", 'success')
    }
    const onChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form action="post" className="NoteForm">
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={todo.title} name="title" id="title" required minLength={5} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" value={todo.description} id="description" required minLength={5} onChange={onChange} />
                </div>
                <button disabled={todo.title.length < 5 || todo.description.length < 5} type='submit' className="btn" onClick={handleClick}>Add Note</button>
            </form>
        </>
    )
}

export default Addtodo
