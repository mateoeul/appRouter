import './cardButton.css';
import { Link } from 'react-router-dom';

const CardButton = ({name}) =>{
    return (
        <Link to={name}>
            <button className="card-button">
                <span>Ver mas</span>
            </button>
        </Link>
    );
}
export default CardButton;