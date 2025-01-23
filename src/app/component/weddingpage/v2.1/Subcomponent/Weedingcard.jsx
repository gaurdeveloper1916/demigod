import React from "react";


const WeddingCard = ({ margin,heading,image,subHeading }) => {
  return (
    <div
      className={`rounded-4 text-white mx-4 ${margin ? "margin-custom" : ""
        }`}
    >
      <div
        alt="Bride holding bouquet"
        style={{
          width: "230px",
          height: "230px",
          borderStyle: "dotted",
          borderWidth: "2px",
          borderColor: "black",
        }}
        className="rounded-circle p-2 d-flex justify-content-center align-items-center"
      >
        <img
          src={image}
          className="rounded-circle"
          alt="Bride holding bouquet"
          style={{ width: "200px", height: "200px" }}
        />
      </div>

      <div className="d-flex gap-2 mt-4">
        <p className="text-black">01 </p>
        <div className="d-flex flex-column">
          <p className="text-black m-0">{heading}</p>
          <p className="text-black ml-5 slider-text">{subHeading}</p>

        </div>
      </div>

    </div>
  );
};

export default WeddingCard;
