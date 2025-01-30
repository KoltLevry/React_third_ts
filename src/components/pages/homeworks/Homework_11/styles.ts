import styled from "@emotion/styled";

export const HwWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  /* width: 300px; */
  min-height: 100%;
  min-width: 100%;
`;

export const GreetingText = styled.h1`
background-color: red;
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  min-width: 100%;
`

export const CatCard = styled.div`
// ! max-width ? 
// todo max-width ? 
// ~ max-width ? 
// // max-width ? 
width: 700px;
padding: 30px;
border: 2px solid darkblue;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0,0,0,0.2);
background-color: #fff;
`

export const PhotoContainer = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 10px;
`;

export const ErrorBlock = styled.div`
  width: 600px;
  padding: 20px;
  background-color: #eb9378;
  border: 2px solid #e61212;
  border-radius: 6px;
  color: #e61212;
  font-size: 28px;
  font-weight: bold;
`;

export const ResultContainer = styled.div`
width: 300px;
height: 300px;
`

export const SpinnerContainer = styled.div`
display: flex;
justify-content: center;
margin: 10px;
`
// new card

export const SimpleText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ResultBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 font-size: 24px;
  min-height: 300px;
  padding: 20px;
  font-weight: bold;
  font-size: 30px;
  border-radius: 16px;
`;

export const ResultBlockImg = styled.img`

width: 300px;
  height: 300px;
`;


