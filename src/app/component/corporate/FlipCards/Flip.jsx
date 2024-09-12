import React from 'react';

function Flip({item}) {
    return (
        <div
        class="wrapper w-100"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div class="flipper ">
          <div
            style={{
              backgroundImage: `url(${item.url})`,
            }}
            class="card-front rounded"
          >
            <div className=" d-flex flex-column position-absolute bottom-0 p-1">
              <p
                style={{ textAlign: "start" }}
                className="text-white m-0 p-0"
              >
                Event Name
              </p>
              <p
                style={{ textAlign: "start", fontSize: "12px" }}
                className="text-white"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Tenetur explicabo deleniti repellendus{" "}
              </p>
            </div>
          </div>
          <div class="card-back  w-100  rounded ">
            <div className="d-flex flex-column"></div>
            <img
              className="w-100 rounded"
              src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            ></img>
            <div className="p-3">
              <h5 style={{ textAlign: "start" }}>Event Name</h5>
              <p style={{ textAlign: "start", fontSize: "12px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Esse reprehenderit iste soluta distinctio
                voluptates inventore eligendi,{" "}
              </p>
              <div className="d-flex justify-content-end">
                <button
                  style={{
                    textAlign: "end",
                    borderRadius: "20px",
                    fontSize: "10px",
                  }}
                  className=" px-3"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Flip;