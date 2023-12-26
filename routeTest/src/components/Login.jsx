// Login.jsx

import React, { useState } from 'react';

const Login = () => {
  // State for login details
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Validate login details (you can add more validation logic here)
    if (email && password) {
      // Store login details in localStorage
      localStorage.setItem('user', JSON.stringify({ email, password }));
      
      // Set isLoggedIn to true
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    // Remove user details from localStorage
    localStorage.removeItem('user');
    
    // Set isLoggedIn to false
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {email}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};
export const isLoggedIn = () => {
    // Check if user is logged in based on your logic
    // For example, check if the user details are present in localStorage
    return !!localStorage.getItem('user');
  };
  
  export default Login;