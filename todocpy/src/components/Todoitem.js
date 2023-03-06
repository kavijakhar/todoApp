import React, { useContext } from 'react'
import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import todoContext from '../context/todo/TodoContext';
import '../style/Addnote.css'

const Todotodo = (props) => {
    const context = useContext(todoContext);
    const { deletetodo } = context;
    const { todo, updatetodo } = props;
    // console.log(todo._doc.title)
    // console.log()
    // console.log("hello" , todo)
    return (
        <div className="row"  >
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title aligen-atodos-center">{todo.title}</h5>
                        <p className="card-text"> {todo.description}</p>
                        {/* <p className="card-text"> {todo._id}</p> */}
                        <MdDeleteOutline className="mx-3 icon" onClick={() => { deletetodo(todo._id); props.showAlert("deleted successfully", 'success') }} />
                        <AiOutlineEdit className="mx-3 icon" onClick={() => { updatetodo(todo) }} />
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Todotodo
