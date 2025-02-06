import { useState, createContext } from "react"

import Section from "../Section/Section"
import { MainCardTitle, MainCardWrapper } from "./styles"
import { UserData } from "./types"

// Step 1 - create a store = createContext;
export const MainCardContext = createContext<undefined | UserData>(undefined);

function MainCard() {
  const [userData, setUserData] = useState<UserData>({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 11
  })

  return (
    // Step 2 - container wrapper to get const MainCardContex for any inner element
    // Provider contain access to the data value - userData
      <MainCardContext.Provider value={userData}>
        <MainCardWrapper>
          <MainCardTitle>Main Card</MainCardTitle>
          <Section />
        </MainCardWrapper>
      </MainCardContext.Provider>
  )

  // return (
  //   <MainCardWrapper>
  //     <MainCardTitle>Main Card</MainCardTitle>
  //     <Section data={userData}/>
  //   </MainCardWrapper>
  // )
}

export default MainCard