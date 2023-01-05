import React from "react";
import { Link } from "react-router-dom";

const WatchCard = ({ id,image,name,category }) => {
  return (
    <div data-testid={`watch-card-wrapper-${id}`}>
      <Link to={`/watch/${id}`}>
      <div>
        <img data-testid="watch-card-image" src={image} alt={name} />
      </div>
      <div>
        <div data-testid="watch-name">{name}</div>
        <div data-testid="watch-category">{category}</div>
      </div>
      </Link>
    </div>
  );
};

export default WatchCard;
