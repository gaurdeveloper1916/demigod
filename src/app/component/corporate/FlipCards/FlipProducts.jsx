import React from "react";
import "../FlipCards/flipcard.css";

function FlipProducts(props) {
  return (
    <div className="">
      <div
        className="d-flex justify-content-center align-items-center "
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="col-lg-10">
          <div className="d-flex gap-1 flipproduct-cont flex-lg-row  flex-column">
          <div
            // style={{ marginTop: "7rem" }}
            className="wrapper w-100 custom-margin-second"
            ontouchstart="this.classList.toggle('hover');"
          >
            {/* <p className="slider-text ">COMPANY</p> */}
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
            className="wrapper w-100 custom-margin-second"
            ontouchstart="this.classList.toggle('hover');"
          >
            {/* <p className="slider-text ">COMPANY</p> */}
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
            className="wrapper w-100 custom-margin-second"
            ontouchstart="this.classList.toggle('hover');"
          >
            <p className="slider-text d-lg-none d-block">COMPANY</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipProducts;
