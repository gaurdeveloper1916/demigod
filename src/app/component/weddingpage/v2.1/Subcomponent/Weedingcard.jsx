import React from "react";


const WeddingCard = ({ margin }) => {
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
          src="https://media.istockphoto.com/id/1933376240/photo/portrait-of-a-bride-holding-her-bouquet-on-beach-wedding.jpg?s=612x612&w=0&k=20&c=Bu-SxK2KZtKFf5zeawkobT5KTj32HcvDwRPH7-1WxkY="
          className="rounded-circle"
          alt="Bride holding bouquet"
          style={{ width: "200px", height: "200px" }}
        />
      </div>

      <div className="d-flex gap-2 mt-4">
        <p className="text-black">01 </p>
        <div className="d-flex flex-column">
          <p className="text-black m-0">Connect</p>
          <p className="text-black ml-5 slider-text">We’ll first get to know each other on a 45-minute complimentary Zoom call. This is where we’ll dive deeper into your specific wedding vision, dream destination, your love story, and any special needs or requests you may have. We’ll also answer all your questions, so you can make sure we’re the best fit for you!</p>

        </div>
      </div>

    </div>
  );
};

export default WeddingCard;
