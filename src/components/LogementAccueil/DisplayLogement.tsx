import logementData from '../../data/logements.json'
import "./DisplayLogement.css"
import { useNavigate } from 'react-router-dom';

const DisplayLogement = () => {

  const navigate = useNavigate()

  return (
    <section>
      
      <ul className='logement-list'>
        {
          logementData.map((logement) => (
            <li key={logement.id} className="logement-card" onClick={() => navigate('./fiche/'+logement.id)}>
              <h3>{logement.title}</h3>
              <img src={logement.cover} alt={logement.title + "cover"} />
            </li>
          ))
        }
      </ul>

    </section>
  );
};

export default DisplayLogement;