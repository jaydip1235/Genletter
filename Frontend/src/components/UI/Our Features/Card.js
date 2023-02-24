import { Button } from '../Button/Button';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card">
            <div className='card-inner'>
                <div className='card-front'>
                    <p className='title'>{props.name}</p>
                </div>
                <div className='card-back'>
                    <Link to={props.link}><Button content='PROCEED' /></Link>
                </div>
            </div>
        </div>
    );
}

export default Card;