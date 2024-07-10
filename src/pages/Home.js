import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const AppBar = styled.header`
  background-color: #3f51b5;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(RouterLink)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: #3f51b5;
  border-radius: 4px;
  &:hover {
    background-color: #303f9f;
  }
`;

const Main = styled.main`
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const HeroContent = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 4rem 2rem;
  margin: 2rem auto;
  border-radius: 8px;
  max-width: 600px;
  position: relative;
  z-index: 1;
`;

const HeroButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled(RouterLink)`
  padding: 0.75rem 1.5rem;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  background-color: ${props => (props.variant === 'outlined' ? 'transparent' : '#3f51b5')};
  border: ${props => (props.variant === 'outlined' ? '2px solid #3f51b5' : 'none')};
  color: ${props => (props.variant === 'outlined' ? '#3f51b5' : 'white')};
  &:hover {
    background-color: ${props => (props.variant === 'outlined' ? '#e3f2fd' : '#303f9f')};
    border: ${props => (props.variant === 'outlined' ? '2px solid #303f9f' : 'none')};
  }
`;

const moveBackground = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0 0; }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://www.transparenttextures.com/patterns/diagmonds.png'), linear-gradient(135deg, #e09, #d0e);
  opacity: 0.2;
  z-index: 0;
  animation: ${moveBackground} 20s linear infinite;
`;

const Home = () => {
  return (
    <>
      <AppBar>
        <Title>Firebase Auth App</Title>
        <Nav>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/protected">Protected Page</StyledLink>
        </Nav>
      </AppBar>
      <Main>
        <Background />
        <HeroContent>
          <h2>Welcome to Firebase Auth App</h2>
          <p>This is a simple app demonstrating Firebase authentication with React. You can register, login, and access protected pages.</p>
          <HeroButtons>
            <Button to="/register">Get Started</Button>
            <Button to="/login" variant="outlined">Login</Button>
          </HeroButtons>
        </HeroContent>
      </Main>
    </>
  );
};

export default Home;
