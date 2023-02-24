import { React } from 'react';
import '../Resume/FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const JobDetails = (props) => {

    const continueForm = e => {
        e.preventDefault();
        props.nextStep();
    };

    const backForm = e => {
        e.preventDefault();
        props.prevStep();
    };

    // const addButton = () => {
    //     setIndex(index => [...index, index.length + 1]);
    //     props.increase('educationRef');
    // }

    // const subtractButton = () => {
    //     const arr = [...index];
    //     arr.pop();
    //     setIndex(arr);
    //     props.decrease('educationRef');
    // }

    return (
        <Form>
            <div className="title">{props.title}</div>
            <Input field='Job Title' type='text' value={props.values.jobDetails.jobTitle} handleChangeInput={props.onChange('jobDetails jobTitle')} />
            <Input field='Job Location' type='text' value={props.values.jobDetails.jobLocation} handleChangeInput={props.onChange('jobDetails jobLocation')} />
            <Input field='Job Type (Full Time / Part Time / Internship)' type='text' value={props.values.jobDetails.jobType} handleChangeInput={props.onChange('jobDetails jobType')} />
            <Input field='Start Date' type='date' value={props.values.jobDetails.startDate} handleChangeInput={props.onChange('jobDetails startDate')} />
            <div className='left-align'>Responsibilities and Expectations</div>
            {props.values.jobDetails.responsibilitiesAndExpectations.map((rae, index) => (
                <div key={index}>
                    {/* <div className='numbering'>{index + 1}</div> */}
                    <Input field={`${index + 1}`} type='text' value={rae} handleChangeInput={props.onChangeSub(`jobDetails responsibilitiesAndExpectations ${index}`)} />
                </div>
            ))}
            <div>
                <span className='add'>
                    <button type='button' className='add-btn' onClick={() => props.increaseSub('jobDetails responsibilitiesAndExpectations')}>+</button>
                </span>
                <span className='subtract'>
                    <button type='button' className='add-btn' onClick={() => props.decreaseSub('jobDetails responsibilitiesAndExpectations')}>-</button>
                </span>
            </div>
            <Input field='Reporting Department' type='text' value={props.values.jobDetails.reportingDept} handleChangeInput={props.onChange('jobDetails reportingDept')} />
            <Input field='Salary' type='text' value={props.values.jobDetails.salary} handleChangeInput={props.onChange('jobDetails salary')} />
            <Input field='Salary Frequency (Weekly / Monthly etc.)' type='text' value={props.values.jobDetails.salaryFrequency} handleChangeInput={props.onChange('jobDetails salaryFrequency')} />
            <div className='left-align'>Other Benefits</div>
            {props.values.jobDetails.otherBenefits.map((ob, index) => (
                <div key={index}>
                    {/* <div className='numbering'>{index + 1}</div> */}
                    <Input field={`${index + 1}`} type='text' value={ob} handleChangeInput={props.onChangeSub(`jobDetails otherBenefits ${index}`)} />
                </div>
            ))}
            <div>
                <span className='add'>
                    <button type='button' className='add-btn' onClick={() => props.increaseSub('jobDetails otherBenefits')}>+</button>
                </span>
                <span className='subtract'>
                    <button type='button' className='add-btn' onClick={() => props.decreaseSub('jobDetails otherBenefits')}>-</button>
                </span>
            </div>
            <Input field='Paid Leaves' type='text' value={props.values.jobDetails.paidLeaves} handleChangeInput={props.onChange('jobDetails paidLeaves')} />
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

export default JobDetails;