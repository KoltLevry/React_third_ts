import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 100px);
  background-color: #f9f9f9;
  font-size: 24px;
`;

export const HomePageTitle = styled.p`
  text-align: center;
`;

export const HomeNumberContainer = styled.div`
  min-width: 20%;
  padding: 20px;
  background-color: #eef1f7;
  border-right: 2px solid #ccc;
`;

export const HomeNumberContainerList = styled.ul`
  list-style: none;
  padding: 0;
  overflow-y: scroll;
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

  display: block;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//   @media (max-width: 1344px) {
//     .tasks-load-container {
//       padding: 0;
//     }
// }

  // @media (max-width: 768px) {
    // .tasks-load-container{
    //  font-size: 16px;
      /* padding: 0 !important; */
      // max-width: 100vw;
    // }
  // }