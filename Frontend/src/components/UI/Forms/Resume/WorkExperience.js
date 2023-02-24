import { React, useState } from 'react';
import './FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const WorkExperience = (props) => {

    let arr = [];
    for (let i = 0; i < props.values.workexRef.length; i++) {
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
        props.increase('workexRef');
    }

    const subtractButton = () => {
        const arr = [...index];
        arr.pop();
        setIndex(arr);
        props.decrease('workexRef');
    }

    return (
        <Form>
            <div className="title">{props.title}</div>
            {index.map((e, i) => <div key={e}>
                <div className='numbering'>{i + 1}</div>
                <Input field='Job Title' type='text' value={props.values.workexRef[i].title} handleChangeInput={props.onChange(`workexRef title ${i}`)} />
                <Input field='Job Organisation' type='text' value={props.values.workexRef[i].organisation} handleChangeInput={props.onChange(`workexRef organisation ${i}`)} />
                <Input field='Job Contributions' type='text' value={props.values.workexRef[i].contributions} handleChangeInput={props.onChange(`workexRef contributions ${i}`)} />
                <Input field='Job Duration' type='text' value={props.values.workexRef[i].duration} handleChangeInput={props.onChange(`workexRef duration ${i}`)} />
                <div className='left-align'>Links</div>
                {props.values.workexRef[i].links.map((link, k) => (
                    <div key={k}>
                        <Input field='Link Name' type='text' value={link.name} handleChangeInput={props.onChangeLink(`workexRef links name ${i} ${k}`)} />
                        <Input field='Link' type='text' value={link.link} handleChangeInput={props.onChangeLink(`workexRef links link ${i} ${k}`)} />
                    </div>
                ))}
                <div>
                    <span className='add'>
                        <button type='button' className='add-btn' onClick={() => props.increaseLink(`workexRef ${i}`)}>+</button>
                    </span>
                    <span className='subtract'>
                        <button type='button' className='add-btn' onClick={() => props.decreaseLink(`workexRef ${i}`)}>-</button>
                    </span>
                </div>
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

export default WorkExperience;