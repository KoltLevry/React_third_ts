import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HomeworkWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 100px);
  background-color: #f9f9f9;
  font-size: 24px;
`;

export const HomeworksPageTitle = styled.p`
  text-align: center;
`;

export const HumworkNumberContainer = styled.div`
  min-width: 20%;
  padding: 20px;
  background-color: #eef1f7;
  border-right: 2px solid #ccc;
`;

export const HwNumberContainerList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 5px;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

export const TasksLoadContainer = styled.div`
  width: 80%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

