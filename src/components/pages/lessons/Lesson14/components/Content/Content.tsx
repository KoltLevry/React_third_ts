
import { ContentComponent, DataItem } from "./styles"
// import { ContentProps } from "./types"
import { MainCardContext } from "../MainCard/MainCard"
import { useContext } from "react"
import Button from "components/Button/Button"
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
  // const userContentData = useContext(MainCardContext)
  const {data, onDataChange} = useContext(MainCardContext)
  // console.log(userContentData)
  const onDeleteData = () => {
    onDataChange(undefined)
  }

  return (
    <ContentComponent>
      {/* userContentData?.firstName (? - коли є/прописаний undefined)
        якщо в userContentData (не знайдено даних) ? (то не шукати).firstName
      */}
      <DataItem>First Name: {data? data?.firstName : '-'}</DataItem>
      <DataItem>Last Name: {data? data?.lastName : '-'}</DataItem>
      <DataItem>Age: {data? data?.age : '-'}</DataItem>
      <Button name='Clear Data' onClick={onDeleteData}></Button>
    </ContentComponent>
  )
}

export default Content