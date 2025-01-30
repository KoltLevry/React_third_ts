import styled from "@emotion/styled";

export const HwWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 20px;
  min-height: 500px;
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 300px;
  position: relative;

`;
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


