// import React from "react";
// import Header from "../component/common/header/Header";
// import Footer from "../component/common/footer/Footer";
// import "./index.css";
// import WeddinfSlider from "../component/weddingpage/WeddinfSlider";
// import ServicesSlider from "../component/weddingpage/ServicesSlider";
// import GallerySlider from "../component/weddingpage/GallerySlider";
// import MultiSlider from "../component/weddingpage/MultiSlider";
// import Moodboard from "../component/weddingpage/Moodboard";
// import WeddingSlider from "../component/weddingpage/OnScrollDiv/WeddingSlider";
// import OnScrollDiv from "../component/weddingpage/OnScrollDiv/OnScrollDiv";
// import FridayNight from "../component/homepage/friday/FridayNight";
// const page = (props) => {
//   return (
//     <div className="bg-black ">
//       <Header />
//       <div
//         className=""
//         style={{
//           backgroundImage: "url('/images/wedding1.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "100vh",
//           width: "100%",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           flexDirection: "column",
//           textAlign: "center",
//         }}
//       >
//         <div className="mt-5 pt-5 d-flex flex-lg-row flex-wrap gap-4 justify-content-center  align-items-start">
//           <div class="dropdown mx-2">
//             <div
//               class="dropbtn dropdown-toggle border-bottom"
//               data-bs-toggle="dropdown-menu"
//               aria-expanded="false"
//             >
//               Desired Date
//             </div>
//             <ul class="dropdown-menu">
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Action
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Another action
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Something else here
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div class="dropdown">
//             <div
//               class="dropbtn dropdown-toggle border-bottom"
//               data-bs-toggle="dropdown-menu"
//               aria-expanded="false"
//             >
//               Destination
//             </div>
//             <ul class="dropdown-menu">
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Action
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Another action
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Something else here
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div class="dropdown">
//             <div
//               class="dropbtn dropdown-toggle border-bottom"
//               data-bs-toggle="dropdown-menu"
//               aria-expanded="false"
//             >
//               Guests
//             </div>
//             <ul class="dropdown-menu">
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Action
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Another action
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Something else here
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="dropbtn ">Get started</div>
//         </div>


//         <h1 className="text-white vict-text">VICTORIA HITT</h1>
//       </div>

//       <WeddinfSlider />

//       <OnScrollDiv/>

//       <Moodboard />

//       <div className=" d-flex justify-content-center align-items-center flex-column text-white margins ">
//         <h1>Inspirations</h1>

//         <h1 className="discover">Discover Our services</h1>
//         <ServicesSlider />
//       </div>

     
//         <GallerySlider />
     
//         <FridayNight/>
//         <MultiSlider />
      

     
//     </div>
//   );
// };

// export default page;


import Header from "../component/common/header/Header";
import SectionFive from "../component/corporate/v2.1/components/SectionFive";
import SectionThree from "../component/corporate/v2.1/components/SectionThree";
import SectionTwo from "../component/corporate/v2.1/components/SectionTwo";
import Slider from "../component/events/slider/slider/Slider";
import Testtube from "../component/homepage/TestTube";
import Sectionfive from "../component/weddingpage/v2.1/Sectionfive";
import Sectionfour from "../component/weddingpage/v2.1/Sectionfour";
import Sectionone from "../component/weddingpage/v2.1/Sectionone";
import Sectionthree from "../component/weddingpage/v2.1/Sectionthree";
import Sectiontwo from "../component/weddingpage/v2.1/Sectiontwo";
import Accordian from "../component/weddingpage/v2.1/Subcomponent/Accordian";
import WeddinfSlider from "../component/weddingpage/WeddinfSlider";
import './styles.css'
const page =()=>{
  return(
    <>
    <Header/>
        <Sectionone/>
        {/* <Sectiontwo/> */}
        <Sectionfour/>
        <Sectionthree/>
        <Accordian/>
        <Sectionfive/>
        


    </>
  )
}
export default page;

