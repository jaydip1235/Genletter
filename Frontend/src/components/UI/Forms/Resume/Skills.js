import { React, useState } from 'react';
import './FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const Skills = (props) => {
    // console.log(props);
    let arr = [];
    for (let i = 0; i < props.values.skillsRef.languages.length; i++) {
        arr.push(i + 1);
    }
    const [index1, setIndex1] = useState(arr);
    arr = [];
    for (let i = 0; i < props.values.skillsRef.frameworksLibrariesAndDatabases.length; i++) {
        arr.push(i + 1);
    }
    const [index2, setIndex2] = useState(arr);
    arr = [];
    for (let i = 0; i < props.values.skillsRef.subjects.length; i++) {
        arr.push(i + 1);
    }
    const [index3, setIndex3] = useState(arr);

    const continueForm = e => {
        e.preventDefault();
        props.nextStep();
    }

    const backForm = e => {
        e.preventDefault();
        props.prevStep();
    }

    return (
        <Form>
            <div className="title">{props.title}</div>
            <div className='left-align'>Languages</div>
            {index1.map((e, i) => <div key={e}>
                <Input field='Skill' type='text' value={props.values.skillsRef.languages[i]} handleChangeInput={props.onChange(`skillsRef languages ${i}`)} />
            </div>
            )}
            <div className='add-sub'>
                <span className='add'>
                    <button type='button' className='add-btn' onClick={() => { setIndex1(index => [...index, index.length + 1]); props.increase('skillsRef languages'); }}>+</button>
                </span>
                <span className='subtract'>
                    <button type='button' className='add-btn' onClick={() => {
                        const arr = [...index1];
                        arr.pop();
                        setIndex1(arr);
                        props.decrease('skillsRef languages');
                    }}>-</button>
                </span>
            </div>
            <div className='left-align'>Frameworks, Libraries and Databases</div>
            {index2.map((e, i) => <div key={e}>
                <Input field='Skill' type='text' value={props.values.skillsRef.frameworksLibrariesAndDatabases[i]} handleChangeInput={props.onChange(`skillsRef frameworksLibrariesAndDatabases ${i}`)} />
            </div>
            )}
            <div className='add-sub'>
                <span className='add'>
                    <button type='button' className='add-btn' onClick={() => { setIndex2(index => [...index, index.length + 1]); props.increase('skillsRef frameworksLibrariesAndDatabases'); }}>+</button>
                </span>
                <span className='subtract'>
                    <button type='button' className='add-btn' onClick={() => {
                        const arr = [...index2];
                        arr.pop();
                        setIndex2(arr);
                        props.decrease('skillsRef frameworksLibrariesAndDatabases');
                    }}>-</button>
                </span>
            </div>
            <div className='left-align'>Subjects</div>
            {index3.map((e, i) => <div key={e}>
                <Input field='Skill' type='text' value={props.values.skillsRef.subjects[i]} handleChangeInput={props.onChange(`skillsRef subjects ${i}`)} />
            </div>
            )}
            <div className='add-sub'>
                <span className='add'>
                    <button type='button' className='add-btn' onClick={() => { setIndex3(index => [...index, index.length + 1]); props.increase('skillsRef subjects'); }}>+</button>
                </span>
                <span className='subtract'>
                    <button type='button' className='add-btn' onClick={() => {
                        const arr = [...index3];
                        arr.pop();
                        setIndex3(arr);
                        props.decrease('skillsRef subjects');
                    }}>-</button>
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

export default Skills;