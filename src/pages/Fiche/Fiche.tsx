import "./Fiche.css"
import { useParams } from "react-router-dom";
import logementData from "./../../data/logements.json";
import DisplayLogementFiche from "../../components/LogementFiche/DisplayLogementFiche";

const Fiche = () => {
  const { id } = useParams();

  const logementFilterById = logementData.filter((loge) => loge.id === id)[0];

  return (
    <div className="fiche-container">
      <DisplayLogementFiche logementToShow={logementFilterById} />
    </div>
  );
};

export default Fiche;
