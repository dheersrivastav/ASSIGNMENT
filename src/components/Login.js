// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import styled from 'styled-components';
import Modal from 'react-modal';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f09, #d0e);
  animation: fadeIn 1s ease-in-out;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.5s ease-out;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  color: #3f51b5;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
  &:focus {
    border-color: #3f51b5;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #303f9f;
  }
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const ModalTitle = styled.h2`
  margin-bottom: 1rem;
`;

const ModalButton = styled(Button)`
  margin-top: 1rem;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [navigateOnClose, setNavigateOnClose] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();

      // Send the token and user data to the backend
      await sendTokenToBackend(token, userCredential.user);

      setModalMessage('Login successful!');
      setShowModal(true);
      setNavigateOnClose(true); // Navigate on close
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        setModalMessage('Wrong password. Please try again.');
      } else if (error.code === 'auth/user-not-found') {
        setModalMessage('No account found with this email.');
      } else {
        setModalMessage('Login failed. Please try again.');
      }
      setShowModal(true);
      setNavigateOnClose(false); // Do not navigate on close
    }
  };

  const sendTokenToBackend = async (token, user) => {
    console.log('Token:', token);  // Log the token
    console.log('User:', user);    // Log the user data

    try {
      const response = await axios.post('http://localhost:5000/api/verifyToken', { 
        token, 
        user: {
          email: user.email,
          uid: user.uid
        }
      });

      if (response.data.message === 'Token is valid and email is verified') {
        console.log('Token verified on backend');
      } else {
        console.log('Token verification failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error sending token to backend:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (navigateOnClose) {
      navigate('/home'); // Redirect to the home page on successful login
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </Form>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Login Message"
        ariaHideApp={false}
      >
        <ModalContent>
          <ModalTitle>{modalMessage}</ModalTitle>
          <ModalButton onClick={closeModal}>OK</ModalButton>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Login;
