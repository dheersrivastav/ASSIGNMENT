import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedComponent = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    // Redirect to login page or show a message
    return (
      <div>
        <p>You need to login to access this page.</p>
        <button onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    );
  }

  // Render protected content if user is authenticated
  return (
    <div>
      <h2>Protected Content</h2>
      <p>Welcome, {currentUser.email}!</p>
      {/* Add your protected content here */}
    </div>
  );
};

export default ProtectedComponent;

