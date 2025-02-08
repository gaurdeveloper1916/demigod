'use client'
import { createContext, useContext, useState } from "react";
export const Auth = createContext();


export const AppProvider = ({ children }) => {
  const [state, setState] = useState("Hello from Context!");
  const [landingHeading, setLandingHeading] = useState('Economic Patriots Summit Euprope')
  const [landingDes, setLandingDes] = useState('')
  function handleUpdate(heading,description) {
    setLandingHeading(heading)
    setLandingDes(description)
  }
  return (
    <>
      <Auth.Provider
        value={{
          state,
          setState,
          landingHeading, setLandingHeading,
          landingDes, setLandingDes, handleUpdate

        }}
      >
        {children}
      </Auth.Provider>
    </>
  );
}
export default AppProvider;
