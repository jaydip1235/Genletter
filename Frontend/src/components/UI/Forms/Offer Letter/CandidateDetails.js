import React from 'react';
import '../Resume/FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const CandidateDetails = (props) => {

    const continueForm = e => {
        e.preventDefault();
        props.nextStep();
    };

    return (
        <Form>
            <div className="title">{props.title}</div>
            <Input field='First Name' type='text' value={props.values.candidateDetails.fname} handleChangeInput={props.onChange('candidateDetails fname')} />
            <Input field='Last Name' type='text' value={props.values.candidateDetails.lname} handleChangeInput={props.onChange('candidateDetails lname')} />
            <div className='buttons'>
                <span className='btn-right' onClick={continueForm}>
                    <Button content="Next" />
                </span>
            </div>
        </Form>
    );
}

export default CandidateDetails;