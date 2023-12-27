import React from "react";
import "../style/imageCard.css";
import { useNavigate } from "react-router-dom";

function ImageCard({streamRoom}) {

  const navigate = useNavigate();

  const cardClickHandler = () => {
    console.log(streamRoom)
    navigate("/stream", {state: {streamRoom: streamRoom}})
  }

  return (
    <div className="card w-80 bg-base-100 shadow-xl m-1 rounded-none" onClick={cardClickHandler}>
      <div className="card-container">
        <figure className="figure-hover">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
          <div className="overlay-text">20.6K viewers</div>
        </figure>
      </div>

      <div className="flex p-5">
        <img
          src="https://assets-global.website-files.com/5fac161927bf86485ba43fd0/64705ebab37828940373a617_How-to-stream-to-Twitch-(1)-(1).png"
          className="w-12 h-12 rounded-full object-cover m-1"
        />
        <div className="flex-grow min-w-0">
          <h2 className="text-white font-semibold truncate">
            Watch now the best stream out there
          </h2>
          <p className="text-sm">NickEh 30</p>
          <p className="text-sm">Fortnite</p>
          <div className="card-actions justify-start">
            <div className="badge bg-gray-700 font-semibold">Fashion</div>
            <div className="badge bg-gray-700 font-semibold">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
