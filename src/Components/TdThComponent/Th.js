import React from 'react';
import './default.css';

function Th(props)
{
    return <th className={props.classNm}>{props.text}</th>
}

export default Th;