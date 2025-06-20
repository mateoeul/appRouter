import people from '../../data/people.json';
import './stats.css';

const Stats = () => {

    const totalPeople = people.length;
    const edadTotal = people.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    const promedioEdad = totalPeople > 0 ? (edadTotal / totalPeople).toFixed(2) : 0;
    const masDe35 = people.filter(persona => persona.edad > 35).length;
    
    const edadMaxima = people.reduce((max, persona) => persona.edad > max ? persona.edad : max, 0);
    const masGrandes = people.filter(persona => persona.edad === edadMaxima)
        ?.map(persona => `${persona.nombre} ${persona.apellido} con ${persona.edad} años`).join(', ');

    const edadMinima = people.reduce((min, persona) => persona.edad < min ? persona.edad : min, 150);
    const masChicos = people.filter(persona => persona.edad === edadMinima)
        ?.map(persona => `${persona.nombre} ${persona.apellido} con ${persona.edad} años`).join(', ');
    
    return (
        <div className="stats-container">
            <h1>Estadisitcas</h1>
            <p>Total de personas: {totalPeople}</p>
            <p>Promedio Edad: {promedioEdad}</p>
            <p>Mayores de 35: {masDe35}</p>
            <p>El/los mas grande/s: {masGrandes}</p>
            <p>El/los mas chico/s: {masChicos}</p>  
        </div>
    );
}

export default Stats;