
import { ContentComponent, DataItem } from "./styles"
// import { ContentProps } from "./types"
import { MainCardContext } from "../MainCard/MainCard"
import { useContext } from "react"
// щоб він чекав пропсів треба їх задати
// function Content( {contentData}:ContentProps) {

//   return (
//     <ContentComponent>
//       <DataItem>First Name: {contentData.firstName}</DataItem>
//       <DataItem>Last Name: {contentData.lastName}</DataItem>
//       <DataItem>Age: {contentData.age}</DataItem>

//     </ContentComponent>
//   )
// }

function Content() {

  // Step 3 - need to get data with useContext from the store (call)
  const userContentData = useContext(MainCardContext)
  console.log(userContentData)

  return (
    <ContentComponent>
      {/* userContentData?.firstName (? - коли є/прописаний undefined)
        якщо в userContentData (не знайдено даних) ? (то не шукати).firstName
      */}
      <DataItem>First Name: {userContentData?.firstName}</DataItem>
      <DataItem>Last Name: {userContentData?.lastName}</DataItem>
      <DataItem>Age: {userContentData?.age}</DataItem>

    </ContentComponent>
  )
}

export default Content