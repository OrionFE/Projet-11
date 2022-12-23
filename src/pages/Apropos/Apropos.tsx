import DisplayList from "../../components/LogementFiche/DisplayList";
import bgPropos from "./../../../public/bgPropos.png"
import bgProposBig from "./../../../public/bgProposBig.png"
import "./Apropos.css"

const Apropos = () => {

  const description = [
    {
      title: "Fiabilité",
      description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
      title: "Respect",
      description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Service",
      description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      title: "Sécurité",
      description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ]

  const getImg = () => {
    if(window.innerWidth > 768) {
      return <img src={bgProposBig} alt="paysage de montagne avec des sapins et une rivière" className="img-propos" />
    } else {
     return <img src={bgPropos} alt="paysage de montagne avec des sapins et une rivière" className="img-propos" />
    }
  }

  return (
    <div className="container-propos">
      {getImg()}
      <div className="container-desc">
      {
        description.map((desc , index) => (
          <DisplayList key={index} list={desc.description} type={"string"} title={desc.title} page={"propos-style"}/>
        ))
      }
      </div>
    </div>
  );
};

export default Apropos;