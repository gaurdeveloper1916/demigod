
import Chooseus from '../component/corporate/v2/choose-us/Chooseus';
import Eventmanagement from '../component/corporate/v2/event-managment/Eventmanagement';
import Uniting from '../component/corporate/v2/Uniting';
import Weplanwecelebrate from '../component/corporate/v2/Weplanwecelebrate';

export const metadata = {
    metadataBase: new URL('https://www.demigodhouse.com'),
    title: 'Corporate Event Management Services | Demigod House',
    description: "Transform your corporate events with Demigod House - India's premier event management company. Specializing in conferences, product launches, team building activities, and corporate celebrations with 13+ years of excellence.",
    alternates: {
      canonical: '/corporate-page',
    },
    openGraph: {
      title: 'Corporate Event Management Services | Demigod House',
      description: "Transform your corporate events with Demigod House - India's premier event management company. Specializing in conferences, product launches, team building activities, and corporate celebrations.",
      url: '/corporate-page',
      siteName: 'Demigod House',
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Demigod House Corporate Event Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Corporate Event Management Services | Demigod House',
      description: "Premier corporate event management solutions for conferences, product launches, team building activities and corporate celebrations.",
      images: '/images/twitter-image.jpg',
    },
    robots: {
      index: true,
      follow: true,
    }
  };
  

const page = () => {

    return (
        <>
        <Uniting/>
        <Weplanwecelebrate/>
        <Eventmanagement/>
        <Chooseus/>
        {/* <VideoCarousel/> */}

        </>
    )
}

export default page;