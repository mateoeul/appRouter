import { useParams } from "react-router-dom";
import people from '../../data/people.json';
import './personaDetalle.css';

const PersonaDetalle = () => {

    let personaId = useParams().id;
    let persona = people.find(p => p.id === parseInt(personaId));
    if (!persona) {
        return <h1>Persona no encontrada</h1>;
    }

  return (
    <div className="persona-detalle">
      <h1>Detalle de Persona</h1>
      <div className="persona-detalle-card">
        <h2>{persona.nombre} {persona.apellido}</h2>
        <p>{persona.email}</p>
        <p>Edad: {persona.edad}</p>
        {persona.edad >= 18
            ? <p>Es mayor de edad</p>
            : <p>Es menor de edad</p>
        }
      </div>
    </div>
  );
}

export default PersonaDetalle;