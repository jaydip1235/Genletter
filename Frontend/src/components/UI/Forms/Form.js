import React from 'react';
import './Form.css';

const Form = (props) => {
    return (
        <form>
            {props.children}
        </form>
    );
}

export default Form;