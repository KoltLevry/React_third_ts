import styled from "@emotion/styled";

interface CardStyledProps {
  highlighted?: boolean;
}

export const AnimalCardWrapper = styled.div<CardStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-width: 300px;
  min-height: 400px;
  border-radius: 16px;
  font-size: 24px;
  
  background-color: ${ ({highlighted}) => (highlighted ? "rgba(145, 218, 211, 0.425)" : "purple")};

`;

export const CardTitle = styled.h1`
  color: white;
`;

export const CardImage = styled.img`
  width: 100px;
`;

export const AnimalName = styled.h3`
  text-align: center;
`;

export const AnimalSpecies = styled.div`
  font-weight: bold;
`;

export const CardContent = styled.p`
  color: white;
  font-size: 24px;
`;
