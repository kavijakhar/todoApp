import React from 'react'
import img from '../img/aboutus.gif'
import Addtodo from './Addtodo'
import '../style/Addnote.css'

const TodoList = () => {
    return (
        <section id="todoLists" className="about">

            <h1 className={`${'heading'} heading`}>My To Do List</h1>

            <div className="row">

                <div className="content">
                    <h3>Create your Todo here</h3>

                   <Addtodo/>
                </div>

                <div className="image">
                    <img src={img} alt="dddddddddd" width={510} />
                </div>

            </div>


        </section>
        
    )
}

export default TodoList
