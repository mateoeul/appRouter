import people from '../../data/people.json';
import PersonaCard from '../../components/PersonaCard/PersonaCard';
import './home.css';

const Home = () =>{
    return (
        <div className="home">
            <h2 className="home-title">Listado de Personas</h2>
            <div className="home-cards-grid">
                {people.map(persona => (
                    <PersonaCard
                        key={persona.id}
                        id={persona.id}
                        nombre={persona.nombre}
                        edad={persona.edad}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;