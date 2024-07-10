// pages/ProtectedPage.js
import React from 'react';
import ProtectedComponent from '../components/ProtectedComponent';

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <ProtectedComponent />
    </div>
  );
};

export default ProtectedPage;

