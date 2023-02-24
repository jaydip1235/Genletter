import { React, useState } from 'react';
import './FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const Projects = (props) => {

    let arr = [];
    for (let i = 0; i < props.values.projectsRef.length; i++) {
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
        props.increase('projectsRef');
    }

    const subtractButton = () => {
        const arr = [...index];
        arr.pop();
        setIndex(arr);
        props.decrease('projectsRef');
    }

    return (
        <Form>
            <div className="title">{props.title}</div>
            {index.map((e, i) => <div key={e}>
                <div className='numbering'>{i + 1}</div>
                <Input field='Project Name' type='text' value={props.values.projectsRef[i].name} handleChangeInput={props.onChange(`projectsRef name ${i}`)} />
                <Input field='Project Description' type='text' value={props.values.projectsRef[i].description} handleChangeInput={props.onChange(`projectsRef description ${i}`)} />
                <Input field='Project Duration' type='text' value={props.values.projectsRef[i].completed} handleChangeInput={props.onChange(`projectsRef completed ${i}`)} />
                <div className='left-align'>Links</div>
                {props.values.projectsRef[i].links.map((link, k) => (
                    <div key={Math.random()}>
                        <Input field='Link Name' type='text' value={link.name} handleChangeInput={props.onChangeLink(`projectsRef links name ${i} ${k}`)} />
                        <Input field='Link' type='text' value={link.link} handleChangeInput={props.onChangeLink(`projectsRef links link ${i} ${k}`)} />
                    </div>
                ))}
                <div>
                    <span className='add'>
                        <button type='button' className='add-btn' onClick={() => props.increaseLink(`projectsRef ${i}`)}>+</button>
                    </span>
                    <span className='subtract'>
                        <button type='button' className='add-btn' onClick={() => props.decreaseLink(`projectsRef ${i}`)}>-</button>
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

export default Projects;