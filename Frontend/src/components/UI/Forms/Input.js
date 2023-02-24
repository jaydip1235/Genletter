import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <div className="group">
            <input type={props.type} value={props.value} onChange={props.handleChangeInput} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className='label'>{props.field}</label>
        </div>
    );
}

export default Input;