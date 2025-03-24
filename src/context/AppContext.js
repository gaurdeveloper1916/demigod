'use client'
import { createContext, useState } from "react";
export const Auth = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState("Hello from Context!");
  const [landingHeading, setLandingHeading] = useState('Economic Patriots Summit Euprope')
  const [landingDes, setLandingDes] = useState('')
  const [ticketdes, setTicketDes] = useState('')
  const [landingImage, setLandingImage] = useState({
    leftImage: './demigodevent.webp',
    midVideo: "./event-page/wz̄ine_festval_video.mp4",
    rightImage: './demigodevent.webp'
  })
  function handleUpdate(heading, description, ticket) {
    setLandingHeading(heading)
    setLandingDes(description)
    setTicketDes(ticket)

  }
  const [commonImage,setCommonImage]=useState('./demigodevent.webp')
  function imageForLandingPage(leftImage = './demigodevent.webp', midVideo = '', rightImage = './demigodevent.webp') {
    setLandingImage((prev) => ({
      ...prev,
      leftImage: leftImage,
      midVideo: midVideo,
      rightImage: rightImage
    }));
  }
  return (
    <>
      <Auth.Provider
        value={{
          state,
          setState,
          setTicketDes, ticketdes,
          landingHeading, setLandingHeading, setTicketDes,
          landingDes, setLandingDes, handleUpdate, imageForLandingPage, landingImage, setLandingImage,commonImage,setCommonImage

        }}
      >
        {children}
      </Auth.Provider>
    </>
  );
}
export default AppProvider;
