interface Props {
  rating: string;
}

const Rating = ({ rating }: Props) => {
  const ratingNum = Number(rating);

  const getColorRating = (rating: number, currentStar: number) => {
    if (currentStar <= rating) {
      return "star-colored";
    }
  };

  return (
    <ul className="rating-list">
      <li>
        <i className={`fa-sharp fa-solid fa-star ${getColorRating(ratingNum, 1)}`}></i>
      </li>
      <li>
        <i className={`fa-sharp fa-solid fa-star ${getColorRating(ratingNum, 2)}`}></i>
      </li>
      <li>
        <i className={`fa-sharp fa-solid fa-star ${getColorRating(ratingNum, 3)}`}></i>
      </li>
      <li>
        <i className={`fa-sharp fa-solid fa-star ${getColorRating(ratingNum, 4)}`}></i>
      </li>
      <li>
        <i className={`fa-sharp fa-solid fa-star ${getColorRating(ratingNum, 5)}`}></i>
      </li>
    </ul>
  );
};

export default Rating;
