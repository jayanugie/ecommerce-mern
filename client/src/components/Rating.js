import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStarHalfAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ stars, reviews }) => {
  return (
    <div className="rating">
      <span>
        <FontAwesomeIcon
          icon={
            stars >= 1 ? faStar : stars >= 0.5 ? faStarHalfAlt : faStarRegular
          }
          color="#f8e825"
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={
            stars >= 2 ? faStar : stars >= 1.5 ? faStarHalfAlt : faStarRegular
          }
          color="#f8e825"
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={
            stars >= 3 ? faStar : stars >= 2.5 ? faStarHalfAlt : faStarRegular
          }
          color="#f8e825"
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={
            stars >= 4 ? faStar : stars >= 3.5 ? faStarHalfAlt : faStarRegular
          }
          color="#f8e825"
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={
            stars >= 5 ? faStar : stars >= 4.5 ? faStarHalfAlt : faStarRegular
          }
          color="#f8e825"
        />
      </span>
      <span>{reviews && reviews}</span>
    </div>
  );
};

export default Rating;
