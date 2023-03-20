import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = (props) => {
    // console.log(props.resume);
    return (
        <div className='profile'>
            <div className='header'>Your History for email id <b>{props.email}</b></div>
            <div className='table-area'>
                <table>
                    <tbody>
                        <tr>
                            <th>Date Created</th>
                            <th>Type of Document</th>
                            <th>Edit Link</th>
                        </tr>
                        {props.resume.map((resume, index) => (
                            <tr key={index}>
                                <td>{resume.date}</td>
                                <td>Resume</td>
                                <td><Link to={`/edit/resume/${resume._id}`}>edit</Link></td>
                            </tr>
                        ))}
                        {props.offerLetter.map((ol, index) => (
                            <tr key={index}>
                                <td>{ol.date}</td>
                                <td>Offer Letter</td>
                                <td><Link to={`/edit/offer_letter/${ol._id}`}>edit</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Profile;