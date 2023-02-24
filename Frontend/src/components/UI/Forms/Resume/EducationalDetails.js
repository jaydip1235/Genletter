import { React, useState } from 'react';
import './FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const EducationalDetails = (props) => {

    let arr = [];
    for (let i = 0; i < props.values.educationRef.length; i++) {
        arr.push(i + 1);
    }
    const [index, setIndex] = useState(arr);

    const continueForm = e => {
        e.preventDefault();
        props.nextStep();
    };

    const backForm = e => {
        e.preventDefault();
        props.prevStep();
    };

    const addButton = () => {
        setIndex(index => [...index, index.length + 1]);
        props.increase('educationRef');
    }

    const subtractButton = () => {
        const arr = [...index];
        arr.pop();
        setIndex(arr);
        props.decrease('educationRef');
    }

    return (
        <Form>
            <div className="title">{props.title}</div>
            {index.map((e, i) => <div key={e}>
                <div className='numbering'>{i + 1}</div>
                <Input field='Degree' type='text' value={props.values.educationRef[i].degree} handleChangeInput={props.onChange(`educationRef degree ${i}`)} />
                <Input field='Course' type='text' value={props.values.educationRef[i].course} handleChangeInput={props.onChange(`educationRef course ${i}`)} />
                <Input field='University/School' type='text' value={props.values.educationRef[i].university} handleChangeInput={props.onChange(`educationRef university ${i}`)} />
                <Input field='Duration' type='text' value={props.values.educationRef[i].year} handleChangeInput={props.onChange(`educationRef year ${i}`)} />
                <Input field='Grade' type='text' value={props.values.educationRef[i].grade} handleChangeInput={props.onChange(`educationRef grade ${i}`)} />
            </div>
            )}
            <div className='add-sub'>
                <span className='add'>
                    <button type='button' className='add-btn' onClick={addButton}>+</button>
                </span>
                <span className='subtract'>
                    <button type='button' className='add-btn' onClick={subtractButton}>-</button>
                </span>
            </div>
            <div className='buttons'>
                <span className='btn-left' onClick={backForm}>
                    <Button content="Previous" />
                </span>
                <span className='btn-right' onClick={continueForm}>
                    <Button content="Next" />
                </span>
            </div>
        </Form>
    );
};

export default EducationalDetails;