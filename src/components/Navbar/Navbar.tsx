import { FaUserAstronaut, FaSun, FaStar } from "react-icons/fa";
import { 
    NavbarWrapper, 
    LogoContainer, 
    NavContainer, 
    NavList,
    NavListItem,
    NavLink } from "./styles"

function Navbar() {
  return (
    <NavbarWrapper>
      <LogoContainer>
        Our Logo - 
        <FaSun />
        <FaStar />
        <FaUserAstronaut />
      </LogoContainer>
      <NavContainer>
        <NavList>
          <NavListItem>
            <NavLink to="/">Home</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/lessons">Lessons</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/homeworks">Homeworks</NavLink>
          </NavListItem>
        </NavList>
      </NavContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
