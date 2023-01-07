import "./Fiche.css";
import { useParams, useNavigate } from "react-router-dom";
import logementData from "./../../data/logements.json";
import DisplayLogementFiche from "../../components/LogementFiche/DisplayLogementFiche";
import { useEffect } from "react";

const Fiche = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const logementFilterById = logementData.filter((loge) => loge.id === id)[0];

  useEffect(() => {
    if (logementFilterById) {
    } else {
      navigate("/404");
    }
  });

  return (
    <div className="fiche-container">
      {logementFilterById && (
        <DisplayLogementFiche logementToShow={logementFilterById} />
      )}
    </div>
  );
};

export default Fiche;
