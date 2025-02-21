import Header from "../component/common/header/Header";
import Sectionfive from "../component/weddingpage/v2.1/Sectionfive";
import Sectionfour from "../component/weddingpage/v2.1/Sectionfour";
import Sectionone from "../component/weddingpage/v2.1/Sectionone";
import Sectionthree from "../component/weddingpage/v2.1/Sectionthree";
import Sectiontwo from "../component/weddingpage/v2.1/Sectiontwo";
import Accordian from "../component/weddingpage/v2.1/Subcomponent/Accordian";
import VendorCategories from "../component/weddingpage/v2.1/VendorCategory";
import Lovestory from "../component/weddingpage/v2.1/Lovestory"
import Moodboard from "../component/weddingpage/Moodboard"
import './styles.css'

export const metadata = {
  title: 'DemiGod Wedding Planners',
  description: 'Best Wedding Planners in India and overseas, with more than 12 years of event management experience',
  alternates: {
    canonical: `https://www.demigodhouse.com/wedding`,
  },
  openGraph: {
    title: '',
    description: '',
    url: '',
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
    title: '',
    description: '',
    image: '',
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
        <VendorCategories />
        <Lovestory/>

        {/* <GallerySlider/> */}
        {/* <Moodboard/> */}
      </div>



    </>
  )
}
export default page;

