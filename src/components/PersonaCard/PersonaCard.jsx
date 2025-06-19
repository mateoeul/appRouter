import './personasCard.css';
import CardButton from '../CardButton/CardButton';

const PersonaCard = (props) => {
    return (
        <div className="persona-card">
            <h1 className="persona-card-title">{props.nombre}</h1>
            <p className="persona-card-age">Edad: {props.edad}</p>
            <CardButton name={`/persona/${props.id}`} />
        </div>
    );
}

export default PersonaCard;