import React from 'react'
import './todo.css'

const Todo = ({id,email,username,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{username}</span>
            <span>{email}</span>
            <span>
                <button>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default Todo