import React from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
import { useLoaderData, useParams } from "react-router-dom";

const News = () => {
  const {id} = useParams();
  const news = useLoaderData();

  const newsById = news.find(aNews => aNews._id === id);
  console.log("find by news-------", newsById);
  const {image_url} = newsById;
 

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 mt-6 gap-8">
        <div className="col-span-3">
          <h3 className="text-xl font-semibold">Dragon News</h3>
          <div className="card  bg-base-100 shadow-xl mt-8">
            <figure>
              <img
                src={image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default News;
