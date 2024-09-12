import React from "react";
import Header from "../component/common/header/Header";
import './index.css'
import Aboutevent from "../component/corporate/Aboutevent";
import TradeShowComponent from "../component/corporate/TradeShowComponent";
import ServicesSlider from "../component/corporate/ServicesSlider";
import UpdownSlider from "../component/corporate/UpdownSlider";
import Networkingpage from "../component/weddingpage/Networkingpage";
import Flipcards from "../component/corporate/FlipCards/Flipcards";
import Montering from "../component/corporate/FlipCards/Montering";
import Footer from "../component/common/footer/Footer";
import TypeWriterText from "../component/constant/TypeWriterText";
import Home from "../component/corporate/cards/Home";
import FlipProducts from "../component/corporate/FlipCards/FlipProducts";
function page(props) {
  return (
    <>
      <div className="container-fluid p-0 bg-black fade-in">
        <Header />
        <div>
          {/* Banner */}
          <div
            className=""
            style={{
              backgroundImage: "url('/images/wedding1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <div className="col-lg-12 d-flex">
              <div className="col-lg-6"></div>
              <div className="col-lg-5 mt-5 px-2">
                <p className="text-start header-image-heading mt-4">
                FREELANCE DIGITAL SIT AMET CONSECTETUR, ADIPISICING ELIT. ILLUM EX REM DELECTUS, DOLORIBUS VELIT VOLUPTATIBUS TEMPORA 

                  <span className="text-white fw-bold"> SINCE 2008</span>{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-12 d-flex  align-items-center">
              <div className="d-flex flex-column justify-content-center align-items-center">
               <h1 style={{fontFamily:'slick'}} className="text-white fs-innovate"><TypeWriterText text='INNOVATE .NETWORK.' speed='100'/>
               </h1>
               <h1 style={{marginLeft:'10rem'}} className="text-white fw-bold fs-innovate"><TypeWriterText text='.INSPIRE.SUCCEED' speed='100'/></h1>
              </div>

            </div>

            <div className="  social-cont
              text-white ">
              <p>Instragram</p>
              <p>Linkedin</p>
              <p>Facebook</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
        <div> <Aboutevent /></div>
        <TradeShowComponent  />
        {/* <ServicesSlider/> */}
        <UpdownSlider/>
        <Networkingpage/>
        {/* <Home/> */}
        <Flipcards/>
        <FlipProducts/>
        <Montering/>
        {/* <Footer/>  */}
      </div>
    </>
  );
}

export default page;
