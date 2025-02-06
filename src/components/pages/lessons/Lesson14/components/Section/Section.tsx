import Content from "../Content/Content"
import { SectionTitle, SectionWrapper } from "./styles"

function Section( ) {
  return (
    <SectionWrapper>
      <SectionTitle>Section Block</SectionTitle>
      <Content />
    </SectionWrapper>
  )
}

// function Section( {data}: SectionProps ) {
//   return (
//     <SectionWrapper>
//       <SectionTitle>Section Block</SectionTitle>
//       <Content contentData={data} />
//     </SectionWrapper>
//   )
// }
// все має бути по мінімуму і ефективно

export default Section