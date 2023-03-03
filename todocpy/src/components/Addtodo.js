import React from 'react'
import '../style/Addnote.css'

const Addtodo = () => {

    const SubmitNote = (e) => {
        e.preventDefault()
        console.log('first');
    }

    return (
        <>
            <form action="post" onSubmit={SubmitNote} className="NoteForm">
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required minLength={5} />
                </div>
                <div>
                    <label htmlFor="note">Note</label>
                    <textarea type="text" name="note" id="note" required minLength={5} />
                </div>
                <button type='submit' className="btn">Add Note</button>
            </form>
        </>
    )
}

export default Addtodo
