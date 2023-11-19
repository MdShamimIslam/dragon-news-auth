import React from "react";
import { Link } from "react-router-dom";
import { CiShare2, CiBookmark } from "react-icons/ci";
import { IoEye } from "react-icons/io5";

const NewsCard = ({ singleNews }) => {
  const { _id, title, details, image_url,author,rating,total_view } = singleNews;
  return (
    <div className="my-6 border p-2">
      <div className="flex items-center justify-between bg-slate-100 p-4 rounded">
        <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={author?.img} />
              </div>
            </div>
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <div className="card mb-8">
        <h2 className="card-title my-3">{title}</h2>
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="mt-4">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)} <br />
              <Link className=" text-blue-500" to={`/news/${_id}`}>
                Read more.....
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 mt-2">
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
          {/* <p className="text-xl">{rating.number}</p> */}
          </div>
          <div className="flex items-center gap-2">
          <IoEye  className="text-xl"/>
          <p className="text-xl">{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
