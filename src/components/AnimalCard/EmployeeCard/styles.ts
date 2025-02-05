import styled from "@emotion/styled";

export const EmployeeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 590px;
  min-height: 470px;
  border-radius: 4px;
  font-size: 24px;
  background-color: #ffffff;
`;

export const EmployeeName = styled.h1`
  color: white;
`;

export const EmployeeSurname = styled.img`
  width: 100px;
`;

export const EmployeeAge = styled.h3`
  text-align: center;
`;

export const AnimalSpecies = styled.div`
  font-weight: bold;
`;

export const CardContent = styled.p`
  color: white;
  font-size: 24px;
`;
