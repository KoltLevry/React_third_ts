import styled from "@emotion/styled";

export const HederBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: 100%;
`;

export const HwWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  min-height: 100%;
  min-width: 100%;
`;

export const GreetingText = styled.h2`
  color: red;
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  min-width: 100%;

  @media (max-width: 1810px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const CatCard = styled.div`
  width: 700px;
  height: 130px;
  padding: 30px;
  border: 2px solid darkblue;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  overflow-y: scroll;
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