import React from 'react';
import '../Resume/FormDesign.css';
import Form from '../Form';

const FinalPage = (props) => {

    return (
        <Form>
            <img src={props.values.companyDetails.companyLogoURL} alt='logo' />
            <div className="title">{props.title}</div>
        </Form>
    );
};

export default FinalPage;