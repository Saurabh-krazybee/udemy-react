import React, { Component } from 'react';

const userInput=(props)=>{
    const style={
        border:'2px solid red'
    }
    return<input type="text" onChange={props.changed} value={props.name} style={style} ></input>
}

export default userInput;