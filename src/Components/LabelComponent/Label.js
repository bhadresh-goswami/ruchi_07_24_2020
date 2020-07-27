import React from 'react';
import './Label.css';

function Label(props){
    return <div className="lbl" style = {{color:props.color},{backgroundColor:props.bgcolor}}> {props.text} </div>;
}


export default Label;