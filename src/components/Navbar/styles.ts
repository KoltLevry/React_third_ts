import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
  background: linear-gradient(145deg, #f0f8ff, #c6e2ff);
  font-size: 24px;
  font-weight: bold;
  height: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 18px
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 400px;
  height: auto;

  @media (max-width: 1300px) {
    display: none; 
  }
`;

export const NavContainer = styled.nav`
  padding: 10px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 100px;
  padding: 10px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const NavListItem = styled.li`
  list-style: none;
  padding: 0;
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: rgba(125, 174, 248, 0.644);
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: rgb(81, 141, 231);
    opacity: 0.8;
    transform: scale(1.1);
  }

  &:active {
    background-color: rgb(55, 111, 189);
    transform: scale(0.95);
    color: white;
  }
`;

export const NavLink = styled(Link)`
text-decoration: none;
  color: rgb(32, 32, 32);
  width: 100%;
  display: block;
  padding: 10px 20px;
  border-radius: 10px;

  &:hover {
    color: whitesmoke;
  }
`;

// @media (max-width: 1344px) {
//     .task-wrapper {
//         grid-template-columns: repeat(2, 1fr);
//     font-size: 1.3rem;

//     }
// }

// @media (max-width: 1068px) {
//     .logo-container {
//         display: none;
//     }
//     .nav-container ul{
//         gap:50px;
//     }
// }

// @media (max-width: 768px) {
//     .logo-container {
//         display: none;
//     }
//     .nav-container ul{
//         display: flex;
//         justify-content: center;
//         gap: 5%;
//         padding: 10px;
//         width: 100%;
//     }
//     .nav-container ul {
//         justify-content: center;
//         align-items: center;
//         gap: 20px;
//         width: 100%;
//     }

//     .nav-container a:active {
//         color: #fff;
//         background-color: #4287f5;
//         border-radius: 5px;
//     }

//     .navbar-wrapper{
//        width: 100vw;

//     }
// }
