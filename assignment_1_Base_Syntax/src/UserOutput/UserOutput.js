import React from 'react';
import userInput from '../UserInput/UserInput';
import './UserOutput.css'
const userOutput=(props)=>{
    return (
        <div className='UserOutput'>
            <p>Hi i'm  {props.name}</p>
            <p>Doing Assignment</p>
        </div>
    )
}

export default userOutput;