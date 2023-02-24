import React from 'react';
import './FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const PersonalDetails = (props) => {

    const continueForm = e => {
        e.preventDefault();
        props.nextStep();
    };

    return (
        <Form>
            <div className="title">{props.title}</div>
                <Input field='First Name' type='text' value={props.values.fnameRef} handleChangeInput={props.onChange('fnameRef')} />
                <Input field='Last Name' type='text' value={props.values.lnameRef} handleChangeInput={props.onChange('lnameRef')} />
                <Input field='Roll Number' type='text' value={props.values.rollnoRef} handleChangeInput={props.onChange('rollnoRef')} />
                <Input field='Email Address' type='email' value={props.values.emailRef} handleChangeInput={props.onChange('emailRef')} />
                <Input field='Phone Number' type='number' value={props.values.phoneRef} handleChangeInput={props.onChange('phoneRef')} />
                <div className='buttons'>
                    <span className='btn-right' onClick={continueForm}>
                        <Button content="Next" />
                    </span>
                </div>
        </Form>
    );
}

export default PersonalDetails;