import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoSaveOutline } from "react-icons/io5";

import "./wedding.css";
const WeddingCard = ({ margin, image }) => {
  return (
    <div
      className={`card rounded-4 text-white mx-2 ${
        margin ? "margin-custom" : ""
      }`}
      style={{ backgroundColor: "#3B3B3B" }}
    >
      <div className="d-flex px-2">
        <img className="w-25 rounded-pill" src="./images/demigodnew.png"></img>
        <p className="m-0  fw-bold py-3">Demigod_wedding</p>
      </div>
      <img
        src="https://media.istockphoto.com/id/1933376240/photo/portrait-of-a-bride-holding-her-bouquet-on-beach-wedding.jpg?s=612x612&w=0&k=20&c=Bu-SxK2KZtKFf5zeawkobT5KTj32HcvDwRPH7-1WxkY="
        className="card-img-top img-fluid px-4"
        // height={300}
        alt="..."
      />
      <div className="d-flex justify-content-between px-3 my-2 pt-3">
        <div className="d-flex gap-2">
          <FaRegHeart size={25} />
          <FaRegComment size={25} />
          <IoPaperPlaneOutline size={25} />
        </div>
        <div className="d-flex">
          <IoSaveOutline size={25} />
        </div>
      </div>
      <div className="card-body">
        <p className="card-title">10,543 views</p>
        <p className="card-text m-0">
          <span className="fw-bold">Demigod_Weddings </span>
          Like this post if you want this to be the mood board for your dream
          wedding.
        </p>
        <p className="m-0 text-secondary">view all 287 comments</p>
        <p className="m-0 text-secondary">4 days ago</p>
      </div>
    </div>
  );
};

export default WeddingCard;
