import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({singleNews}) => {
    const {_id,title,details,image_url} = singleNews;
  return (
    <div className="card mb-8">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        {
            details.length > 200 
            ?
            <p>{details.slice(0,200)} <Link className="text-lg text-blue-500" to={`/news/${_id}`}>Read more.....</Link></p>
            :
            <p>{details}</p>
        }
        
      </div>
    </div>
  );
};

export default NewsCard;
