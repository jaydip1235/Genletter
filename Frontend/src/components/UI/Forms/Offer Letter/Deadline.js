import { React } from 'react';
import '../Resume/FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const Deadline = (props) => {

    const continueForm = e => {
        e.preventDefault();
        props.nextStep();
    };

    const backForm = e => {
        e.preventDefault();
        props.prevStep();
    };

    return (
        <Form>
            <div className="title">{props.title}</div>
            <Input field='Deadline' type='date' value={props.values.deadline.deadline} handleChangeInput={props.onChange('deadline deadline')} />
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

export default Deadline;