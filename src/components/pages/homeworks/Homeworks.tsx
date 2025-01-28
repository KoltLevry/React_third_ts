import React from "react";
import { Outlet} from "react-router-dom";
import { 
  HomeworkWrapper,
  HomeworksPageTitle, 
  HumworkNumberContainer,
  HwNumberContainerList,
  ListItem,
  StyledLink,
  TasksLoadContainer
 }  from './styles';


function Homeworks() {
  return (
    <HomeworkWrapper>
      <HumworkNumberContainer>
      <HomeworksPageTitle>Welcome to the Homeworks Page!</HomeworksPageTitle>
        <HwNumberContainerList>
          <ListItem>
            <StyledLink to="homework-08">Homework 8</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="homework-09">Homework 9</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="homework-10">Homework 10</StyledLink>
          </ListItem>
        </HwNumberContainerList>
      </HumworkNumberContainer>

      <TasksLoadContainer>
        <Outlet />
      </TasksLoadContainer>
    </HomeworkWrapper>
  );
}

export default Homeworks;
