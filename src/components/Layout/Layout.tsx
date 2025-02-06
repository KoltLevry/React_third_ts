import { useNavigate } from 'react-router-dom'
import {
    LayoutComponent,
    Header,
    NavContainer,
    LogoContainer,
    Main,
    Footer,
    StyledNavLink
  } from './styles'
  import { LayoutProps } from './types'
import { Link } from 'react-router-dom';
  
  function Layout({ children }: LayoutProps) {

    // обовяз викликаємо - тільки при виклику може щось повернутися
    const navigate = useNavigate();

    return (
      <LayoutComponent>
        <Header>
          {/* картинки, діви, кнопки - всі мають артибут onClick */}
          <LogoContainer onClick={()=>{navigate('/')}}></LogoContainer>
          <NavContainer>
            <StyledNavLink
              to='/'
              style={
                ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
              }>
              Home
            </StyledNavLink>
            <StyledNavLink
              to='/about'
              style={
                ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
              }>
              About
            </StyledNavLink>
            <StyledNavLink
              to='/users'
              style={
                ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
              }>
              Users
            </StyledNavLink>
            <StyledNavLink
              to='/clients'
              style={
                ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
              }>
              Clients
            </StyledNavLink>
            <StyledNavLink to='/lesson14' style={
                ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
              }>
              Lesson 14
            </StyledNavLink>
          </NavContainer>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <Link to='/'><LogoContainer></LogoContainer></Link>
        </Footer>
      </LayoutComponent>
    )
  }
  
  export default Layout