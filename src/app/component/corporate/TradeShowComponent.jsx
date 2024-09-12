const TradeShowComponent = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5 "  data-aos="fade-down" data-aos-duration="1000" >
        <div className="col-lg-10 p-lg-0 p-md-0 p-4 d-flex flex-lg-row flex-md-row flex-column  mt-5">
          <div className="col-lg-7  d-flex flex-lg-row flex-column gap-2 ">
            <h1 className="text-white vict-text">TRADE </h1>
            <h1 className="text-white vict-text ">SHOW </h1>
          </div>
          <div className="col-lg-5 mx-lg-0 mx-3 flex-column text-white  d-flex justify-content-center ">
            <p className="">AGENCE WERLYON</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              omnis sed quis libero alias reiciendis fuga qui,{" "}
            </p>
           <div className="col-lg-4">
           <buton
              type="button"
              className=" p-5 py-2 verySmallFont rounded-pill cursor button-bg text-white text-start fw-bold "
            >
              SEE NOW
            </buton>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradeShowComponent;
