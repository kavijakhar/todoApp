import React, { useContext, useEffect, useRef, useState } from "react";
import img from "../img/aboutus.gif";
import Addtodo from "./Addtodo";
import "../style/Addnote.css";
import Todoitem from "./Todoitem";
import todoContext from "../context/todo/TodoContext";
import { useNavigate } from "react-router-dom";

const TodoList = (props) => {
    const context = useContext(todoContext);
    const history = useNavigate();
    const { todos, edittodo, getTodo } = context;
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getTodo();
        } else {
            history("/login");
        }
        // eslint-disable-next-line
    }, []);
    const ref = useRef(null);
    const [todo, setTodo] = useState({
        id: "",
        etitle: "",
        edescription: "",
    });
    const updatetodo = (currenttodo) => {
        ref.current.click();
        console.log("alskjdflasdkjfalskdfjaskldfjk")
        setTodo({
            id: currenttodo._id,
            etitle: currenttodo.title,
            edescription: currenttodo.description,
        });
    };
    const handleClick = (e) => {
        e.preventDefault();
        edittodo(todo.id, todo.etitle, todo.edescription);
        props.showAlert("updated successfully", "success");
    };
    const onChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };
    return (
        <>
            <section id="todoLists" className="about">
                <h1 className={`${"heading"} heading`}>My To Do List</h1>

                <div id="row">
                    <div className="content">
                        <h3>Create your Todo here</h3>
                        <Addtodo />
                    </div>

                    <div className="image">
                        <img src={img} alt="dddddddddd" width={510} />
                    </div>
                </div>
                <button
                    ref={ref}
                    type="button"
                    className="btn btn-primary d-none"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Launch demo modal
                </button>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header border-0 px-4">
                                <h1 className="modal-title " id="exampleModalLabel">
                                    Edit Note
                                </h1>
                                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                            </div>
                            <div className="my-3 mx-3" >
                                <form>
                                    <div className="form-group ">
                                        <label htmlFor="title" id="font">Title</label>
                                        <input
                                            type="text"
                                            className="form-control edit"
                                            id="title"
                                            name="etitle"
                                            placeholder="Enter Title"
                                            value={todo.etitle}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description" id="font">Description</label>
                                        <input
                                            type="description"
                                            className="form-control edit"
                                            id="description"
                                            name="edescription"
                                            placeholder="description"
                                            value={todo.edescription}
                                            onChange={onChange}
                                        />
                                    </div>
                               
                                    <button
                                        disabled={todo.etitle.length < 5 || todo.edescription.length < 5}
                                        type="button"
                                        data-bs-dismiss="modal"
                                        className="btn btn-primary my-3"
                                        onClick={handleClick}
                                    >
                                        update now
                                    </button>
                                    {/* <button onClick={handleClick}  type="button" className="btn btn-primary">Update Now</button> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" my-3 mx-1">
                    <h4>Your Todos</h4>
                    <div>{todos.length === 0 && "No  todos display"}</div>
                    {todos.map((todo) => {
                        return (
                            <Todoitem
                                key={todo._id}
                                showAlert={props.showAlert}
                                todo={todo}
                                updatetodo={updatetodo}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default TodoList;
