import React from 'react';
import './FormDesign.css';
import Form from '../Form';

const FinalPage = (props) => {

    return (
        <Form>
            <div className="title">{props.title}</div>
        </Form>
    );
};

export default FinalPage;