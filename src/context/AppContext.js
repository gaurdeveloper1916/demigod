'use client'
import { createContext, useContext, useState } from "react";
export const Auth = createContext();


export const AppProvider = ({ children }) => {
  const [state, setState] = useState("Hello from Context!");
  const [landingHeading, setLandingHeading] = useState('Economic Patriots Summit Euprope')
  const [landingDes, setLandingDes] = useState('')
  const [ticketdes, setTicketDes] = useState('')

  function handleUpdate(heading,description,ticket) {
    setLandingHeading(heading)
    setLandingDes(description)
    setTicketDes(ticket)
    
  }
  return (
    <>
      <Auth.Provider
        value={{
          state,
          setState,
          setTicketDes,ticketdes,
          landingHeading, setLandingHeading,setTicketDes,
          landingDes, setLandingDes, handleUpdate

        }}
      >
        {children}
      </Auth.Provider>
    </>
  );
}
export default AppProvider;
