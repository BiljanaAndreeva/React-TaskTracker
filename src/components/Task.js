import React from 'react';
import { LaTimes } from 'react-icons/fa';

const Task = ({task}) => {
    return (
        <div className="task">
            <h3>{task.text} <LaTimes/> </h3>
            <p>{task.day}</p>
            
        </div>
    )
}

export default Task
