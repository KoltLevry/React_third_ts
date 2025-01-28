import { Outlet} from "react-router-dom";
import { 
  HomeworkWrapper,
  HomeworksPageTitle, 
  HumworkNumberContainer,
  HwNumberContainerList,
  ListItem,
  StyledLink,
  TasksLoadContainer
 }  from './Homeworks';


function Homework() {
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
            {/* <Link to="homework-10">Homework 10</Link> */}
          </ListItem>
        </HwNumberContainerList>
      </HumworkNumberContainer>

      <TasksLoadContainer>
        <Outlet />
      </TasksLoadContainer>
    </HomeworkWrapper>
  );
}

export default Homework;
