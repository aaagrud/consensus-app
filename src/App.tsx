// src/App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Remove BrowserRouter
import Login from './login';
import Signup from './Signup';
import { getAuth } from 'firebase/auth';
import {signOut} from 'firebase/auth';
const App: React.FC = () => {

  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Dashboard" element={<Dashboard />} />

      {/* Protected Route */}
      <Route
        path="/"
        element={user ? <Login/> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

// Simple Dashboard Component
const Dashboard = () => {
  const auth = getAuth();
  const user = auth.currentUser;

const handleLogout = async () => {
  await signOut(auth);
  window.location.href = '/login';
};

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome, {user?.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default App;