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
import VendorCategories from "../component/weddingpage/v2.1/VendorCategory";
import WeddinfSlider from "../component/weddingpage/WeddinfSlider";
import Lovestory from "../component/weddingpage/v2.1/Lovestory"
import GallerySlider from "../component/weddingpage/GallerySlider"
import Moodboard from "../component/weddingpage/Moodboard"
import './styles.css'

export const metadata = {
  metadataBase: new URL('https://www.demigodhouse.com'),
  title: "DemiGod House | Media, Marketing & Events",
  description: "DemiGod House specializes in media, marketing, and event management. We are the leading experts in luxury wedding planning, corporate events, and brand experiences worldwide.",

  keywords: [
    "Best Wedding Planners","Top Wedding Planners","Best Destination Wedding Planners","Top Destination Wedding Planners","Best Luxury Wedding Planners","Top Luxury Wedding Planners","Best Wedding Planning Company","Top Wedding Planning Company","Best Wedding Event Management Company","Top Wedding Event Management Company","Best Destination Wedding Planning Company","Top Destination Wedding Planning Company","Best Wedding Designers","Top Wedding Designers","Best Celebrity Wedding Planners","Top Celebrity Wedding Planners","Best Wedding Event Organizers","Top Wedding Event Organizers","Best Wedding Decor Planners","Top Wedding Decor Planners","Best Wedding Coordination Services","Top Wedding Coordination Services","Best Royal Wedding Planners","Top Royal Wedding Planners","Best Beach Wedding Planners","Top Beach Wedding Planners","Best Traditional Wedding Planners","Top Traditional Wedding Planners","Best Indian Wedding Planners","Top Indian Wedding Planners","Best Christian Wedding Planners","Top Christian Wedding Planners","Best Muslim Wedding Planners","Top Muslim Wedding Planners","Best Hindu Wedding Planners","Top Hindu Wedding Planners","Best Sikh Wedding Planners","Top Sikh Wedding Planners","Best Multicultural Wedding Planners","Top Multicultural Wedding Planners","Best Wedding Venue Selection Services","Top Wedding Venue Selection Services","Best Wedding Catering Services","Top Wedding Catering Services","Best Wedding Photography & Videography Services","Top Wedding Photography & Videography Services","Best Wedding Entertainment Planners","Top Wedding Entertainment Planners","Best Wedding Invitation Designers","Top Wedding Invitation Designers","Best Wedding Floral Decorators","Top Wedding Floral Decorators","Best Wedding Theme Planners","Top Wedding Theme Planners","Best Wedding Logistics Management","Top Wedding Logistics Management"
],


  alternates: {
    canonical: 'https://www.demigodhouse.com/',
  },

  openGraph: {
    title: "DemiGod House | Media, Marketing & Events",
    description: "Top-rated wedding planners specializing in luxury destination weddings, corporate events, and brand experiences across India, USA, Europe, and beyond.",
    url: 'https://www.demigodhouse.com',
    siteName: 'DemiGod House',
    type: 'website',
    images: [
      {
        url: 'https://www.demigodhouse.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "DemiGod House | Media, Marketing & Events",
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "DemiGod House | Media, Marketing & Events",
    description: "Luxury wedding planners specializing in destination weddings, event management, and brand marketing across India, USA, Europe, and beyond.",
    images: 'https://www.demigodhouse.com/images/twitter-image.jpg',
    site: '@YourTwitterHandle', // Replace with your actual Twitter handle
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    'fb:app_id': 'YourFacebookAppID', // Replace with your actual Facebook App ID
  },
};


const page = () => {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Header />
        <Sectionone />
        <Sectiontwo />
        <Sectionfour />
        <Moodboard/>
        <Sectionthree />
        <Accordian />
        <Sectionfive />
        {/* <VendorCategories />
        <Lovestory/> */}

        {/* <GallerySlider/> */}
        {/* <Moodboard/> */}
      </div>



    </>
  )
}
export default page;

