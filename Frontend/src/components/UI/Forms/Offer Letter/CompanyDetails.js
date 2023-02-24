import { React } from 'react';
import '../Resume/FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const CompanyDetails = (props) => {

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
            <Input field='Company Name' type='text' value={props.values.companyDetails.companyName} handleChangeInput={props.onChange('companyDetails companyName')} />
            <input type='file' accept='image/jpg, image/jpeg, image/png' onChange={(e) => {
                const files = e.target.files;
                props.onImageChange(`companyDetails companyLogoURL ${URL.createObjectURL(files[0])}`);
            }} />
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

export default CompanyDetails;