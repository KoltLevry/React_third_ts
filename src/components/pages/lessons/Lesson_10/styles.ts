import styled from "@emotion/styled";
import url from './../../../../../node_modules/axios/lib/platform/node/classes/URLSearchParams';

export const Lesson10Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 20px;
  margin-top: 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  width: 600px;
  padding: 20px;
  background-color: #b0d4d8;
  border-radius: 6px;
`;

export const ResultBlock = styled.div`
 font-size: 24px;
  max-width: 600px;
  padding: 20px;
  background-color: #b0d8c3;
  font-weight: bold;
  border-radius: 6px;
`;

export const TitleFirst = styled.h1``;

export const JokeImage = styled.img`
  width: 600px; 
  height: auto;
  border-radius: 10px;
`;