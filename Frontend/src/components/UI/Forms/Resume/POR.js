import React, { useState } from 'react';
import './FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';

const POR = (props) => {

    let arr = [];
    for (let i = 0; i < props.values.porRef.length; i++) {
        arr.push(i + 1);
    }
    const [index, setIndex] = useState(arr);

    const backForm = e => {
        e.preventDefault();
        props.prevStep();
    };

    const addButton = () => {
        setIndex(index => [...index, index.length + 1]);
        props.increase('porRef');
    }

    const subtractButton = () => {
        const arr = [...index];
        arr.pop();
        setIndex(arr);
        props.decrease('porRef');
    }

    return (
        <form onSubmit={props.formSubmitted}>
            <div className="title">{props.title}</div>
            {index.map((e, i) => <div key={e}>
                <div className='numbering'>{i + 1}</div>
                <Input field='Position' type='text' value={props.values.porRef[i].position} handleChangeInput={props.onChange(`porRef position ${i}`)} />
                <Input field='Organisation' type='text' value={props.values.porRef[i].organisation} handleChangeInput={props.onChange(`porRef organisation ${i}`)} />
                <Input field='Work' type='text' value={props.values.porRef[i].work} handleChangeInput={props.onChange(`porRef work ${i}`)} />
                <Input field='Duration' type='text' value={props.values.porRef[i].duration} handleChangeInput={props.onChange(`porRef duration ${i}`)} />
                <div className='left-align'>Links</div>
                {props.values.porRef[i].links.map((link, k) => (
                    <div key={k}>
                        <Input field='Link Name' type='text' value={link.name} handleChangeInput={props.onChangeLink(`porRef links name ${i} ${k}`)} />
                        <Input field='Link' type='text' value={link.link} handleChangeInput={props.onChangeLink(`porRef links link ${i} ${k}`)} />
                    </div>
                ))}
                <div>
                    <span className='add'>
                        <button type='button' className='add-btn' onClick={() => props.increaseLink(`porRef ${i}`)}>+</button>
                    </span>
                    <span className='subtract'>
                        <button type='button' className='add-btn' onClick={() => props.decreaseLink(`porRef ${i}`)}>-</button>
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
                <span className='btn-right'>
                    <button className='add-btn' type='submit'>Submit</button>
                </span>
            </div>
        </form>
    );
};

export default POR;