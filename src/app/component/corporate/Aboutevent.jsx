import React from "react";
function Aboutevent(props) {
  return (
    <div className="d-flex justify-content-center align-items-center"   >
      <div className="col-lg-10 d-flex flex-lg-row flex-md-row flex-column gap-5 justify-content-center align-items-center overflow-hidden">
        <div className="col-lg-6  " data-aos="fade-right" data-aos-duration="1200">
          <img
            className="img-fluid w-100 "
            src="/images/product-launch-1.png"
          ></img>
          {/* <hr className='text-white hrClass' /> */}

          <div className="col-lg-12 text-white mt-5" >
            <div className="d-flex flex-column  justify-content-between mx-2  p-lg-0 pm-md-0 p-3">
              <h4>About Events</h4>
              <h4>BESpoke Artisian Mastery meet concious luxury</h4>
              <div className="col-lg-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque neque pariatur, repudiandae provident excepturi animi
                  ratione unde obcaecati corrupti nemo sed eligendi aperiam
                  fugit impedit dolorem non reiciendis, placeat in.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-lg-5 mt-md-4 "  data-aos="fade-left" data-aos-duration="1200">
          <div className="d-flex justify-content-end align-items-center gap-3 my-3">
            <h5 className="text-end text-warning  ">
              Product Launch Events
            </h5>
            <img className="img-fluid arrow-img mx-lg-4" src="/images/arrow.png"></img>
          </div>

          <img
            className="img-fluid w-100  m-0"
            src="/images/product-launch-2.png"
          ></img>
          {/* <hr className='text-white hrClass' /> */}

          <div className=" text-white mt-5 p-lg-0 pm-md-0 p-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem quasi quod amet nisi placeat ex iste accusantium.
              Odit, accusantium fugit quasi sequi vero ullam ducimus quia
              facilis vel cumque totam.
            </p>
            <buton
              type="button"
              className="very  p-5 py-2 verySmallFont rounded-pill cursor button-bg text-white fw-bold "
            >
              Register
            </buton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutevent;
