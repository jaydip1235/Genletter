import { React, useState } from 'react';
import './FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const Links = (props) => {

    let arr = [];
    for (let i = 0; i < props.values.linksRef.length; i++) {
        arr.push(i + 1);
    }

    const [index, setIndex] = useState(arr);

    const continueForm = e => {
        e.preventDefault();
        props.nextStep();
    }

    const backForm = e => {
        e.preventDefault();
        props.prevStep();
    }

    const addButton = () => {
        setIndex(index => [...index, index.length + 1]);
        props.increase('linksRef');
    }

    const subtractButton = () => {
        const arr = [...index];
        arr.pop();
        setIndex(arr);
        props.decrease('linksRef');
    }

    return (
        <Form>
            <div className="title">{props.title}</div>
            {index.map((e, i) => <div key={e}>
                <div className='numbering'>{i + 1}</div>
                <Input field='Link Name' type='text' value={props.values.linksRef[i].name} handleChangeInput={props.onChange(`linksRef name ${i}`)} />
                <Input field='Link' type='text' value={props.values.linksRef[i].link} handleChangeInput={props.onChange(`linksRef link ${i}`)} />
            </div>)}
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

export default Links;