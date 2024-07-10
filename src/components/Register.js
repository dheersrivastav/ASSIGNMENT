import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification, fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '../firebase';
import styled, { keyframes } from 'styled-components';
import Modal from 'react-modal';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f09, #d0e);
  animation: ${fadeIn} 1s ease-in-out;
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
  animation: ${slideIn} 0.5s ease-out;
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

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [navigateOnClose, setNavigateOnClose] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {

      // Check if the email is already in use
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length > 0) {
        setModalMessage('This email is already in use. Please try logging in or use a different email.');
        setShowModal(true);
        setNavigateOnClose(false); // Do not navigate on close
        return;
      }

      // Try to create the user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      setModalMessage('Registration successful! Please check your email to verify your account.');
      setShowModal(true);
      setNavigateOnClose(true); // Navigate on close
    } catch (error) {


      // Handle errors during registration
      setModalMessage('This email is already in use. Please try logging in or use a different email.');
      setShowModal(true);
      setNavigateOnClose(false); // Do not navigate on close
      console.error('Error during registration:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (navigateOnClose) {
      navigate('/login');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleRegister}>
        <Title>Register</Title>
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password must be six digits"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Register</Button>
      </Form>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Registration Message"
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

export default Register;
