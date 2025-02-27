
import Chooseus from '../component/corporate/v2/choose-us/Chooseus';
import Eventmanagement from '../component/corporate/v2/event-managment/Eventmanagement';
import Uniting from '../component/corporate/v2/Uniting';
import Weplanwecelebrate from '../component/corporate/v2/Weplanwecelebrate';

export const metadata = {
  metadataBase: new URL('https://www.demigodhouse.com'),
  title: "DemiGod House | Media, Marketing & Events",
  description: "DemiGod House specializes in media, marketing, and event management. We provide world-class corporate event solutions, wedding planning, and brand experiences across the globe.",

  keywords: [
    "Best Corporate Event Management Company","Top Corporate Event Management Company","Best Corporate Event Planners","Top Corporate Event Planners","Best Corporate Event Organizers","Top Corporate Event Organizers","Best Corporate Event Management Company in USA","Best Corporate Event Management Company in New York","Best Corporate Event Management Company in UK","Best Corporate Event Management Company in London","Best Corporate Event Management Company in Chicago","Best Corporate Event Management Company in Mumbai","Best Corporate Event Management Company in New Delhi","Best Corporate Event Management Company in Jaipur","Best Corporate Event Management Company in Bengaluru","Best Corporate Event Management Company in Pune","Best Corporate Event Management Company in South Africa","Best Corporate Event Management Company in Thailand","Best Corporate Event Management Company in Dubai","Best Corporate Event Management Company in Spain","Best Corporate Event Management Company in Germany","Best Corporate Event Management Company in Poland","Best Corporate Event Solutions","Top Corporate Event Solutions","Best Corporate Event Planning Company","Top Corporate Event Planning Company","Best Conference Management Services","Top Conference Management Services","Best Corporate Meeting Planners","Top Corporate Meeting Planners","Best Product Launch Event Planners","Top Product Launch Event Planners","Best Award Ceremony Organizers","Top Award Ceremony Organizers","Best Team Building Event Planners","Top Team Building Event Planners","Best Virtual Event Management Company","Top Virtual Event Management Company","Best Hybrid Event Solutions","Top Hybrid Event Solutions","Best Exhibition Management Company","Top Exhibition Management Company","Best Trade Show Organizers","Top Trade Show Organizers","Best Corporate Gala Event Planners","Top Corporate Gala Event Planners","Best Corporate Retreat Planning Services","Top Corporate Retreat Planning Services","Best MICE Event Planning Services","Top MICE Event Planning Services","Best Corporate Entertainment Solutions","Top Corporate Entertainment Solutions","Best Event Technology Solutions","Top Event Technology Solutions","Best Sustainable Event Management Company","Top Sustainable Event Management Company"
],


  alternates: {
    canonical: 'https://www.demigodhouse.com/',
  },

  openGraph: {
    title: "DemiGod House | Media, Marketing & Events",
    description: "Leading corporate event management company with expertise in media, marketing, and luxury event planning worldwide. Experience excellence in event execution.",
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
    description: "DemiGod House specializes in media, marketing, and world-class event planning. Your trusted partner for corporate and luxury events worldwide.",
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
        <Uniting/>
        <Weplanwecelebrate/>
        <Eventmanagement/>
        <Chooseus/>
        {/* <VideoCarousel/> */}

        </>
    )
}

export default page;