// src/Signup.tsx
import React, { useState } from 'react';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', auth.currentUser);
      alert('Account created successfully!');
      navigate ? navigate('/') : (window.location.href = '/'); 
    } catch (error: any) {
      console.error('Sign up error:', error.message);
      alert(`Sign up failed: ${error.message}`);
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: '50px auto', textAlign: 'center' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
        />
        <br />
        <button
          type="submit"
          style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '10px' }}
        >
          Create Account
        </button>
      </form>
      <p style={{ marginTop: '20px' }}>
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
};

export default Signup;