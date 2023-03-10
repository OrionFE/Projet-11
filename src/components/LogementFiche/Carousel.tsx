import { useState } from "react";

interface Props {
  img: string[];
}

const Carousel = ({ img }: Props) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => {
    if (img.length > currentImg) {
      setCurrentImg(currentImg + 1);
    }
    if (img.length - 1 === currentImg) {
      setCurrentImg(0);
    }
  };

  const prevImg = () => {
    if (currentImg === 0) {
      setCurrentImg(img.length - 1);
    } else {
      setCurrentImg(currentImg - 1);
    }
  };

  return (
    <div className="container-carousel">
      <img src={img[currentImg]} alt="" />
      <p className="index-img">{currentImg + 1}/{img.length}</p>
      {img.length === 1 ? (
        <></>
      ) : (
        <div>
          <i
            className="fa-solid fa-xl fa-chevron-right btn-car-right"
            onClick={() => nextImg()}
          ></i>
          <i
            className="fa-solid fa-xl fa-chevron-left btn-car-left"
            onClick={() => prevImg()}
          ></i>
        </div>
      )}
    </div>
  );
};

export default Carousel;
