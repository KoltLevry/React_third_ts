import { Outlet } from "react-router-dom";
import { 
    LessonsWrapper,
    LessonsPageTitle, 
    LessonNumberContainer,
    LessonNumberContainerList,
    ListItem,
    StyledLink,
    TasksLoadContainer
   }  from './Lessons';

function Lessons() {
  return (
    <LessonsWrapper>
      <LessonNumberContainer>
      <LessonsPageTitle>Welcome to the Lessons Page!</LessonsPageTitle>
        <LessonNumberContainerList>
          <ListItem>
            <StyledLink to="lesson-08">Lesson 8</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="lesson-09">Lesson 9</StyledLink>
          </ListItem>
          <ListItem>
            {/* <StyledLink to="lesson-10">Lesson 10</StyledLink> */}
          </ListItem>
          <ListItem>
            {/* <StyledLink to="lesson-01">Lesson 11</StyledLink> */}
          </ListItem>
        </LessonNumberContainerList>
      </LessonNumberContainer>

      <TasksLoadContainer>
        <Outlet />
      </TasksLoadContainer>
    </LessonsWrapper>
  );
}

export default Lessons;
