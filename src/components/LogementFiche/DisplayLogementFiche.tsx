import Carrousselle from "./Carousel";
import DisplayList from "./DisplayList";
import Rating from "./Rating";
import Tags from "./Tags";

interface Logement {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: Host;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

interface Host {
  name: string;
  picture: string;
}

interface Props {
  logementToShow: Logement;
}

const DisplayLogementFiche = ({ logementToShow }: Props) => {

  const { tags, rating, description, equipments, pictures , title, location, host } = logementToShow;

  return (
    <>
      <Carrousselle img={pictures} />
      <div className="fiche-infos">
        <h3 className="fiche-title">{title}</h3>
        <p className="fiche-location">{location}</p>
        <Tags tags={tags} />
        <div className="container-rating-host">
          <Rating rating={rating} />
          <div className="host">
            <p className="host-name">{host.name}</p>
            <img
              src={host.picture}
              alt={"photo de profile de " + host.name}
              className="host-img"
            />
          </div>
        </div>
        <div className="container-list">
          <DisplayList list={description} type={"string"} title={'Description'} page={"fiche"} />
          <DisplayList list={equipments} type={"list"} title={"Équipements"} page={"fiche"}  />
        </div>
      </div>
    </>
  );
};

export default DisplayLogementFiche;
