import { Outlet } from "react-router-dom";
import { 
  HomeWrapper,
  HomePageTitle, 
  HomeNumberContainer,
  HomeNumberContainerList,
  ListItem,
  StyledLink,
  TasksLoadContainer
 }  from './styles';


function Home() {
  return (
    <HomeWrapper>
      <HomeNumberContainer>
      <HomePageTitle>Welcome to the Home Page!</HomePageTitle>
        <HomeNumberContainerList>
          <ListItem>
            <StyledLink to="mytask-01">Task 1 - Introduce</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="mytask-02">Task 2 - Interfaces</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="mytask-03">Task 3 - New level</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="mytask-04">Task 4 - UseEffect, axios</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="mytask-05">Task 5 - APIs</StyledLink>
          </ListItem>
        </HomeNumberContainerList>
      </HomeNumberContainer>

      <TasksLoadContainer>
        <Outlet />
      </TasksLoadContainer>
    </HomeWrapper>
  );
}

export default Home;

