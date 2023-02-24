import { React, useState } from 'react';
import './FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const Achievements = (props) => {

    let arr = [];
    for (let i = 0; i < props.values.achievementsRef.length; i++) {
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
        props.increase('achievementsRef');
    }

    const subtractButton = () => {
        const arr = [...index];
        arr.pop();
        setIndex(arr);
        props.decrease('achievementsRef');
    }

    return (
        <Form>
            <div className="title">{props.title}</div>
            {index.map((e, i) => <div key={e}>
                <div className='numbering'>{i + 1}</div>
                <Input field='Title' type='text' value={props.values.achievementsRef[i].achievement} handleChangeInput={props.onChange(`achievementsRef achievement ${i}`)} />
                <Input field='Description' type='text' value={props.values.achievementsRef[i].description} handleChangeInput={props.onChange(`achievementsRef description ${i}`)} />
                <div className='left-align'>Links</div>
                {props.values.achievementsRef[i].links.map((link, k) => (
                    <div key={k}>
                        <Input field='Link Name' type='text' value={link.name} handleChangeInput={props.onChangeLink(`achievementsRef links name ${i} ${k}`)} />
                        <Input field='Link' type='text' value={link.link} handleChangeInput={props.onChangeLink(`achievementsRef links link ${i} ${k}`)} />
                    </div>
                ))}
                <div>
                    <span className='add'>
                        <button type='button' className='add-btn' onClick={() => props.increaseLink(`achievementsRef ${i}`)}>+</button>
                    </span>
                    <span className='subtract'>
                        <button type='button' className='add-btn' onClick={() => props.decreaseLink(`achievementsRef ${i}`)}>-</button>
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

export default Achievements;