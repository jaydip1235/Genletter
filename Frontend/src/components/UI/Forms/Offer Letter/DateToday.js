import { React } from 'react';
import '../Resume/FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';

const DateToday = (props) => {

    const backForm = e => {
        e.preventDefault();
        props.prevStep();
    };

    return (
        <form onSubmit={props.formSubmitted}>
            <div className="title">{props.title}</div>
            <Input field='Date Today' type='date' value={props.values.dateToday.dateToday} handleChangeInput={props.onChange('dateToday dateToday')} />
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

export default DateToday;