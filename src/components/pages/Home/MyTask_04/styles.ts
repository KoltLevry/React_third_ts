import styled from "@emotion/styled";



export const MyTakWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  
`

export const SimpleText = styled.div``
export const TitleSecond = styled.h2``
export const TitleFirst = styled.h1`
text-align: center;
`
export const Text = styled.p`
margin-top:20px;
`
export const List = styled.ul``
export const ListItem = styled.li``

export const TryCodeBlock = styled.div`

`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardWraper = styled.div`
  display: flex;
  gap: 20px;
`

/*  4 task */
export const ResultBlock = styled.div`
 font-size: 24px;
  width: 600px;
  min-height: 100px;
  padding: 20px;
  background-color: #f9d6758a;
  font-weight: bold;
  font-size: 30px;
  border-radius: 16px;
  margin-top: 20px;
`;

export const ExtraSpinner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid rgba(0,0,0,0.1);;
  /* border-top-color: blue; */
  border-top: 4px solid blue;
  background-color: #fff;
  animation: spin 1.5s linear infinite;
  margin-top: 30px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

