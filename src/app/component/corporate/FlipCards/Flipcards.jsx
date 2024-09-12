import React from "react";
import "../FlipCards/flipcard.css";
const Flipcards = () => {
  const sliderImageUrl = [
    {
      url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
      hoverUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
      heading: "Heading 1",
      paragraph: "Description for image 1",
      companyOutline: "Company outline text for image 1",
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
      hoverUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
      heading: "Heading 2",
      paragraph: "Description for image 2",
      companyOutline: "Company outline text for image 2",
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
      hoverUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
      heading: "Heading 3",
      paragraph: "Description for image 3",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
      hoverUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
      heading: "Heading 4",
      paragraph: "Description for image 4",
    },
  ];

  return (
    <div className="">
      <div className="d-flex justify-content-center align-items-center "  data-aos="zoom-in" data-aos-duration="1500" >
      <div className="col-lg-10">
        <div className="d-flex gap-4 flex-lg-row flex-md-row flex-column">
          <div
            className="wrapper w-100"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="flipper ">
              <div
                style={{
                  backgroundImage: `url('./images/outing-1.png')`,
                }}
                className="card-front rounded"
              ></div>
              <div className="card-back  w-100  rounded ">
                <div className="d-flex flex-column"></div>
                <img
                  className="w-100 rounded"
                  src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                  alt="Card Back"
                />
                <div className="p-3 ">
                  <h5 style={{ textAlign: "start" }}>Event Name</h5>
                  <p style={{ textAlign: "start", fontSize: "12px" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse reprehenderit iste soluta distinctio voluptates
                    inventore eligendi ,{" "}
                  </p>
                  <div className="d-flex justify-content-end">
                    <button
                      style={{
                        textAlign: "end",
                        borderRadius: "20px",
                        fontSize: "10px",
                      }}
                      className=" very mx-5 px-3 py-1 border border-none verySmallFont rounded-pill cursor button-bg text-white fw-bold "
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            // style={{ marginTop: "7rem" }}
            className="wrapper w-100 custom-margin-second"
            ontouchstart="this.classList.toggle('hover');"
          >
            <p className="slider-text ">COMPANY</p>
            <div className="flipper ">
              <div
                style={{
                  backgroundImage: `url('./images/outing-2.png')`,
                }}
                className="card-front rounded"
              ></div>
              <div className="card-back  w-100  rounded ">
                <div className="d-flex flex-column"></div>
                <img
                  className="w-100 rounded"
                  src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                  alt="Card Back"
                />
                <div className="p-3 ">
                  <h5 style={{ textAlign: "start" }}>Event Name</h5>
                  <p style={{ textAlign: "start", fontSize: "12px" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse reprehenderit iste soluta distinctio voluptates
                    inventore eligendi Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse reprehenderit {" "}
                  </p>
                  <div className="d-flex justify-content-end">
                    <button
                      style={{
                        textAlign: "end",
                        borderRadius: "20px",
                        fontSize: "10px",
                      }}
                      className=" very mx-5 px-3 py-1 border border-none verySmallFont rounded-pill cursor button-bg text-white fw-bold "

                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            // style={{ marginTop: "7rem" }}
            className="wrapper w-100 custom-margin"
            ontouchstart="this.classList.toggle('hover');"
          >
            <p className="slider-text">OUTINGS</p>
            <div className="flipper ">
              <div
                style={{
                  backgroundImage: `url('./images/outing-2.png')`,
                }}
                className="card-front rounded"
              ></div>
              <div className="card-back  w-100  rounded ">
                <div className="d-flex flex-column"></div>
                <img
                  className="w-100 rounded"
                  src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                  alt="Card Back"
                />
                <div className="p-3 ">
                  <h5 style={{ textAlign: "start" }}>Event Name</h5>
                  <p style={{ textAlign: "start", fontSize: "12px" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse reprehenderit iste soluta distinctio voluptates
                    inventore eligendi Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse reprehenderit iste soluta distinctio voluptates
                    inventore eligendi {" "}
                  </p>
                  <div className="d-flex justify-content-end">
                    <button
                      style={{
                        textAlign: "end",
                        borderRadius: "20px",
                        fontSize: "10px",
                      }}
                      className=" very mx-5 px-3 py-1 border border-none verySmallFont rounded-pill cursor button-bg text-white fw-bold "

                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
          //  style={{ marginTop: "7rem" }}
            className="wrapper w-100 custom-margin-third "
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="flipper ">
              <div
                style={{
                  backgroundImage: `url('./images/outing-4.png')`,
                }}
                className="card-front rounded"
              ></div>
              <div className="card-back  w-100  rounded ">
                <div className="d-flex flex-column"></div>
                <img
                  className="w-100 rounded"
                  src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                  alt="Card Back"
                />
                <div className="p-3 ">
                  <h5 style={{ textAlign: "start" }}>Event Name</h5>
                  <p style={{ textAlign: "start", fontSize: "12px" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse reprehenderit iste soluta distinctio voluptates
                    inventore eligendi {" "}
                  </p>
                  <div className="d-flex justify-content-end">
                    <button
                      style={{
                        textAlign: "end",
                        borderRadius: "20px",
                        fontSize: "10px",
                      }}
                      className=" very mx-5 px-3 py-1 border border-none verySmallFont rounded-pill cursor button-bg text-white fw-bold "

                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Flipcards;
