import Header from "./component/common/header/Header";
import Formdiv from "./component/events/slider/formdiv/page";
import GetTickets from "./component/events/slider/gettickets/page";
import Slider from "./component/events/slider/slider/Slider";
import Booknow from "./react-slick/BookNow";
import FridayNight from "./component/homepage/friday/FridayNight";
import Membership from "./component/homepage/Membership";
import Prochainement from "./component/homepage/Prochainement";

import TwoImagesDiv from "./component/homepage/TwoImagesDiv";
import Index from "./events/page";
import Herosection from "./component/mnm/Herosection";
import Community from "./component/mnm/Community";
import ElectronicCommunity from "./component/mnm/slider/ElectronicCommunity";
import LeadingOrganisation from "./component/mnm/LeadingOrganisation";
import Industryevents from "./component/mnm/Industryevents";
import TabsComponent from "./component/mnm/TabsComponent";
import Openforbusiness from "./component/mnm/Openforbusiness";
import Partnership from "./component/mnm/Partnership";
import Getintouch from "./component/mnm/Getintouch";

export const metadata = {
  title: "DemiGod House",
  description: "Media, Marketing & Events",
  keywords: [
    "Best Wedding planners in India", "Best Wedding planners in USA", "Best Wedding planners in Europe",
    "Best Wedding planners in Mumbai", "Best Wedding planners in New Delhi", "Best Wedding planners in Bengaluru",
    "Best Wedding planners in New York", "Best Wedding planners in Spain", "Best Wedding planners in California",
    "Best Wedding planners in Thailand", "Best Wedding planners in Dubai", "Best Wedding planners in London",
    "Best Wedding planners in Germany", "Best Wedding planners in Poland", "Best Wedding planners in Asia",
    "Best Wedding planners in Australia"
  ],
  alternates: {
    canonical: ``,
  },
  openGraph: {
    title: '',
    description: '',
    url:'',
    images: [
      {
        url: '',
      },
    ],
  },
  twitter: {
    title: '',
    description: '',
    image: '',
  },
  linkedin: {
    title:'',
    description: '',
    image: '',
  },
};
export default function Home() {
  return (
    <div className="bg-black container-fluid p-0">
     <Header/>
      {/* <Index/> */}
      <Herosection /> 
      <Community/> 
      <ElectronicCommunity/> 
      <LeadingOrganisation/> 
      {/* <Ecosystem /> */}
      <Industryevents/>
      <TabsComponent/>
      {/* <Sectionone/>   */}
      {/* <Repetativemandm/> */}

      <Openforbusiness/>
      <Partnership/>
      <Getintouch/> 

    </div>
  );
}
